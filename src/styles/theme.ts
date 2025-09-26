import styled from 'styled-components';

export const theme = {
  colors: {
    primary: '#e10600',
    secondary: '#ff4500',
    black: '#15151e',
    gray: '#38383f',
    lightGray: '#d0d0d2',
    white: '#ffffff',
    gold: '#ffd700',
    silver: '#c0c0c0',
    neon: '#00ff41'
  },
  fonts: {
    primary: "'Orbitron', monospace",
    secondary: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif"
  },
  gradients: {
    primary: 'linear-gradient(135deg, #e10600 0%, #ff4500 100%)',
    dark: 'linear-gradient(135deg, #15151e 0%, #38383f 100%)',
    metallic: 'linear-gradient(135deg, #c0c0c0 0%, #ffd700 100%)'
  },
  shadows: {
    neon: '0 0 20px rgba(0, 255, 65, 0.3)',
    red: '0 0 20px rgba(225, 6, 0, 0.3)',
    card: '0 8px 32px rgba(0, 0, 0, 0.3)'
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    large: '1440px'
  }
};

export const GlobalContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme?.colors?.black || '#15151e'};
  color: ${props => props.theme?.colors?.white || '#ffffff'};
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: ${props => props.theme?.breakpoints?.tablet || '768px'}) {
    padding: 0 15px;
  }
`;

export const FlexContainer = styled.div<{
  direction?: 'row' | 'column';
  justify?: 'center' | 'space-between' | 'flex-start' | 'flex-end' | 'space-around' | 'space-evenly';
  align?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
  gap?: string;
  wrap?: boolean;
}>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  gap: ${props => props.gap || '0'};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
`;

export const GridContainer = styled.div<{
  columns?: string;
  gap?: string;
}>`
  display: grid;
  grid-template-columns: ${props => props.columns || 'repeat(auto-fit, minmax(300px, 1fr))'};
  gap: ${props => props.gap || '20px'};
`;

export const F1Button = styled.button<{
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
}>`
  font-family: ${props => props.theme?.fonts?.primary || "'Orbitron', monospace"};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${props => {
    const size = props.size || 'medium';
    switch(size) {
      case 'small':
        return 'padding: 8px 16px; font-size: 12px;';
      case 'large':
        return 'padding: 16px 32px; font-size: 18px;';
      default:
        return 'padding: 12px 24px; font-size: 14px;';
    }
  }}
  
  ${props => {
    const variant = props.variant || 'primary';
    const primary = props.theme?.colors?.primary || '#e10600';
    const white = props.theme?.colors?.white || '#ffffff';
    const black = props.theme?.colors?.black || '#15151e';
    
    switch(variant) {
      case 'secondary':
        return `
          background: ${black};
          color: ${white};
          border-color: ${white};
          &:hover {
            background: ${white};
            color: ${black};
          }
        `;
      case 'outline':
        return `
          background: transparent;
          color: ${primary};
          border-color: ${primary};
          &:hover {
            background: ${primary};
            color: ${white};
          }
        `;
      default:
        return `
          background: ${primary};
          color: ${white};
          &:hover {
            background: ${props.theme?.colors?.secondary || '#ff4500'};
            box-shadow: ${props.theme?.shadows?.red || '0 0 20px rgba(225, 6, 0, 0.3)'};
          }
        `;
    }
  }}
`;

export const F1Card = styled.div<{
  hover?: boolean;
}>`
  background: ${props => props.theme?.gradients?.dark || 'linear-gradient(135deg, #15151e 0%, #38383f 100%)'};
  border: 1px solid ${props => props.theme?.colors?.gray || '#38383f'};
  border-radius: 8px;
  padding: 24px;
  box-shadow: ${props => props.theme?.shadows?.card || '0 8px 32px rgba(0, 0, 0, 0.3)'};
  transition: all 0.3s ease;
  
  ${props => props.hover && `
    &:hover {
      transform: translateY(-8px);
      border-color: ${props.theme?.colors?.primary || '#e10600'};
      box-shadow: ${props.theme?.shadows?.red || '0 0 20px rgba(225, 6, 0, 0.3)'};
    }
  `}
`;

export const GradientText = styled.span`
  color: ${props => props.theme?.colors?.primary || '#e10600'};
  font-weight: 700;
  text-shadow: 0 0 10px rgba(225, 6, 0, 0.5);
  
  /* Add gradient effect for modern browsers */
  background: ${props => props.theme?.gradients?.primary || 'linear-gradient(135deg, #e10600 0%, #ff4500 100%)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  /* Fallback for unsupported browsers */
  @supports not (-webkit-background-clip: text) {
    color: ${props => props.theme?.colors?.primary || '#e10600'};
    background: none;
  }
  
  /* Ensure text is always visible */
  display: inline-block;
  position: relative;
`;