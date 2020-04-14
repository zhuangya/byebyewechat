"use strict";

chrome.webRequest.onBeforeRequest.addListener(
  ({ url = "" }) => {
    const mark = "&url=";
    const markIndex = url.indexOf(mark);

    if (markIndex > -1) {
      const redirectUrl = decodeURIComponent(
        url.slice(markIndex + mark.length).replace(/&.*$/, "")
      );
      return { redirectUrl };
    }
  },
  {
    urls: ["*://weixin110.qq.com/*", "*://support.weixin.qq.com/*"]
  },
  ["blocking"]
);
