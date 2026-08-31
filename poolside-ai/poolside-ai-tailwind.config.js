/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(48, 38%, 97%)',
            '100': 'hsl(48, 38%, 94%)',
            '200': 'hsl(48, 38%, 86%)',
            '300': 'hsl(48, 38%, 76%)',
            '400': 'hsl(48, 38%, 64%)',
            '500': 'hsl(48, 38%, 50%)',
            '600': 'hsl(48, 38%, 40%)',
            '700': 'hsl(48, 38%, 32%)',
            '800': 'hsl(48, 38%, 24%)',
            '900': 'hsl(48, 38%, 16%)',
            '950': 'hsl(48, 38%, 10%)',
            DEFAULT: '#fbfaf6'
        },
        secondary: {
            '50': 'hsl(45, 100%, 97%)',
            '100': 'hsl(45, 100%, 94%)',
            '200': 'hsl(45, 100%, 86%)',
            '300': 'hsl(45, 100%, 76%)',
            '400': 'hsl(45, 100%, 64%)',
            '500': 'hsl(45, 100%, 50%)',
            '600': 'hsl(45, 100%, 40%)',
            '700': 'hsl(45, 100%, 32%)',
            '800': 'hsl(45, 100%, 24%)',
            '900': 'hsl(45, 100%, 16%)',
            '950': 'hsl(45, 100%, 10%)',
            DEFAULT: '#3b2c00'
        },
        accent: {
            '50': 'hsl(3, 100%, 97%)',
            '100': 'hsl(3, 100%, 94%)',
            '200': 'hsl(3, 100%, 86%)',
            '300': 'hsl(3, 100%, 76%)',
            '400': 'hsl(3, 100%, 64%)',
            '500': 'hsl(3, 100%, 50%)',
            '600': 'hsl(3, 100%, 40%)',
            '700': 'hsl(3, 100%, 32%)',
            '800': 'hsl(3, 100%, 24%)',
            '900': 'hsl(3, 100%, 16%)',
            '950': 'hsl(3, 100%, 10%)',
            DEFAULT: '#ff5f57'
        },
        'neutral-50': '#000000',
        'neutral-100': '#6f6d69',
        'neutral-200': '#93908b',
        'neutral-300': '#b3b0a9',
        'neutral-400': '#eeede6',
        'neutral-500': '#dad9d2',
        background: '#fbfaf6',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'Untitled Sans',
            'sans-serif'
        ],
        body: [
            'Jetbrains Mono',
            'sans-serif'
        ]
    },
    fontSize: {
        '11': [
            '11px',
            {
                lineHeight: '16.5px'
            }
        ],
        '12': [
            '12px',
            {
                lineHeight: '19.2px'
            }
        ],
        '13': [
            '13px',
            {
                lineHeight: '10px'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '14px',
                letterSpacing: '-0.14px'
            }
        ],
        '15': [
            '15px',
            {
                lineHeight: '18px',
                letterSpacing: '-0.15px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: '24px'
            }
        ],
        '20': [
            '20px',
            {
                lineHeight: '28px',
                letterSpacing: '-0.6px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '36px',
                letterSpacing: '-0.72px'
            }
        ],
        '32': [
            '32px',
            {
                lineHeight: '41.6px',
                letterSpacing: '-1.28px'
            }
        ]
    },
    spacing: {
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '19': '76px',
        '20': '80px',
        '49': '196px',
        '1px': '1px',
        '57px': '57px',
        '117px': '117px',
        '133px': '133px'
    },
    borderRadius: {
        xs: '1px',
        sm: '4px',
        md: '10px',
        xl: '23px',
        full: '9999px'
    },
    boxShadow: {
        sm: 'rgba(0, 0, 0, 0.06) 0px 4px 4px 0px, rgba(0, 0, 0, 0.25) 0px 1px 2px 0px',
        xs: 'rgb(238, 237, 230) 1px 1px 0px 0px'
    },
    screens: {
        md: '768px',
        lg: '1024px',
        '1440px': '1440px'
    },
    transitionDuration: {
        '80': '0.08s',
        '100': '0.1s',
        '120': '0.12s',
        '200': '0.2s',
        '300': '0.3s',
        '500': '0.5s',
        '1000': '1s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0.4, 0, 0.2, 1)',
        default: 'ease'
    },
    container: {
        center: true,
        padding: '80px'
    },
    maxWidth: {
        container: '1440px'
    }
},
  },
};
