/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(41, 100%, 97%)',
            '100': 'hsl(41, 100%, 94%)',
            '200': 'hsl(41, 100%, 86%)',
            '300': 'hsl(41, 100%, 76%)',
            '400': 'hsl(41, 100%, 64%)',
            '500': 'hsl(41, 100%, 50%)',
            '600': 'hsl(41, 100%, 40%)',
            '700': 'hsl(41, 100%, 32%)',
            '800': 'hsl(41, 100%, 24%)',
            '900': 'hsl(41, 100%, 16%)',
            '950': 'hsl(41, 100%, 10%)',
            DEFAULT: '#fcac00'
        },
        secondary: {
            '50': 'hsl(217, 100%, 97%)',
            '100': 'hsl(217, 100%, 94%)',
            '200': 'hsl(217, 100%, 86%)',
            '300': 'hsl(217, 100%, 76%)',
            '400': 'hsl(217, 100%, 64%)',
            '500': 'hsl(217, 100%, 50%)',
            '600': 'hsl(217, 100%, 40%)',
            '700': 'hsl(217, 100%, 32%)',
            '800': 'hsl(217, 100%, 24%)',
            '900': 'hsl(217, 100%, 16%)',
            '950': 'hsl(217, 100%, 10%)',
            DEFAULT: '#0866ff'
        },
        accent: {
            '50': 'hsl(0, 100%, 97%)',
            '100': 'hsl(0, 100%, 94%)',
            '200': 'hsl(0, 100%, 86%)',
            '300': 'hsl(0, 100%, 76%)',
            '400': 'hsl(0, 100%, 64%)',
            '500': 'hsl(0, 100%, 50%)',
            '600': 'hsl(0, 100%, 40%)',
            '700': 'hsl(0, 100%, 32%)',
            '800': 'hsl(0, 100%, 24%)',
            '900': 'hsl(0, 100%, 16%)',
            '950': 'hsl(0, 100%, 10%)',
            DEFAULT: '#ff0000'
        },
        'neutral-50': '#3a3a3a',
        'neutral-100': '#ffffff',
        'neutral-200': '#191919',
        'neutral-300': '#666666',
        'neutral-400': '#e0e0e0',
        'neutral-500': '#000000',
        'neutral-600': '#adb5b7',
        'neutral-700': '#808080',
        'neutral-800': '#9b9b9b',
        'neutral-900': '#f0f0f0',
        background: '#ffffff',
        foreground: '#666666'
    },
    fontFamily: {
        body: [
            'vote-reward-badges',
            'sans-serif'
        ],
        heading: [
            'Merriweather Sans',
            'sans-serif'
        ]
    },
    fontSize: {
        '12': [
            '12px',
            {
                lineHeight: 'normal'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '24.5px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: '27.2px'
            }
        ],
        '18': [
            '18px',
            {
                lineHeight: '31.5px'
            }
        ],
        '20': [
            '20px',
            {
                lineHeight: '25px'
            }
        ],
        '22': [
            '22px',
            {
                lineHeight: '0px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '42px'
            }
        ],
        '25': [
            '25px',
            {
                lineHeight: '31.25px'
            }
        ],
        '30': [
            '30px',
            {
                lineHeight: '37.5px'
            }
        ],
        '32': [
            '32px',
            {
                lineHeight: '0px'
            }
        ],
        '45': [
            '45px',
            {
                lineHeight: '56.25px'
            }
        ],
        '22.4': [
            '22.4px',
            {
                lineHeight: '39.2px'
            }
        ],
        '20.48': [
            '20.48px',
            {
                lineHeight: '35.84px'
            }
        ],
        '13.3333': [
            '13.3333px',
            {
                lineHeight: 'normal'
            }
        ]
    },
    spacing: {
        '3': '15px',
        '6': '30px',
        '7': '35px',
        '8': '40px',
        '10': '50px',
        '12': '60px',
        '14': '70px',
        '48': '240px',
        '1px': '1px',
        '26px': '26px'
    },
    borderRadius: {
        full: '50px'
    },
    boxShadow: {
        sm: 'rgba(219, 171, 0, 0.83) 0px 0px 0px 0px',
        md: 'rgba(0, 0, 0, 0.08) 0px 2px 8px 0px'
    },
    screens: {
        xs: '320px',
        sm: '641px',
        md: '783px',
        lg: '992px',
        '1201px': '1201px',
        xl: '1300px',
        '1440px': '1440px',
        '2xl': '1600px',
        '2560px': '2560px'
    },
    transitionDuration: {
        '150': '0.15s',
        '200': '0.2s',
        '300': '0.3s',
        '420': '0.42s',
        '500': '0.5s'
    },
    transitionTimingFunction: {
        default: 'ease',
        linear: 'linear'
    },
    container: {
        center: true,
        padding: '0px'
    },
    maxWidth: {
        container: '100%'
    }
},
  },
};
