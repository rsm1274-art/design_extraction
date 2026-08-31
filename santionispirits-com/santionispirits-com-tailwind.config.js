/** Santioni Spirits — Tailwind theme
 *  Extracted via static analysis of https://santionispirits.com/
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        ink: '#121212',
        black: '#1d1d1d',
        'pure-black': '#000000',
        white: '#ffffff',
        'brand-red': {
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
          'blue-alt': '#2fb5f9',
          'blue-light': '#72c5f6',
          'blue-deep': '#345bf9',
          'blue-dark': '#00378f',
          mint: '#6dd993',
          'mint-light': '#97f3ad',
          'mint-deep': '#07cf4d',
          yellow: '#fbeb7f',
          violet: '#5900ff',
          magenta: '#ff0040',
          'magenta-dark': '#240023',
        },
      },
      fontFamily: {
        display: ['"Charles Rosie Regular"', 'sans-serif'],
        label: ['"PPNikkeiMaru-Ultrabold"', 'sans-serif'],
        'label-regular': ['"PPNikkeiMaru-Regular"', 'sans-serif'],
        body: ['"GT-Era-Text-Light"', 'sans-serif'],
      },
      fontSize: {
        h1: ['clamp(70px, 38.8889vw - 81.6667px, 217px)', { lineHeight: '1.2', letterSpacing: '0.005em' }],
        h2: ['clamp(70px, 8.49673vw + 36.8627px, 200px)', { lineHeight: '1.2', letterSpacing: '0.005em' }],
        h3: ['clamp(40px, 11.1111vw - 3.33333px, 82px)', { lineHeight: '1.2', letterSpacing: '0.005em' }],
        'body-bold': ['clamp(12px, 0.793651vw + 8.90476px, 15px)', { lineHeight: '1.2', letterSpacing: '0.005em' }],
        'body-regular': ['15px', { lineHeight: '1.5', letterSpacing: '0.005em' }],
      },
      letterSpacing: {
        base: '0.005em',
      },
      screens: {
        xs: '320px',
        sm: '390px',
        'sm-alt': '400px',
        md: '768px',
        'md-alt': '960px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1920px',
      },
      borderRadius: {
        pill: '2em',
      },
      transitionDuration: {
        fast: '100ms',
        base: '200ms',
        slow: '300ms',
        slower: '400ms',
      },
    },
  },
};
