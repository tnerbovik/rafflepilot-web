(() => {
  const preferenceKey = 'rafflepilot-language';
  const supported = language => language === 'en' || language === 'nb';
  const remember = language => {
    try { localStorage.setItem(preferenceKey, language); } catch { /* Links still work without storage. */ }
  };

  const picker = document.querySelector('[data-language-select]');
  if (picker) {
    picker.disabled = false;
    picker.addEventListener('change', () => {
      if (!supported(picker.value)) return;
      remember(picker.value);
      location.assign((picker.value === 'nb' ? '/no/' : '/?lang=en') + location.hash);
    });
  }

  // A direct /no/ link always opens Norwegian. Only the default landing page
  // selects a language automatically; the explicit English link also works
  // when browser storage is unavailable.
  if (location.pathname !== '/' && location.pathname !== '/index.html') return;
  let language = new URLSearchParams(location.search).get('lang');
  if (supported(language)) {
    remember(language);
  } else {
    try { language = localStorage.getItem(preferenceKey); } catch { /* Use browser preferences. */ }
    if (!supported(language)) {
      language = 'en';
      for (const preferred of navigator.languages?.length ? navigator.languages : [navigator.language]) {
        const base = (preferred || '').toLowerCase().split('-')[0];
        if (['nb', 'nn', 'no'].includes(base)) { language = 'nb'; break; }
        if (base === 'en') break;
      }
    }
  }
  if (language === 'nb') location.replace('/no/' + location.hash);
})();
