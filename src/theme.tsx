// @ts-ignore
import future from '@theme-ui/preset-future';
import { merge } from 'theme-ui';

export const pxToRem = (px: number) => `${px / 16}rem`;

// //////////////////// 0   1   2   3   4   5   6   7   8  9   10  11  12
const baseFontSizes = [10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 40, 48, 64];
// /////////////// 0  1  2   3   4   5   6   7   8   9  10  11  12
const baseSpace = [0, 4, 8, 16, 32, 64, 128, 256];
const baseSizes = [0, 4, 8, 16, 32, 64, 128, 256];

export default merge(future, {
  useBorderBox: true,
  useBodyStyles: true,
  breakpoints: ['48em', '64em', '80em'],
  fontSizes: baseFontSizes.map((size) => pxToRem(size)),
  space: baseSpace.map((size) => pxToRem(size)),
  sizes: baseSizes.map((size) => pxToRem(size)),
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
  },
  lineHeights: {
    body: '1.5',
  },
  // @ts-ignore
  fontWeights: {
    body: '400',
    heading: '400',
    medium: '500',
    bold: '700',
  },
  colors: {
    background: '#000',

    text: '#FFF',

    primary: '#FFF',
  },
  layout: {
    container: {
      px: [2, 3],
      maxWidth: pxToRem(1360),
    },
  },
  styles: {
    root: {
      fontSize: 3,
      fontWeight: 'body',
    },
    spinner: {
      default: {
        strokeWidth: 2,
        size: 40,
      },
    },
  },
});
