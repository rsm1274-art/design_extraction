// React Theme — extracted from https://ishikawa.co/en/
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
    mono: string;
 *   };
 *   fontSizes: {
    '16': string;
    '18': string;
    '19': string;
    '21': string;
    '23': string;
    '25': string;
    '26': string;
    '28': string;
    '31': string;
    '34': string;
    '52': string;
    '58': string;
 *   };
 *   space: {
    '1': string;
    '42': string;
    '52': string;
    '56': string;
    '64': string;
    '72': string;
    '96': string;
    '130': string;
    '180': string;
 *   };
 *   radii: {
    xs: string;
    md: string;
    full: string;
 *   };
 *   shadows: {
    sm: string;
    md: string;
    lg: string;
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
    "primary": "#dcf6f2",
    "secondary": "#4ee8dd",
    "accent": "#d45199",
    "background": "#ffffff",
    "foreground": "#000000",
    "neutral50": "#1f1f1f",
    "neutral100": "#333735",
    "neutral200": "#2f302d",
    "neutral300": "#000000",
    "neutral400": "#486c62",
    "neutral500": "#ffffff",
    "neutral600": "#5b8b70",
    "neutral700": "#444444",
    "neutral800": "#423737",
    "neutral900": "#30443d"
  },
  "fonts": {
    "body": "'Arial', sans-serif",
    "mono": "'SF Mono', monospace"
  },
  "fontSizes": {
    "16": "16px",
    "18": "18px",
    "19": "19px",
    "21": "21px",
    "23": "23px",
    "25": "25px",
    "26": "26px",
    "28": "28px",
    "31": "31px",
    "34": "34px",
    "52": "52px",
    "58": "58px"
  },
  "space": {
    "1": "1px",
    "42": "42px",
    "52": "52px",
    "56": "56px",
    "64": "64px",
    "72": "72px",
    "96": "96px",
    "130": "130px",
    "180": "180px"
  },
  "radii": {
    "xs": "1px",
    "md": "6px",
    "full": "999px"
  },
  "shadows": {
    "sm": "rgba(105, 107, 116, 0.72) 0px 0px 4px 0px",
    "md": "rgba(73, 116, 94, 0.024) 8px 12px 0px 0px",
    "lg": "rgba(80, 164, 180, 0.52) 17px -7px 0px -2px, rgba(80, 164, 180, 0.52) 31px 5px 0px -1px, rgba(80, 164, 180, 0.52) 47px -3px 0px -2px"
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
      "main": "#dcf6f2",
      "light": "hsl(171, 59%, 95%)",
      "dark": "hsl(171, 59%, 76%)"
    },
    "secondary": {
      "main": "#4ee8dd",
      "light": "hsl(176, 77%, 76%)",
      "dark": "hsl(176, 77%, 46%)"
    },
    "background": {
      "default": "#ffffff",
      "paper": "#ffffff"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#1f1f1f"
    }
  },
  "typography": {
    "fontFamily": "'Ishikawa Klee', sans-serif",
    "h1": {
      "fontSize": "34px",
      "fontWeight": "500",
      "lineHeight": "37.4px"
    },
    "h2": {
      "fontSize": "26px",
      "fontWeight": "400",
      "lineHeight": "42.9px"
    }
  },
  "shape": {
    "borderRadius": 6
  },
  "shadows": [
    "rgba(188, 194, 104, 0.08) 0px 0px 0px 2px inset",
    "rgba(91, 139, 112, 0) 0px 0px 0px 4px",
    "rgba(212, 81, 153, 0) 0px 0px 0px 4px",
    "rgba(98, 170, 190, 0) 0px 0px 0px 4px",
    "rgba(178, 180, 100, 0) 0px 0px 0px 4px"
  ]
};

export default theme;
