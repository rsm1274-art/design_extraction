/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(230, 72%, 97%)',
            '100': 'hsl(230, 72%, 94%)',
            '200': 'hsl(230, 72%, 86%)',
            '300': 'hsl(230, 72%, 76%)',
            '400': 'hsl(230, 72%, 64%)',
            '500': 'hsl(230, 72%, 50%)',
            '600': 'hsl(230, 72%, 40%)',
            '700': 'hsl(230, 72%, 32%)',
            '800': 'hsl(230, 72%, 24%)',
            '900': 'hsl(230, 72%, 16%)',
            '950': 'hsl(230, 72%, 10%)',
            DEFAULT: '#2c48dc'
        },
        secondary: {
            '50': 'hsl(30, 100%, 97%)',
            '100': 'hsl(30, 100%, 94%)',
            '200': 'hsl(30, 100%, 86%)',
            '300': 'hsl(30, 100%, 76%)',
            '400': 'hsl(30, 100%, 64%)',
            '500': 'hsl(30, 100%, 50%)',
            '600': 'hsl(30, 100%, 40%)',
            '700': 'hsl(30, 100%, 32%)',
            '800': 'hsl(30, 100%, 24%)',
            '900': 'hsl(30, 100%, 16%)',
            '950': 'hsl(30, 100%, 10%)',
            DEFAULT: '#ff8000'
        },
        accent: {
            '50': 'hsl(189, 100%, 97%)',
            '100': 'hsl(189, 100%, 94%)',
            '200': 'hsl(189, 100%, 86%)',
            '300': 'hsl(189, 100%, 76%)',
            '400': 'hsl(189, 100%, 64%)',
            '500': 'hsl(189, 100%, 50%)',
            '600': 'hsl(189, 100%, 40%)',
            '700': 'hsl(189, 100%, 32%)',
            '800': 'hsl(189, 100%, 24%)',
            '900': 'hsl(189, 100%, 16%)',
            '950': 'hsl(189, 100%, 10%)',
            DEFAULT: '#00afcf'
        },
        'neutral-50': '#1a1a1a',
        'neutral-100': '#ffffff',
        'neutral-200': '#aeb0b7',
        'neutral-300': '#000000',
        background: '#f0f3ff',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'GT America',
            'sans-serif'
        ],
        heading: [
            'Le Monde Livre',
            'sans-serif'
        ]
    },
    fontSize: {
        '12': [
            '12px',
            {
                lineHeight: '18px'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '21px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: '18.4px'
            }
        ],
        '18': [
            '18px',
            {
                lineHeight: '27px'
            }
        ],
        '20': [
            '20px',
            {
                lineHeight: '23px'
            }
        ],
        '22': [
            '22px',
            {
                lineHeight: '25.3px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '27.6px'
            }
        ],
        '28': [
            '28px',
            {
                lineHeight: '30.8px'
            }
        ],
        '32': [
            '32px',
            {
                lineHeight: '36.8px'
            }
        ],
        '36': [
            '36px',
            {
                lineHeight: '41.4px'
            }
        ],
        '40': [
            '40px',
            {
                lineHeight: '46px'
            }
        ],
        '46': [
            '46px',
            {
                lineHeight: '46px'
            }
        ],
        '48': [
            '48px',
            {
                lineHeight: '43.2px'
            }
        ],
        '64': [
            '64px',
            {
                lineHeight: '64px'
            }
        ],
        '128': [
            '128px',
            {
                lineHeight: '76.8px'
            }
        ]
    },
    spacing: {
        '4': '20px',
        '5': '25px',
        '6': '30px',
        '8': '40px',
        '10': '50px',
        '14': '70px',
        '15': '75px',
        '16': '80px',
        '17': '85px',
        '40': '200px',
        '61': '305px',
        '1px': '1px',
        '57px': '57px'
    },
    boxShadow: {
        xs: 'rgba(0, 0, 0, 0.08) 0px 2px 8px 0px'
    },
    screens: {
        xs: '376px',
        md: '782px'
    },
    transitionDuration: {
        '0': '0s',
        '200': '0.2s',
        '400': '0.4s',
        '500': '0.5s',
        '1000': '1s'
    },
    container: {
        center: true,
        padding: '25px'
    },
    maxWidth: {
        container: '1440px'
    }
},
  },
};
