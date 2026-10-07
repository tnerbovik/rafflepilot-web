const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync, existsSync } = require('node:fs');
const { join } = require('node:path');
const vm = require('node:vm');

const path = join(__dirname, '../assets/language.js');
const source = existsSync(path) ? readFileSync(path, 'utf8') : '';

function visit({ languages = ['en-US'], saved, pathname = '/', search = '', hash = '', blocked = false } = {}) {
  const redirects = [];
  const picker = { value: pathname.startsWith('/no/') ? 'nb' : 'en', disabled: true, listeners: {}, addEventListener(event, callback) { this.listeners[event] = callback; } };
  const choices = ['en', 'nb'].map(language => ({
    dataset: { language }, hash: '', listeners: {},
    addEventListener(event, callback) { this.listeners[event] = callback; }
  }));
  let preference = saved;
  vm.runInNewContext(source, {
    navigator: { languages, language: languages[0] },
    location: { pathname, search, hash, replace(url) { redirects.push(url); }, assign(url) { redirects.push(url); } },
    localStorage: {
      getItem() { if (blocked) throw new Error('Storage unavailable'); return preference; },
      setItem(key, value) { if (blocked) throw new Error('Storage unavailable'); preference = value; }
    },
    URLSearchParams,
    document: { querySelectorAll() { return choices; }, querySelector() { return picker; } }
  });
  return { redirects, preference: () => preference, choices, picker };
}

test('Norwegian browser preferences open the Norwegian page and preserve the section', () => {
  for (const language of ['nb-NO', 'nn-NO', 'no']) {
    assert.deepEqual(visit({ languages: [language], hash: '#features' }).redirects, ['/no/#features']);
  }
});

test('English takes precedence when it is preferred over Norwegian', () => {
  assert.deepEqual(visit({ languages: ['en-GB', 'nb-NO'] }).redirects, []);
});

test('unsupported languages fall back to the first supported preference', () => {
  assert.deepEqual(visit({ languages: ['fr-FR', 'nb-NO', 'en'] }).redirects, ['/no/']);
  assert.deepEqual(visit({ languages: ['fr-FR'] }).redirects, []);
});

test('a remembered language overrides browser preference', () => {
  assert.deepEqual(visit({ saved: 'en', languages: ['nb-NO'] }).redirects, []);
  assert.deepEqual(visit({ saved: 'nb' }).redirects, ['/no/']);
});

test('direct Norwegian URLs stay Norwegian even with an English preference', () => {
  assert.deepEqual(visit({ pathname: '/no/', saved: 'en' }).redirects, []);
});

test('explicit English selection works when storage is blocked', () => {
  assert.deepEqual(visit({ languages: ['nb-NO'], search: '?lang=en', blocked: true }).redirects, []);
});

test('automatic selection still works when storage is blocked', () => {
  assert.deepEqual(visit({ languages: ['nn-NO'], blocked: true }).redirects, ['/no/']);
});

test('the language dropdown remembers the choice and preserves the section', () => {
  const page = visit({ pathname: '/no/', hash: '#audience-title' });
  page.picker.value = 'en';
  assert.equal(typeof page.picker.listeners.change, 'function');
  page.picker.listeners.change();
  assert.equal(page.preference(), 'en');
  assert.deepEqual(page.redirects, ['/?lang=en#audience-title']);
  assert.equal(page.picker.disabled, false);
});

test('the dropdown switches to Norwegian even when storage is blocked', () => {
  const page = visit({ blocked: true, hash: '#features' });
  page.picker.value = 'nb';
  assert.equal(typeof page.picker.listeners.change, 'function');
  page.picker.listeners.change();
  assert.deepEqual(page.redirects, ['/no/#features']);
});
