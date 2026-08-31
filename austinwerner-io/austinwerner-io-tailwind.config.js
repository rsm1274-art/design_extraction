/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(50, 82%, 97%)',
            '100': 'hsl(50, 82%, 94%)',
            '200': 'hsl(50, 82%, 86%)',
            '300': 'hsl(50, 82%, 76%)',
            '400': 'hsl(50, 82%, 64%)',
            '500': 'hsl(50, 82%, 50%)',
            '600': 'hsl(50, 82%, 40%)',
            '700': 'hsl(50, 82%, 32%)',
            '800': 'hsl(50, 82%, 24%)',
            '900': 'hsl(50, 82%, 16%)',
            '950': 'hsl(50, 82%, 10%)',
            DEFAULT: '#d9b915'
        },
        secondary: {
            '50': 'hsl(16, 100%, 97%)',
            '100': 'hsl(16, 100%, 94%)',
            '200': 'hsl(16, 100%, 86%)',
            '300': 'hsl(16, 100%, 76%)',
            '400': 'hsl(16, 100%, 64%)',
            '500': 'hsl(16, 100%, 50%)',
            '600': 'hsl(16, 100%, 40%)',
            '700': 'hsl(16, 100%, 32%)',
            '800': 'hsl(16, 100%, 24%)',
            '900': 'hsl(16, 100%, 16%)',
            '950': 'hsl(16, 100%, 10%)',
            DEFAULT: '#ff6d36'
        },
        accent: {
            '50': 'hsl(49, 100%, 97%)',
            '100': 'hsl(49, 100%, 94%)',
            '200': 'hsl(49, 100%, 86%)',
            '300': 'hsl(49, 100%, 76%)',
            '400': 'hsl(49, 100%, 64%)',
            '500': 'hsl(49, 100%, 50%)',
            '600': 'hsl(49, 100%, 40%)',
            '700': 'hsl(49, 100%, 32%)',
            '800': 'hsl(49, 100%, 24%)',
            '900': 'hsl(49, 100%, 16%)',
            '950': 'hsl(49, 100%, 10%)',
            DEFAULT: '#ffd100'
        },
        'neutral-50': '#000000',
        'neutral-100': '#ffffff',
        'neutral-200': '#939393',
        'neutral-300': '#1b1b1b',
        'neutral-400': '#484848',
        'neutral-500': '#9e9e9e',
        'neutral-600': '#aaaaaa',
        'neutral-700': '#292929',
        'neutral-800': '#171717',
        background: '#ffffff',
        foreground: '#000000'
    },
    fontFamily: {
        body: [
            'Strawford',
            'sans-serif'
        ],
        font4: [
            'Neue Machina',
            'sans-serif'
        ]
    },
    fontSize: {
        '10': [
            '10px',
            {
                lineHeight: '12px'
            }
        ],
        '12': [
            '12px',
            {
                lineHeight: '14.4px'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: 'normal'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: 'normal'
            }
        ],
        '18': [
            '18px',
            {
                lineHeight: '25.2px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '24px',
                letterSpacing: '-0.72px'
            }
        ],
        '25': [
            '25px',
            {
                lineHeight: '36px'
            }
        ],
        '50': [
            '50px',
            {
                lineHeight: 'normal'
            }
        ],
        '70': [
            '70px',
            {
                lineHeight: '68px'
            }
        ],
        '23.2': [
            '23.2px',
            {
                lineHeight: '27.84px'
            }
        ],
        '16.8': [
            '16.8px',
            {
                lineHeight: '20.16px'
            }
        ],
        '15.2': [
            '15.2px',
            {
                lineHeight: '18.24px'
            }
        ],
        '14.4': [
            '14.4px',
            {
                lineHeight: '21.6px'
            }
        ],
        '13.12': [
            '13.12px',
            {
                lineHeight: '15.744px'
            }
        ],
        '12.8': [
            '12.8px',
            {
                lineHeight: '15.36px'
            }
        ]
    },
    spacing: {
        '0': '5px',
        '1': '39px',
        '2': '46px',
        '3': '55px',
        '4': '60px',
        '5': '66px',
        '6': '70px',
        '7': '75px',
        '8': '80px',
        '9': '84px',
        '10': '90px',
        '11': '97px',
        '12': '100px',
        '13': '120px',
        '14': '253px',
        '15': '265px',
        '16': '272px'
    },
    borderRadius: {
        sm: '3px',
        md: '6px',
        full: '100px'
    },
    boxShadow: {
        xl: 'rgba(3, 6, 9, 0.26) 0px 13px 27px -5px'
    },
    transitionDuration: {
        '150': '0.15s',
        '250': '0.25s',
        '300': '0.3s',
        '400': '0.4s',
        '500': '0.5s',
        '700': '0.7s',
        '800': '0.8s',
        '900': '0.9s',
        '1000': '1s',
        '1300': '1.3s'
    },
    transitionTimingFunction: {
        default: 'ease',
        linear: 'linear'
    },
    container: {
        center: true,
        padding: '20px'
    },
    maxWidth: {
        container: '1920px'
    }
},
  },
};
