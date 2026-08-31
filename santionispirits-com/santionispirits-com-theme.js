// Santioni Spirits — React / CSS-in-JS theme object
// Extracted via static analysis of https://santionispirits.com/
export const theme = {
  colors: {
    ink: '#121212',
    black: '#1d1d1d',
    pureBlack: '#000000',
    white: '#ffffff',
    brandRed: {
      DEFAULT: '#c82924',
      600: '#be261e',
      700: '#971d16',
      800: '#bc251c',
      900: '#c0261d',
      950: '#990b06',
    },
    gold: '#dfaf49',
    stone: '#ae9c74',
    taupe: '#927a73',
    flavor: {
      blue: '#63c6f8',
      blueAlt: '#2fb5f9',
      blueLight: '#72c5f6',
      blueDeep: '#345bf9',
      blueDark: '#00378f',
      mint: '#6dd993',
      mintLight: '#97f3ad',
      mintDeep: '#07cf4d',
      yellow: '#fbeb7f',
      violet: '#5900ff',
      magenta: '#ff0040',
      magentaDark: '#240023',
    },
  },
  fonts: {
    display: '"Charles Rosie Regular", sans-serif',
    label: '"PPNikkeiMaru-Ultrabold", sans-serif',
    labelRegular: '"PPNikkeiMaru-Regular", sans-serif',
    body: '"GT-Era-Text-Light", sans-serif',
  },
  typography: {
    heading1: { fontFamily: 'display', fontSize: 'clamp(70px, 38.8889vw - 81.6667px, 217px)', fontWeight: 400, letterSpacing: '0.005em', lineHeight: 1.2, textTransform: 'uppercase' },
    heading2: { fontFamily: 'display', fontSize: 'clamp(70px, 8.49673vw + 36.8627px, 200px)', fontWeight: 400, letterSpacing: '0.005em', lineHeight: 1.2, textTransform: 'uppercase' },
    heading3: { fontFamily: 'display', fontSize: 'clamp(40px, 11.1111vw - 3.33333px, 82px)', fontWeight: 400, letterSpacing: '0.005em', lineHeight: 1.2, textTransform: 'uppercase' },
    bodyBold: { fontFamily: 'label', fontSize: 'clamp(12px, 0.793651vw + 8.90476px, 15px)', fontWeight: 800, letterSpacing: '0.005em', lineHeight: 1.2, textTransform: 'uppercase' },
    bodyRegular: { fontFamily: 'body', fontSize: '15px', fontWeight: 300, letterSpacing: '0.005em', lineHeight: 1.5 },
  },
  breakpoints: {
    xs: '320px',
    sm: '390px',
    smAlt: '400px',
    md: '768px',
    mdAlt: '960px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1920px',
  },
  radii: {
    pill: '2em',
    circle: '50%',
  },
  transitions: {
    fast: '0.1s',
    base: '0.2s',
    slow: '0.3s',
    slower: '0.4s',
    easing: 'ease-out',
  },
};

export default theme;
