// Слой «Приложения»: пометка <body>, чтобы css/apps-layer.css раскрывал в
// левом меню только текущее приложение. Переходы в теме мгновенные
// (navigation.instant), поэтому пересчёт — на каждом событии document$.
(function () {
  function mark() {
    var inApps = /\/apps\//.test(location.pathname);
    document.body.classList.toggle('apps-layer', inApps);
  }
  if (typeof document$ !== 'undefined') document$.subscribe(mark); else mark();
})();
