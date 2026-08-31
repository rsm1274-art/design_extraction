// React Theme — extracted from https://www.roberttran.com.au/
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
 *   };
 *   fonts: {
    body: string;
    mono: string;
 *   };
 *   fontSizes: {
    '21': string;
    '22': string;
    '23': string;
    '24': string;
    '28': string;
    '30': string;
    '32': string;
    '46': string;
    '82': string;
    '104': string;
    '84.48': string;
    '29.44': string;
 *   };
 *   space: {
    '2': string;
    '48': string;
    '56': string;
    '76': string;
    '138': string;
 *   };
 *   radii: {
    md: string;
    full: string;
 *   };
 *   shadows: {
    sm: string;
    xs: string;
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
    "primary": "#16140f",
    "secondary": "#f4f1e9",
    "accent": "#ccbe9f",
    "background": "#f4f1e9",
    "foreground": "#000000",
    "neutral50": "#45413a",
    "neutral100": "#000000",
    "neutral200": "#fbfaf5"
  },
  "fonts": {
    "body": "'caslonDisplay', sans-serif",
    "mono": "'jetbrainsMono', monospace"
  },
  "fontSizes": {
    "21": "21px",
    "22": "22px",
    "23": "23px",
    "24": "24px",
    "28": "28px",
    "30": "30px",
    "32": "32px",
    "46": "46px",
    "82": "82px",
    "104": "104px",
    "84.48": "84.48px",
    "29.44": "29.44px"
  },
  "space": {
    "2": "2px",
    "48": "48px",
    "56": "56px",
    "76": "76px",
    "138": "138px"
  },
  "radii": {
    "md": "7px",
    "full": "50px"
  },
  "shadows": {
    "sm": "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(22, 20, 15, 0.14) 0px 2px 14px 0px",
    "xs": "rgba(251, 250, 245, 0.16) 2px 0px 0px 0px inset",
    "xl": "rgba(22, 20, 15, 0.32) 0px 18px 40px 0px, rgba(22, 20, 15, 0.18) 0px 0px 0px 1px inset"
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
      "main": "#16140f",
      "light": "hsl(43, 19%, 22%)",
      "dark": "hsl(43, 19%, 10%)"
    },
    "secondary": {
      "main": "#f4f1e9",
      "light": "hsl(44, 33%, 95%)",
      "dark": "hsl(44, 33%, 79%)"
    },
    "background": {
      "default": "#f4f1e9",
      "paper": "#16140f"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#16140f"
    }
  },
  "typography": {
    "fontFamily": "'caslonText', sans-serif",
    "h1": {
      "fontSize": "32px",
      "fontWeight": "400",
      "lineHeight": "48px"
    },
    "h2": {
      "fontSize": "30px",
      "fontWeight": "400",
      "lineHeight": "45px"
    }
  },
  "shape": {
    "borderRadius": 7
  },
  "shadows": [
    "rgb(244, 241, 233) 0px 0px 0px 3px inset, rgba(22, 20, 15, 0.5) 0px 0px 0px 4px inset",
    "rgba(166, 56, 44, 0.35) 0px 0px 0px 2px inset, rgba(22, 20, 15, 0.22) 0px 10px 26px 0px",
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(22, 20, 15, 0.14) 0px 2px 14px 0px",
    "rgba(251, 250, 245, 0.16) 2px 0px 0px 0px inset",
    "rgba(22, 20, 15, 0.32) 0px 18px 40px 0px, rgba(22, 20, 15, 0.18) 0px 0px 0px 1px inset"
  ]
};

export default theme;
