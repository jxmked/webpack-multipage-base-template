const pages = [
  {
    title: 'index',
    folder: ''
  },
  {
    title: 'pagetwo',
    folder: 'pagetwo'
  },
  {
    title: 'pagethree',
    folder: 'pagethree'
  }
];

const publicPath = 'webpack-multipage-base-template/';

const appName = 'Webpack multipage base template';
const shortAppName = 'Webpack app';
const GA4_MEASUREMENT_ID = 'G-TFPC622JKX'; // Set to false to disable
const SITE_NAME = 'jxmked page';
const PRODUCT_ICON = {
  href: './product-icon.png',
  width: '1024',
  height: '1024'
};

const PWA = {
  theme_color: '#272738',
  background: '#3a3a3c'
};

export default {
  pages,
  publicPath,
  appName,
  shortAppName,
  GA4_MEASUREMENT_ID,
  SITE_NAME,
  PRODUCT_ICON,
  PWA
};
