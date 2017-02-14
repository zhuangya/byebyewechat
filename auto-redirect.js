(function () {
  'use strict';
  window.location.href = document.body.getAttribute('url').replace(/&amp;/g, '&');
}());
