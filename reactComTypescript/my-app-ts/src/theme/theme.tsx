import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Configuração inicial do tema (modo claro/escuro)
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// Paleta de cores personalizada (Azul => Roxo => Vermelho)
const colors = {
  brand: {
    50: "#e3f2f9",    // Azul muito claro
    100: "#b3e5fc",   // Azul claro
    200: "#81d4fa",   // Azul
    300: "#4fc3f7",   // Azul mais vibrante
    400: "#29b6f6",   // Azul mais forte
    500: "#3c88c6",   // Azul principal
    600: "#7c3aed",   // Roxo
    700: "#a855f7",   // Roxo mais vibrante
    800: "#e4105d",   // Vermelho
    900: "#991b1b",   // Vermelho muito escuro
    950: "#22212118"
  },
};

// Tipografia
const fonts = {
  heading: "'Poppins', sans-serif",
  body: "'Inter', sans-serif",
};

// Breakpoints responsivos
const breakpoints = {
  sm: "30em",  // ~480px
  md: "48em",  // ~768px
  lg: "62em",  // ~992px
  xl: "80em",  // ~1280px
  "2xl": "96em", // ~1536px
};

// Estilos globais
const styles = {
  global: {
    body: {
      bg: "#15161b",
      color: "gray.800",
    },
  },
};

// Exporta o tema estendido
const theme = extendTheme({ config, colors, fonts, breakpoints, styles });

export default theme;