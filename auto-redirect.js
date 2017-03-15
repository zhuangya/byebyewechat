(function () {
  'use strict';
  if (window.location.href.indexOf('block_type') > -1) {
    window.location.href = decodeURIComponent(window.location.search.split('&').filter(x => x.startsWith('url'))[0].split('=')[1]);
    return;
  }
  window.location.href = document.body.getAttribute('url').replace(/&amp;/g, '&');
}());
