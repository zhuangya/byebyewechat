'use strict';

import qs from 'query-string';

export const rewriteUrl = info => {
  const { url: redirectUrl } = qs.parse(info.url);
  return { redirectUrl };
}

export const filter = {
  urls: [
    '*://weixin110.qq.com/*'
  ],
};

export const extraInfoSpec = ['blocking'];
