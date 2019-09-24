import { rewriteUrl, filter, extraInfoSpec } from './core';

describe('core', () => {
  it('should parse url correctly', () => {

    const fakeInfo = {
      url: 'https://weixin110.qq.com/cgi-bin/mmspamsupport-bin/newredirectconfirmcgi?main_type=2&evil_type=20&source=2&url=http%3A%2F%2Fwww.voidcn.com%2Farticle%2Fp-vvkyrmar-bno.html#wechat_redirect'
    };

    expect(rewriteUrl(fakeInfo)).toStrictEqual({
      redirectUrl: 'http://www.voidcn.com/article/p-vvkyrmar-bno.html#wechat_redirect'
    });
  });

  it('should also support `support.weixin.qq.com`', () => {

    const fakeInfo = {
      url: 'https://support.weixin.qq.com/cgi-bin/mmspamsupport-bin/newredirectconfirmcgi?main_type=2&evil_type=20&source=2&url=http%3A%2F%2Fwww.voidcn.com%2Farticle%2Fp-vvkyrmar-bno.html#wechat_redirect'
    };

    expect(rewriteUrl(fakeInfo)).toStrictEqual({
      redirectUrl: 'http://www.voidcn.com/article/p-vvkyrmar-bno.html#wechat_redirect'
    });
  });

  it('should match filter', () => {
    expect(filter).toStrictEqual({
      urls: [
        '*://weixin110.qq.com/*',
        '*://support.weixin.qq.com/*'
      ],
    });
  });

  it('should match extraInfoSpec', () => {
    expect(extraInfoSpec).toStrictEqual(
      ['blocking']
    );
  });
});
