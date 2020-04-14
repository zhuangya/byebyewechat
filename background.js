"use strict";

chrome.webRequest.onBeforeRequest.addListener(
  info => {
    const mark = "&url=";
    const redirectUrl = decodeURIComponent(
      info.url.slice(url.indexOf(mark) + mark.length).replace(/&.*$/, "")
    );
    return { redirectUrl };
  },
  {
    urls: ["*://weixin110.qq.com/*", "*://support.weixin.qq.com/*"]
  },
  ["blocking"]
);
