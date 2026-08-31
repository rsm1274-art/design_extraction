/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(43, 19%, 97%)',
            '100': 'hsl(43, 19%, 94%)',
            '200': 'hsl(43, 19%, 86%)',
            '300': 'hsl(43, 19%, 76%)',
            '400': 'hsl(43, 19%, 64%)',
            '500': 'hsl(43, 19%, 50%)',
            '600': 'hsl(43, 19%, 40%)',
            '700': 'hsl(43, 19%, 32%)',
            '800': 'hsl(43, 19%, 24%)',
            '900': 'hsl(43, 19%, 16%)',
            '950': 'hsl(43, 19%, 10%)',
            DEFAULT: '#16140f'
        },
        secondary: {
            '50': 'hsl(44, 33%, 97%)',
            '100': 'hsl(44, 33%, 94%)',
            '200': 'hsl(44, 33%, 86%)',
            '300': 'hsl(44, 33%, 76%)',
            '400': 'hsl(44, 33%, 64%)',
            '500': 'hsl(44, 33%, 50%)',
            '600': 'hsl(44, 33%, 40%)',
            '700': 'hsl(44, 33%, 32%)',
            '800': 'hsl(44, 33%, 24%)',
            '900': 'hsl(44, 33%, 16%)',
            '950': 'hsl(44, 33%, 10%)',
            DEFAULT: '#f4f1e9'
        },
        accent: {
            '50': 'hsl(41, 31%, 97%)',
            '100': 'hsl(41, 31%, 94%)',
            '200': 'hsl(41, 31%, 86%)',
            '300': 'hsl(41, 31%, 76%)',
            '400': 'hsl(41, 31%, 64%)',
            '500': 'hsl(41, 31%, 50%)',
            '600': 'hsl(41, 31%, 40%)',
            '700': 'hsl(41, 31%, 32%)',
            '800': 'hsl(41, 31%, 24%)',
            '900': 'hsl(41, 31%, 16%)',
            '950': 'hsl(41, 31%, 10%)',
            DEFAULT: '#ccbe9f'
        },
        'neutral-50': '#45413a',
        'neutral-100': '#000000',
        'neutral-200': '#fbfaf5',
        background: '#f4f1e9',
        foreground: '#000000'
    },
    fontFamily: {
        body: [
            'jetbrainsMono',
            'sans-serif'
        ],
        heading: [
            'franklin',
            'sans-serif'
        ],
        font3: [
            'caslonDisplay',
            'sans-serif'
        ]
    },
    fontSize: {
        '16': [
            '16px',
            {
                lineHeight: '24px'
            }
        ],
        '17': [
            '17px',
            {
                lineHeight: '26.35px'
            }
        ],
        '19': [
            '19px',
            {
                lineHeight: '28.5px',
                letterSpacing: '-0.19px'
            }
        ],
        '21': [
            '21px',
            {
                lineHeight: '25.2px'
            }
        ],
        '22': [
            '22px',
            {
                lineHeight: '33px',
                letterSpacing: '-0.22px'
            }
        ],
        '23': [
            '23px',
            {
                lineHeight: '33.35px'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '26.4px'
            }
        ],
        '28': [
            '28px',
            {
                lineHeight: '29.68px',
                letterSpacing: '-0.28px'
            }
        ],
        '30': [
            '30px',
            {
                lineHeight: '45px',
                letterSpacing: '-0.3px'
            }
        ],
        '32': [
            '32px',
            {
                lineHeight: '48px'
            }
        ],
        '46': [
            '46px',
            {
                lineHeight: '69px',
                letterSpacing: '6.44px'
            }
        ],
        '82': [
            '82px',
            {
                lineHeight: '73.8px',
                letterSpacing: '-0.82px'
            }
        ],
        '104': [
            '104px',
            {
                lineHeight: '95.68px',
                letterSpacing: '-1.04px'
            }
        ],
        '84.48': [
            '84.48px',
            {
                lineHeight: '84.48px',
                letterSpacing: '-1.6896px'
            }
        ],
        '29.44': [
            '29.44px',
            {
                lineHeight: '29.44px'
            }
        ]
    },
    spacing: {
        '1': '2px',
        '24': '48px',
        '28': '56px',
        '38': '76px',
        '69': '138px'
    },
    borderRadius: {
        md: '7px',
        full: '50px'
    },
    boxShadow: {
        sm: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(22, 20, 15, 0.14) 0px 2px 14px 0px',
        xs: 'rgba(251, 250, 245, 0.16) 2px 0px 0px 0px inset',
        xl: 'rgba(22, 20, 15, 0.32) 0px 18px 40px 0px, rgba(22, 20, 15, 0.18) 0px 0px 0px 1px inset'
    },
    transitionDuration: {
        '40': '0.04s',
        '60': '0.06s',
        '80': '0.08s',
        '100': '0.1s',
        '120': '0.12s',
        '140': '0.14s',
        '150': '0.15s',
        '160': '0.16s',
        '180': '0.18s',
        '200': '0.2s',
        '240': '0.24s',
        '260': '0.26s',
        '280': '0.28s',
        '300': '0.3s',
        '320': '0.32s',
        '350': '0.35s',
        '360': '0.36s',
        '400': '0.4s',
        '410': '0.41s',
        '450': '0.45s',
        '470': '0.47s',
        '500': '0.5s',
        '550': '0.55s',
        '600': '0.6s',
        '700': '0.7s'
    },
    transitionTimingFunction: {
        default: 'ease',
        custom: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    },
    container: {
        center: true,
        padding: '16px'
    },
    maxWidth: {
        container: '260px'
    }
},
  },
};
