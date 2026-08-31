// React Theme — extracted from https://legora.com/
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
 *   };
 *   fontSizes: {
    '12': string;
    '13': string;
    '86.6611': string;
    '54.1632': string;
    '39.7197': string;
    '32.4979': string;
    '21.6653': string;
    '14.4435': string;
    '12.7103': string;
 *   };
 *   space: {
    '4': string;
    '20': string;
    '30': string;
    '45': string;
    '60': string;
    '80': string;
    '90': string;
    '200': string;
    '346': string;
 *   };
 *   radii: {
    xs: string;
    sm: string;
    lg: string;
    xl: string;
    full: string;
 *   };
 *   shadows: {

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
    "primary": "#005032",
    "secondary": "#0000ee",
    "accent": "#003d26",
    "background": "#fafaf9",
    "foreground": "#000000",
    "neutral50": "#000000",
    "neutral100": "#ffffff",
    "neutral200": "#68655e",
    "neutral300": "#e6e6e6",
    "neutral400": "#343434",
    "neutral500": "#8f8d8a"
  },
  "fonts": {
    "body": "'Aktiv Grotesk VF Variable Regular', sans-serif"
  },
  "fontSizes": {
    "12": "12px",
    "13": "13px",
    "86.6611": "86.6611px",
    "54.1632": "54.1632px",
    "39.7197": "39.7197px",
    "32.4979": "32.4979px",
    "21.6653": "21.6653px",
    "14.4435": "14.4435px",
    "12.7103": "12.7103px"
  },
  "space": {
    "4": "4px",
    "20": "20px",
    "30": "30px",
    "45": "45px",
    "60": "60px",
    "80": "80px",
    "90": "90px",
    "200": "200px",
    "346": "346px"
  },
  "radii": {
    "xs": "2px",
    "sm": "5px",
    "lg": "15px",
    "xl": "24px",
    "full": "999px"
  },
  "shadows": {},
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
      "main": "#005032",
      "light": "hsl(158, 100%, 31%)",
      "dark": "hsl(158, 100%, 10%)"
    },
    "secondary": {
      "main": "#0000ee",
      "light": "hsl(240, 100%, 62%)",
      "dark": "hsl(240, 100%, 32%)"
    },
    "background": {
      "default": "#fafaf9",
      "paper": "#005032"
    },
    "text": {
      "primary": "#000000",
      "secondary": "#0000ee"
    }
  },
  "typography": {
    "fontFamily": "'Times New Roman', sans-serif",
    "h1": {
      "fontSize": "32.4979px",
      "fontWeight": "400",
      "lineHeight": "38.9975px"
    },
    "h3": {
      "fontSize": "21.6653px",
      "fontWeight": "400",
      "lineHeight": "25.9983px"
    },
    "body2": {
      "fontSize": "14.4435px",
      "fontWeight": "400",
      "lineHeight": "normal"
    }
  },
  "shape": {
    "borderRadius": 2
  },
  "shadows": []
};

export default theme;
