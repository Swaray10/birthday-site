import { continueRender, delayRender } from 'remotion';

/** Satoshi isn't on Google Fonts, so we load it from Fontshare and hold the
 *  render until the faces are actually ready — otherwise Remotion screenshots
 *  frames in the fallback face and the video won't match the site. */
export const loadSatoshi = () => {
  const handle = delayRender('Loading Satoshi');
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href =
    'https://api.fontshare.com/v2/css?f%5B%5D=satoshi@300,400,500,700,900&display=block';
  document.head.appendChild(link);

  Promise.all([
    document.fonts.load('300 110px "Satoshi Variable"'),
    document.fonts.load('720 12px "Satoshi Variable"')
  ])
    .then(() => document.fonts.ready)
    .then(() => continueRender(handle))
    .catch(() => continueRender(handle));
};
