/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(200, 51%, 97%)',
            '100': 'hsl(200, 51%, 94%)',
            '200': 'hsl(200, 51%, 86%)',
            '300': 'hsl(200, 51%, 76%)',
            '400': 'hsl(200, 51%, 64%)',
            '500': 'hsl(200, 51%, 50%)',
            '600': 'hsl(200, 51%, 40%)',
            '700': 'hsl(200, 51%, 32%)',
            '800': 'hsl(200, 51%, 24%)',
            '900': 'hsl(200, 51%, 16%)',
            '950': 'hsl(200, 51%, 10%)',
            DEFAULT: '#2b6786'
        },
        secondary: {
            '50': 'hsl(4, 77%, 97%)',
            '100': 'hsl(4, 77%, 94%)',
            '200': 'hsl(4, 77%, 86%)',
            '300': 'hsl(4, 77%, 76%)',
            '400': 'hsl(4, 77%, 64%)',
            '500': 'hsl(4, 77%, 50%)',
            '600': 'hsl(4, 77%, 40%)',
            '700': 'hsl(4, 77%, 32%)',
            '800': 'hsl(4, 77%, 24%)',
            '900': 'hsl(4, 77%, 16%)',
            '950': 'hsl(4, 77%, 10%)',
            DEFAULT: '#e33529'
        },
        accent: {
            '50': 'hsl(351, 66%, 97%)',
            '100': 'hsl(351, 66%, 94%)',
            '200': 'hsl(351, 66%, 86%)',
            '300': 'hsl(351, 66%, 76%)',
            '400': 'hsl(351, 66%, 64%)',
            '500': 'hsl(351, 66%, 50%)',
            '600': 'hsl(351, 66%, 40%)',
            '700': 'hsl(351, 66%, 32%)',
            '800': 'hsl(351, 66%, 24%)',
            '900': 'hsl(351, 66%, 16%)',
            '950': 'hsl(351, 66%, 10%)',
            DEFAULT: '#f0b5be'
        },
        'neutral-50': '#000000',
        'neutral-100': '#f6f6ed',
        'neutral-200': '#ede2e2',
        'neutral-300': '#ffffff',
        background: '#f4ced3',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'Times New Roman',
            'sans-serif'
        ],
        heading: [
            'Bayon',
            'sans-serif'
        ],
        body: [
            'Arial',
            'sans-serif'
        ]
    },
    fontSize: {
        '11': [
            '11px',
            {
                lineHeight: '11px'
            }
        ],
        '64': [
            '64px',
            {
                lineHeight: '49.92px',
                letterSpacing: '-1.70667px'
            }
        ],
        '112': [
            '112px',
            {
                lineHeight: '89.6px',
                letterSpacing: '-2.25333px'
            }
        ],
        '260.444': [
            '260.444px',
            {
                lineHeight: '203.147px',
                letterSpacing: '-5.20889px'
            }
        ],
        '209.778': [
            '209.778px',
            {
                lineHeight: '163.627px',
                letterSpacing: '-4.19556px'
            }
        ],
        '165.333': [
            '165.333px',
            {
                lineHeight: '128.96px',
                letterSpacing: '-3.30667px'
            }
        ],
        '85.3333': [
            '85.3333px',
            {
                lineHeight: '66.56px',
                letterSpacing: '-1.70667px'
            }
        ],
        '67.5556': [
            '67.5556px',
            {
                lineHeight: '52.6933px',
                letterSpacing: '-3.30667px'
            }
        ],
        '62.2222': [
            '62.2222px',
            {
                lineHeight: '48.5333px',
                letterSpacing: '-1.24444px'
            }
        ],
        '37.3333': [
            '37.3333px',
            {
                lineHeight: '37.3333px',
                letterSpacing: '-0.746667px'
            }
        ],
        '28.4444': [
            '28.4444px',
            {
                lineHeight: 'normal'
            }
        ],
        '26.6667': [
            '26.6667px',
            {
                lineHeight: '26.6667px',
                letterSpacing: '-0.533333px'
            }
        ],
        '14.2222': [
            '14.2222px',
            {
                lineHeight: 'normal'
            }
        ],
        '13.3333': [
            '13.3333px',
            {
                lineHeight: 'normal'
            }
        ],
        '12.4444': [
            '12.4444px',
            {
                lineHeight: '12.4444px'
            }
        ]
    },
    spacing: {
        '0': '1px',
        '1': '18px',
        '2': '21px',
        '3': '24px',
        '4': '28px',
        '5': '36px',
        '6': '39px',
        '7': '43px',
        '8': '50px',
        '9': '57px',
        '10': '60px',
        '11': '64px',
        '12': '76px',
        '13': '84px',
        '14': '89px',
        '15': '94px',
        '16': '101px',
        '17': '107px'
    },
    borderRadius: {
        sm: '3px',
        md: '9px',
        full: '662px'
    },
    boxShadow: {
        lg: 'rgba(221, 198, 202, 0.4) -3px 4px 14px 0px'
    },
    screens: {
        '1920px': '1920px'
    },
    transitionDuration: {
        '100': '0.1s',
        '150': '0.15s',
        '200': '0.2s',
        '300': '0.3s',
        '400': '0.4s',
        '450': '0.45s',
        '500': '0.5s',
        '600': '0.6s',
        '1000': '1s',
        '1400': '1.4s'
    },
    transitionTimingFunction: {
        linear: 'linear',
        custom: 'cubic-bezier(0.24, 1, 0.36, 1)',
        default: 'ease'
    }
},
  },
};
