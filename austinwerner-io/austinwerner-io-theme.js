// React Theme — extracted from https://austinwerner.io/
// Compatible with: Chakra UI, Stitches, Vanilla Extract, or any CSS-in-JS

/**
 * TypeScript type definition for this theme:
 *
 * interface Theme {
 *   colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    neutral500: string;
    neutral600: string;
    neutral700: string;
    neutral800: string;
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '14': string;
    '16': string;
    '18': string;
    '24': string;
    '25': string;
    '50': string;
    '70': string;
    '23.2': string;
    '16.8': string;
    '15.2': string;
    '14.4': string;
    '13.12': string;
 *   };
 *   space: {
    '5': string;
    '39': string;
    '46': string;
    '55': string;
    '60': string;
    '66': string;
    '70': string;
    '75': string;
    '80': string;
    '84': string;
    '90': string;
    '97': string;
    '100': string;
    '120': string;
    '253': string;
    '265': string;
 *   };
 *   radii: {
    sm: string;
    md: string;
    full: string;
 *   };
 *   shadows: {
    xl: string;
 *   };
 *   states: {
 *     hover: { opacity: number };
 *     focus: { opacity: number };
 *     active: { opacity: number };
 *     disabled: { opacity: number };
 *   };
 * }
 */

export const theme = {
  "colors": {
    "primary": "#d9b915",
    "secondary": "#ff6d36",
    "accent": "#ffd100",
    "background": "#ffffff",
    "foreground": "#000000",
    "neutral50": "#000000",
    "neutral100": "#ffffff",
    "neutral200": "#939393",
    "neutral300": "#1b1b1b",
    "neutral400": "#484848",
    "neutral500": "#9e9e9e",
    "neutral600": "#aaaaaa",
    "neutral700": "#292929",
    "neutral800": "#171717"
  },
  "fonts": {
    "body": "'Strawford', sans-serif"
  },
  "fontSizes": {
    "14": "14px",
    "16": "16px",
    "18": "18px",
    "24": "24px",
    "25": "25px",
    "50": "50px",
    "70": "70px",
    "23.2": "23.2px",
    "16.8": "16.8px",
    "15.2": "15.2px",
    "14.4": "14.4px",
    "13.12": "13.12px"
  },
  "space": {
    "5": "5px",
    "39": "39px",
    "46": "46px",
    "55": "55px",
    "60": "60px",
    "66": "66px",
    "70": "70px",
    "75": "75px",
    "80": "80px",
    "84": "84px",
    "90": "90px",
    "97": "97px",
    "100": "100px",
    "120": "120px",
    "253": "253px",
    "265": "265px"
  },
  "radii": {
    "sm": "3px",
    "md": "6px",
    "full": "100px"
  },
  "shadows": {
    "xl": "rgba(3, 6, 9, 0.26) 0px 13px 27px -5px"
  },
  "states": {
    "hover": {
      "opacity": 0.08
    },
    "focus": {
      "opacity": 0.12
    },
    "active": {
      "opacity": 0.16
    },
    "disabled": {
      "opacity": 0.38
    }
  }
};

// MUI v5 theme
export const muiTheme = {
  "palette": {
    "primary": {
      "main": "#d9b915",
      "light": "hsl(50, 82%, 62%)",
      "dark": "hsl(50, 82%, 32%)"
    },
    "secondary": {
      "main": "#ff6d36",
      "light": "hsl(16, 100%, 76%)",
      "dark": "hsl(16, 100%, 46%)"
    },
    "background": {
      "default": "#ffffff",
      "paper": "#010101"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#ffffff"
    }
  },
  "typography": {
    "fontFamily": "'Times New Roman', sans-serif",
    "h1": {
      "fontSize": "50px",
      "fontWeight": "400",
      "lineHeight": "normal"
    },
    "h2": {
      "fontSize": "24px",
      "fontWeight": "400",
      "lineHeight": "24px"
    },
    "h3": {
      "fontSize": "23.2px",
      "fontWeight": "400",
      "lineHeight": "27.84px"
    },
    "body1": {
      "fontSize": "18px",
      "fontWeight": "300",
      "lineHeight": "25.2px"
    }
  },
  "shape": {
    "borderRadius": 6
  },
  "shadows": [
    "rgba(2, 2, 3, 0.28) 0px 10px 30px 0px",
    "rgba(3, 6, 9, 0.26) 0px 13px 27px -5px"
  ]
};

export default theme;
