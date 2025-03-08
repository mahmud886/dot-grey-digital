import localFont from 'next/font/local';
export const helveticaNeue = localFont({
  src: [
    { path: '../public/fonts/HelveticaNeueThin.otf', weight: '100', style: 'normal' },
    { path: '../public/fonts/HelveticaNeueBlack.otf', weight: '400', style: 'normal' },
    { path: '../public/fonts/HelveticaNeueMedium.otf', weight: '500', style: 'normal' },
    { path: '../public/fonts/HelveticaNeueBold.otf', weight: '700', style: 'normal' },
  ],
  variable: '--font-helvetica',
});
