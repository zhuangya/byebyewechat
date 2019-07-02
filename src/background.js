'use strict';

import { rewriteUrl, filter, extraInfoSpec } from './core';

chrome.webRequest.onBeforeRequest.addListener(
  info => rewriteUrl(info),
  filter,
  extraInfoSpec,
);
