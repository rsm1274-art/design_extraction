// React Theme — extracted from https://www.memphispolice.org/about/
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
    neutral900: string;
 *   };
 *   fonts: {
    body: string;
 *   };
 *   fontSizes: {
    '14': string;
    '16': string;
    '18': string;
    '20': string;
    '22': string;
    '24': string;
    '25': string;
    '30': string;
    '32': string;
    '45': string;
    '22.4': string;
    '20.48': string;
 *   };
 *   space: {
    '1': string;
    '15': string;
    '26': string;
    '30': string;
    '35': string;
    '40': string;
    '50': string;
    '60': string;
    '70': string;
    '240': string;
 *   };
 *   radii: {
    full: string;
 *   };
 *   shadows: {
    sm: string;
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
    "primary": "#fcac00",
    "secondary": "#0866ff",
    "accent": "#ff0000",
    "background": "#ffffff",
    "foreground": "#666666",
    "neutral50": "#3a3a3a",
    "neutral100": "#ffffff",
    "neutral200": "#191919",
    "neutral300": "#666666",
    "neutral400": "#e0e0e0",
    "neutral500": "#000000",
    "neutral600": "#adb5b7",
    "neutral700": "#808080",
    "neutral800": "#9b9b9b",
    "neutral900": "#f0f0f0"
  },
  "fonts": {
    "body": "'vote-reward-badges', sans-serif"
  },
  "fontSizes": {
    "14": "14px",
    "16": "16px",
    "18": "18px",
    "20": "20px",
    "22": "22px",
    "24": "24px",
    "25": "25px",
    "30": "30px",
    "32": "32px",
    "45": "45px",
    "22.4": "22.4px",
    "20.48": "20.48px"
  },
  "space": {
    "1": "1px",
    "15": "15px",
    "26": "26px",
    "30": "30px",
    "35": "35px",
    "40": "40px",
    "50": "50px",
    "60": "60px",
    "70": "70px",
    "240": "240px"
  },
  "radii": {
    "full": "50px"
  },
  "shadows": {
    "sm": "rgba(219, 171, 0, 0.83) 0px 0px 0px 0px",
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
      "main": "#fcac00",
      "light": "hsl(41, 100%, 64%)",
      "dark": "hsl(41, 100%, 34%)"
    },
    "secondary": {
      "main": "#0866ff",
      "light": "hsl(217, 100%, 67%)",
      "dark": "hsl(217, 100%, 37%)"
    },
    "background": {
      "default": "#ffffff",
      "paper": "#fcac00"
    },
    "text": {
      "primary": "#666666",
      "secondary": "#3a3a3a"
    }
  },
  "typography": {
    "fontFamily": "'Lato', sans-serif",
    "h1": {
      "fontSize": "32px",
      "fontWeight": "400",
      "lineHeight": "0px"
    },
    "h2": {
      "fontSize": "24px",
      "fontWeight": "400",
      "lineHeight": "42px"
    },
    "h3": {
      "fontSize": "22.4px",
      "fontWeight": "400",
      "lineHeight": "39.2px"
    }
  },
  "shape": {
    "borderRadius": 50
  },
  "shadows": [
    "rgba(8, 36, 145, 0.78) 0px 0px 0px 0px",
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px",
    "rgba(219, 171, 0, 0.83) 0px 0px 0px 0px",
    "rgba(0, 0, 0, 0.08) 0px 2px 8px 0px"
  ]
};

export default theme;
