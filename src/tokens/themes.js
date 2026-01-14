// colors
export const colors = {
  darkBg1: "#151326",
  darkBg2: "#241f3f",
  lightBg1: "#f3f7fc",
  lightBg2: "#e8f0fb",
  
  primary: "#6f58e2",
  secondary: "#a48bff",
  accent: "#7c6be6",
  mutedDark: "#5c5774",
  mutedLight: "#c9c6dd",
};

export const red = {
  primary: "#8B1E1E",
  hover: "#A83232",
  soft: "#FAFAFA",
  textDark: "#822727",
};


// text colors
export const textColors = {
  dark: "#1f1b2b",
  light: "#eae8f7",
  mutedDark: "#5c5774",
  mutedLight: "#c9c6dd",
};

// spacing
export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "40px",
};

// border radius
export const borderRadius = {
  sm: "6px",
  md: "12px",
  lg: "18px",
  pill: "9999px",
};

// effects
export const effects = {
  cardShadow: "0 6px 16px rgba(0, 0, 0, 0.25)",
  softShadow: "0 3px 6px rgba(0, 0, 0, 0.15)",
  overlayShadow: "0 4px 12px rgba(0,0,0,0.3)",
  transitionBase: "all 0.3s ease",
};

// typography
export const typography = {
  fontFamily: "'Cormorant Garamond', serif",
  fontLogo: "'Cinzel Decorative', serif",
  fontJudul: "'Space Grotesk', sans-serif",
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  fontWeight: {
    thin: 300,
    regular: 400,
    medium: 600,
    bold: 700,
  },
  lineHeight: {
    normal: 1.5,
    relaxed: 1.75,
  },
};

// gradients
export const gradients = {
  dark: `linear-gradient(135deg, ${colors.darkBg1}, ${colors.darkBg2})`,
  light: `linear-gradient(180deg, ${colors.lightBg1}, ${colors.lightBg2})`,
  primary: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
};

// icon sizes
export const iconSize = {
  sm: "14px",
  md: "18px",
  lg: "24px",
};

// buttons
export const buttons = {
  primary: {
    background: colors.primary,
    hover: colors.accent,
    active: colors.primary,
    color: textColors.light,
  },
  secondary: {
    background: colors.secondary,
    hover: colors.accent,
    active: colors.secondary,
    color: textColors.light,
  },
  light: {
    background: "#d5e1f7",
    hover: "#cbd5e9",
    color: textColors.dark,
  },
  dark: {
    background: "#3a3361",
    hover: "#4a3f7d",
    color: textColors.light,
    fontWeight: 400,
  },
  gradient: {
    background: "linear-gradient(135deg, #a48bff, #6f58e2)",
    hoverOpacity: 0.9,
    hoverScale: 1.02,
    activeScale: 0.98,
    color: "#ffffff",
  },
  redPrimary: {
    background: red.primary,
    hover: red.hover,
    active: "#B74141",
    color: "#FFFFFF",
  },
  redSoft: {
    background: red.soft,
    hover: "#FFEDE8",
    color: red.primary,
  },

};

export const darkTheme = {
  mode: "dark",
  colors: {
    background: "#151326",
    text: "#e5e7eb",
    bgSoft: "rgba(255,255,255,0.04)",
    border: "rgba(255,255,255,0.08)",
    codeButtonBorder: "rgba(255,255,255,0.15)",
  },
};

export const lightTheme = {
  mode: "light",
  colors: {
    background: "#e8f0fb",
    text: "#0f172a",
    bgSoft: "rgba(0,0,0,0.04)",
    border: "rgba(0,0,0,0.09)",
    codeButtonBorder: "rgba(0,0,0,0.12)",
  },
};
