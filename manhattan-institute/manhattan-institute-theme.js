// React Theme — extracted from https://manhattan.institute/
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
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '18': string;
    '20': string;
    '22': string;
    '24': string;
    '28': string;
    '32': string;
    '36': string;
    '40': string;
    '46': string;
    '48': string;
    '64': string;
    '128': string;
 *   };
 *   space: {
    '1': string;
    '20': string;
    '25': string;
    '30': string;
    '40': string;
    '50': string;
    '57': string;
    '70': string;
    '75': string;
    '80': string;
    '85': string;
    '200': string;
    '305': string;
 *   };
 *   radii: {

 *   };
 *   shadows: {
    md: string;
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
    "primary": "#2c48dc",
    "secondary": "#ff8000",
    "accent": "#00afcf",
    "background": "#f0f3ff",
    "foreground": "#000000",
    "neutral50": "#1a1a1a",
    "neutral100": "#ffffff",
    "neutral200": "#aeb0b7",
    "neutral300": "#000000"
  },
  "fonts": {
    "body": "'GT America', sans-serif"
  },
  "fontSizes": {
    "18": "18px",
    "20": "20px",
    "22": "22px",
    "24": "24px",
    "28": "28px",
    "32": "32px",
    "36": "36px",
    "40": "40px",
    "46": "46px",
    "48": "48px",
    "64": "64px",
    "128": "128px"
  },
  "space": {
    "1": "1px",
    "20": "20px",
    "25": "25px",
    "30": "30px",
    "40": "40px",
    "50": "50px",
    "57": "57px",
    "70": "70px",
    "75": "75px",
    "80": "80px",
    "85": "85px",
    "200": "200px",
    "305": "305px"
  },
  "radii": {},
  "shadows": {
    "md": "rgba(0, 0, 0, 0.08) 0px 2px 8px 0px"
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
      "main": "#2c48dc",
      "light": "hsl(230, 72%, 67%)",
      "dark": "hsl(230, 72%, 37%)"
    },
    "secondary": {
      "main": "#ff8000",
      "light": "hsl(30, 100%, 65%)",
      "dark": "hsl(30, 100%, 35%)"
    },
    "background": {
      "default": "#f0f3ff",
      "paper": "#e1e6fa"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#1a1a1a"
    }
  },
  "typography": {
    "fontFamily": "'GT America', sans-serif",
    "h1": {
      "fontSize": "36px",
      "fontWeight": "700",
      "lineHeight": "41.4px"
    }
  },
  "shape": {},
  "shadows": [
    "rgba(0, 0, 0, 0.08) 0px 2px 8px 0px"
  ]
};

export default theme;
