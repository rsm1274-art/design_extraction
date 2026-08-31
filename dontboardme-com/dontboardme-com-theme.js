// React Theme — extracted from https://dontboardme.com/
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
    '64': string;
    '112': string;
    '260.444': string;
    '209.778': string;
    '165.333': string;
    '85.3333': string;
    '67.5556': string;
    '62.2222': string;
    '37.3333': string;
    '28.4444': string;
    '26.6667': string;
    '14.2222': string;
 *   };
 *   space: {
    '1': string;
    '18': string;
    '21': string;
    '24': string;
    '28': string;
    '36': string;
    '39': string;
    '43': string;
    '50': string;
    '57': string;
    '60': string;
    '64': string;
    '76': string;
    '84': string;
    '89': string;
    '94': string;
 *   };
 *   radii: {
    sm: string;
    md: string;
    full: string;
 *   };
 *   shadows: {
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
    "primary": "#2b6786",
    "secondary": "#e33529",
    "accent": "#f0b5be",
    "background": "#f4ced3",
    "foreground": "#000000",
    "neutral50": "#000000",
    "neutral100": "#f6f6ed",
    "neutral200": "#ede2e2",
    "neutral300": "#ffffff"
  },
  "fonts": {
    "body": "'Arial', sans-serif"
  },
  "fontSizes": {
    "64": "64px",
    "112": "112px",
    "260.444": "260.444px",
    "209.778": "209.778px",
    "165.333": "165.333px",
    "85.3333": "85.3333px",
    "67.5556": "67.5556px",
    "62.2222": "62.2222px",
    "37.3333": "37.3333px",
    "28.4444": "28.4444px",
    "26.6667": "26.6667px",
    "14.2222": "14.2222px"
  },
  "space": {
    "1": "1px",
    "18": "18px",
    "21": "21px",
    "24": "24px",
    "28": "28px",
    "36": "36px",
    "39": "39px",
    "43": "43px",
    "50": "50px",
    "57": "57px",
    "60": "60px",
    "64": "64px",
    "76": "76px",
    "84": "84px",
    "89": "89px",
    "94": "94px"
  },
  "radii": {
    "sm": "3px",
    "md": "9px",
    "full": "662px"
  },
  "shadows": {
    "lg": "rgba(221, 198, 202, 0.4) -3px 4px 14px 0px"
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
      "main": "#2b6786",
      "light": "hsl(200, 51%, 50%)",
      "dark": "hsl(200, 51%, 20%)"
    },
    "secondary": {
      "main": "#e33529",
      "light": "hsl(4, 77%, 68%)",
      "dark": "hsl(4, 77%, 38%)"
    },
    "background": {
      "default": "#f4ced3",
      "paper": "#f3f3e9"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#e33529"
    }
  },
  "typography": {
    "fontFamily": "'Neue Montreal', sans-serif",
    "h1": {
      "fontSize": "67.5556px",
      "fontWeight": "400",
      "lineHeight": "52.6933px"
    }
  },
  "shape": {
    "borderRadius": 9
  },
  "shadows": [
    "rgba(221, 198, 202, 0.4) -3px 4px 14px 0px"
  ]
};

export default theme;
