/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(158, 100%, 97%)',
            '100': 'hsl(158, 100%, 94%)',
            '200': 'hsl(158, 100%, 86%)',
            '300': 'hsl(158, 100%, 76%)',
            '400': 'hsl(158, 100%, 64%)',
            '500': 'hsl(158, 100%, 50%)',
            '600': 'hsl(158, 100%, 40%)',
            '700': 'hsl(158, 100%, 32%)',
            '800': 'hsl(158, 100%, 24%)',
            '900': 'hsl(158, 100%, 16%)',
            '950': 'hsl(158, 100%, 10%)',
            DEFAULT: '#005032'
        },
        secondary: {
            '50': 'hsl(240, 100%, 97%)',
            '100': 'hsl(240, 100%, 94%)',
            '200': 'hsl(240, 100%, 86%)',
            '300': 'hsl(240, 100%, 76%)',
            '400': 'hsl(240, 100%, 64%)',
            '500': 'hsl(240, 100%, 50%)',
            '600': 'hsl(240, 100%, 40%)',
            '700': 'hsl(240, 100%, 32%)',
            '800': 'hsl(240, 100%, 24%)',
            '900': 'hsl(240, 100%, 16%)',
            '950': 'hsl(240, 100%, 10%)',
            DEFAULT: '#0000ee'
        },
        accent: {
            '50': 'hsl(157, 100%, 97%)',
            '100': 'hsl(157, 100%, 94%)',
            '200': 'hsl(157, 100%, 86%)',
            '300': 'hsl(157, 100%, 76%)',
            '400': 'hsl(157, 100%, 64%)',
            '500': 'hsl(157, 100%, 50%)',
            '600': 'hsl(157, 100%, 40%)',
            '700': 'hsl(157, 100%, 32%)',
            '800': 'hsl(157, 100%, 24%)',
            '900': 'hsl(157, 100%, 16%)',
            '950': 'hsl(157, 100%, 10%)',
            DEFAULT: '#003d26'
        },
        'neutral-50': '#000000',
        'neutral-100': '#ffffff',
        'neutral-200': '#68655e',
        'neutral-300': '#e6e6e6',
        'neutral-400': '#343434',
        'neutral-500': '#8f8d8a',
        background: '#fafaf9',
        foreground: '#000000'
    },
    fontFamily: {
        sans: [
            'CUSTOMV2;Aktiv Grotesk VF Variable Regular',
            'sans-serif'
        ],
        body: [
            'Times New Roman',
            'sans-serif'
        ],
        font2: [
            'Aktiv Grotesk VF Variable Regular',
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
        '13': [
            '13px',
            {
                lineHeight: '16px',
                letterSpacing: '-0.13px'
            }
        ],
        '86.6611': [
            '86.6611px',
            {
                lineHeight: '86.6611px',
                letterSpacing: '-2.59983px'
            }
        ],
        '54.1632': [
            '54.1632px',
            {
                lineHeight: '56.8714px',
                letterSpacing: '-2.16653px'
            }
        ],
        '39.7197': [
            '39.7197px',
            {
                lineHeight: '41.7057px',
                letterSpacing: '-1.19159px'
            }
        ],
        '32.4979': [
            '32.4979px',
            {
                lineHeight: '38.9975px',
                letterSpacing: '-0.649958px'
            }
        ],
        '21.6653': [
            '21.6653px',
            {
                lineHeight: '25.9983px',
                letterSpacing: '-0.216653px'
            }
        ],
        '14.4435': [
            '14.4435px',
            {
                lineHeight: 'normal'
            }
        ],
        '12.7103': [
            '12.7103px',
            {
                lineHeight: '17.7944px'
            }
        ]
    },
    spacing: {
        '2': '4px',
        '10': '20px',
        '15': '30px',
        '30': '60px',
        '40': '80px',
        '45': '90px',
        '100': '200px',
        '173': '346px',
        '45px': '45px'
    },
    borderRadius: {
        xs: '2px',
        sm: '5px',
        lg: '15px',
        xl: '24px',
        full: '999px'
    },
    transitionDuration: {
        '300': '0.3s',
        '500': '0.5s'
    },
    transitionTimingFunction: {
        default: 'ease',
        custom: 'cubic-bezier(0.625, 0.05, 0, 1)'
    },
    container: {
        center: true,
        padding: '0px'
    },
    maxWidth: {
        container: '1728px'
    }
},
  },
};
