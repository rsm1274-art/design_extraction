// React Theme — extracted from https://poolside.ai
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
 *   };
 *   fonts: {
    body: string;
    mono: string;
 *   };
 *   fontSizes: {
    '11': string;
    '12': string;
    '13': string;
    '14': string;
    '15': string;
    '16': string;
    '20': string;
    '24': string;
    '32': string;
 *   };
 *   space: {
    '1': string;
    '20': string;
    '24': string;
    '28': string;
    '32': string;
    '40': string;
    '48': string;
    '57': string;
    '76': string;
    '80': string;
    '117': string;
    '133': string;
    '196': string;
 *   };
 *   radii: {
    xs: string;
    sm: string;
    md: string;
    xl: string;
    full: string;
 *   };
 *   shadows: {
    sm: string;
    xs: string;
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
    "primary": "#fbfaf6",
    "secondary": "#3b2c00",
    "accent": "#ff5f57",
    "background": "#fbfaf6",
    "foreground": "#000000",
    "neutral50": "#000000",
    "neutral100": "#6f6d69",
    "neutral200": "#93908b",
    "neutral300": "#b3b0a9",
    "neutral400": "#eeede6",
    "neutral500": "#dad9d2"
  },
  "fonts": {
    "body": "'Untitled Sans', sans-serif",
    "mono": "'Jetbrains Mono', monospace"
  },
  "fontSizes": {
    "11": "11px",
    "12": "12px",
    "13": "13px",
    "14": "14px",
    "15": "15px",
    "16": "16px",
    "20": "20px",
    "24": "24px",
    "32": "32px"
  },
  "space": {
    "1": "1px",
    "20": "20px",
    "24": "24px",
    "28": "28px",
    "32": "32px",
    "40": "40px",
    "48": "48px",
    "57": "57px",
    "76": "76px",
    "80": "80px",
    "117": "117px",
    "133": "133px",
    "196": "196px"
  },
  "radii": {
    "xs": "1px",
    "sm": "4px",
    "md": "10px",
    "xl": "23px",
    "full": "9999px"
  },
  "shadows": {
    "sm": "rgba(0, 0, 0, 0.06) 0px 4px 4px 0px, rgba(0, 0, 0, 0.25) 0px 1px 2px 0px",
    "xs": "rgb(238, 237, 230) 1px 1px 0px 0px"
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
      "main": "#fbfaf6",
      "light": "hsl(48, 38%, 95%)",
      "dark": "hsl(48, 38%, 82%)"
    },
    "secondary": {
      "main": "#3b2c00",
      "light": "hsl(45, 100%, 27%)",
      "dark": "hsl(45, 100%, 10%)"
    },
    "background": {
      "default": "#fbfaf6",
      "paper": "#f7f6ef"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#fbfaf6"
    }
  },
  "typography": {
    "fontFamily": "'Jetbrains Mono', sans-serif",
    "h1": {
      "fontSize": "32px",
      "fontWeight": "400",
      "lineHeight": "41.6px"
    },
    "h2": {
      "fontSize": "24px",
      "fontWeight": "400",
      "lineHeight": "36px"
    },
    "h3": {
      "fontSize": "20px",
      "fontWeight": "400",
      "lineHeight": "28px"
    },
    "body1": {
      "fontSize": "16px",
      "fontWeight": "400",
      "lineHeight": "24px"
    },
    "body2": {
      "fontSize": "14px",
      "fontWeight": "400",
      "lineHeight": "14px"
    }
  },
  "shape": {
    "borderRadius": 10
  },
  "shadows": [
    "rgba(59, 44, 0, 0.08) 0px 0px 0px 1px, rgba(43, 38, 26, 0.02) 0px 1px 1px 0px, rgba(43, 39, 25, 0.02) 0px 2px 4px 0px",
    "color(srgb 0 0 0 / 0.12) 0px 0px 0px 0.5px inset",
    "rgba(43, 38, 26, 0.04) 0px 0px 0px 1px, rgba(43, 38, 26, 0.04) 0px 0px 5px 0px, rgba(43, 38, 26, 0.04) 0px 2px 3px 0px, rgba(43, 38, 26, 0.055) 0px 8px 16px 0px, rgba(43, 38, 26, 0.07) 0px 20px 36px 0px",
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(59, 44, 0, 0.08) 0px 0px 0px 1px inset",
    "rgb(238, 237, 230) 1px 1px 0px 0px"
  ]
};

export default theme;
