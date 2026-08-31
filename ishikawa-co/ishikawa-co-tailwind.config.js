/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(171, 59%, 97%)',
            '100': 'hsl(171, 59%, 94%)',
            '200': 'hsl(171, 59%, 86%)',
            '300': 'hsl(171, 59%, 76%)',
            '400': 'hsl(171, 59%, 64%)',
            '500': 'hsl(171, 59%, 50%)',
            '600': 'hsl(171, 59%, 40%)',
            '700': 'hsl(171, 59%, 32%)',
            '800': 'hsl(171, 59%, 24%)',
            '900': 'hsl(171, 59%, 16%)',
            '950': 'hsl(171, 59%, 10%)',
            DEFAULT: '#dcf6f2'
        },
        secondary: {
            '50': 'hsl(176, 77%, 97%)',
            '100': 'hsl(176, 77%, 94%)',
            '200': 'hsl(176, 77%, 86%)',
            '300': 'hsl(176, 77%, 76%)',
            '400': 'hsl(176, 77%, 64%)',
            '500': 'hsl(176, 77%, 50%)',
            '600': 'hsl(176, 77%, 40%)',
            '700': 'hsl(176, 77%, 32%)',
            '800': 'hsl(176, 77%, 24%)',
            '900': 'hsl(176, 77%, 16%)',
            '950': 'hsl(176, 77%, 10%)',
            DEFAULT: '#4ee8dd'
        },
        accent: {
            '50': 'hsl(327, 60%, 97%)',
            '100': 'hsl(327, 60%, 94%)',
            '200': 'hsl(327, 60%, 86%)',
            '300': 'hsl(327, 60%, 76%)',
            '400': 'hsl(327, 60%, 64%)',
            '500': 'hsl(327, 60%, 50%)',
            '600': 'hsl(327, 60%, 40%)',
            '700': 'hsl(327, 60%, 32%)',
            '800': 'hsl(327, 60%, 24%)',
            '900': 'hsl(327, 60%, 16%)',
            '950': 'hsl(327, 60%, 10%)',
            DEFAULT: '#d45199'
        },
        'neutral-50': '#1f1f1f',
        'neutral-100': '#333735',
        'neutral-200': '#2f302d',
        'neutral-300': '#000000',
        'neutral-400': '#486c62',
        'neutral-500': '#ffffff',
        'neutral-600': '#5b8b70',
        'neutral-700': '#444444',
        'neutral-800': '#423737',
        'neutral-900': '#30443d',
        background: '#ffffff',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'Avenir Next',
            'sans-serif'
        ],
        body: [
            'Arial',
            'sans-serif'
        ],
        font3: [
            'Helvetica Neue',
            'sans-serif'
        ]
    },
    fontSize: {
        '14': [
            '14px',
            {
                lineHeight: '20.3px'
            }
        ],
        '15': [
            '15px',
            {
                lineHeight: '27.75px'
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
                lineHeight: '33.3px'
            }
        ],
        '19': [
            '19px',
            {
                lineHeight: '28.5px'
            }
        ],
        '21': [
            '21px',
            {
                lineHeight: '21px'
            }
        ],
        '23': [
            '23px',
            {
                lineHeight: '34.04px'
            }
        ],
        '25': [
            '25px',
            {
                lineHeight: '34.5px'
            }
        ],
        '26': [
            '26px',
            {
                lineHeight: '42.9px'
            }
        ],
        '28': [
            '28px',
            {
                lineHeight: '28px'
            }
        ],
        '31': [
            '31px',
            {
                lineHeight: '57.35px'
            }
        ],
        '34': [
            '34px',
            {
                lineHeight: '37.4px'
            }
        ],
        '52': [
            '52px',
            {
                lineHeight: '52px'
            }
        ],
        '58': [
            '58px',
            {
                lineHeight: '64.96px'
            }
        ],
        '15.5': [
            '15.5px',
            {
                lineHeight: '28.675px',
                letterSpacing: '0.155px'
            }
        ]
    },
    spacing: {
        '21': '42px',
        '26': '52px',
        '28': '56px',
        '32': '64px',
        '36': '72px',
        '48': '96px',
        '65': '130px',
        '90': '180px',
        '1px': '1px'
    },
    borderRadius: {
        xs: '1px',
        md: '6px',
        full: '999px'
    },
    boxShadow: {
        sm: 'rgba(105, 107, 116, 0.72) 0px 0px 4px 0px',
        md: 'rgba(73, 116, 94, 0.024) 8px 12px 0px 0px',
        lg: 'rgba(80, 164, 180, 0.52) 17px -7px 0px -2px, rgba(80, 164, 180, 0.52) 31px 5px 0px -1px, rgba(80, 164, 180, 0.52) 47px -3px 0px -2px'
    },
    transitionDuration: {
        '0': '0s',
        '80': '0.08s',
        '140': '0.14s',
        '160': '0.16s',
        '180': '0.18s',
        '200': '0.2s',
        '220': '0.22s',
        '240': '0.24s',
        '260': '0.26s',
        '280': '0.28s',
        '300': '0.3s',
        '320': '0.32s',
        '340': '0.34s',
        '360': '0.36s',
        '380': '0.38s',
        '400': '0.4s',
        '420': '0.42s',
        '460': '0.46s',
        '480': '0.48s',
        '500': '0.5s',
        '520': '0.52s',
        '560': '0.56s',
        '620': '0.62s',
        '680': '0.68s',
        '700': '0.7s',
        '720': '0.72s',
        '760': '0.76s',
        '900': '0.9s',
        '920': '0.92s',
        '980': '0.98s',
        '1200': '1.2s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0.16, 1, 0.3, 1)',
        linear: 'linear'
    },
    container: {
        center: true,
        padding: '0px'
    },
    maxWidth: {
        container: '760px'
    }
},
  },
};
