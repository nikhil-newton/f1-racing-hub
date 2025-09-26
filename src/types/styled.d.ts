import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      black: string;
      gray: string;
      lightGray: string;
      white: string;
      gold: string;
      silver: string;
      neon: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
    gradients: {
      primary: string;
      dark: string;
      metallic: string;
    };
    shadows: {
      neon: string;
      red: string;
      card: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      large: string;
    };
  }
}