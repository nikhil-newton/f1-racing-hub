import React from 'react';
import styled from 'styled-components';

const CircuitSVG = styled.div<{ width?: string; height?: string; onClick?: () => void }>`
  width: ${props => props.width || '300px'};
  height: ${props => props.height || '200px'};
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #FF8700;
  box-shadow: 0 8px 32px rgba(255, 135, 0, 0.2);
  position: relative;
  overflow: hidden;
  cursor: ${props => props.onClick ? 'pointer' : 'default'};
  transition: all 0.3s ease;
  
  &:hover {
    transform: ${props => props.onClick ? 'scale(1.02)' : 'none'};
    box-shadow: ${props => props.onClick ? '0 12px 40px rgba(255, 135, 0, 0.3)' : '0 8px 32px rgba(255, 135, 0, 0.2)'};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 30%, rgba(255, 135, 0, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
  
  svg {
    max-width: 100%;
    max-height: 100%;
    z-index: 1;
    position: relative;
  }
  
  .circuit-track {
    stroke: #FF8700;
    stroke-width: 3;
    fill: none;
    filter: drop-shadow(0 0 8px rgba(255, 135, 0, 0.6));
  }
  
  .start-finish {
    stroke: #FFFFFF;
    stroke-width: 4;
    stroke-dasharray: 5,5;
  }
  
  .drs-zone {
    stroke: #00D2BE;
    stroke-width: 2;
    stroke-dasharray: 3,3;
  }
  
  .corner-number {
    fill: #FF8700;
    font-family: 'Orbitron', monospace;
    font-size: 10px;
    font-weight: 700;
    text-shadow: 0 0 4px rgba(255, 135, 0, 0.8);
  }
`;

const ClickableWrapper = styled.div<{ hasClick: boolean }>`
  display: inline-block;
  cursor: ${props => props.hasClick ? 'pointer' : 'default'};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: ${props => props.hasClick ? 'scale(1.02)' : 'none'};
  }
  
  & > div {
    ${props => props.hasClick && `
      &:hover {
        box-shadow: 0 12px 40px rgba(255, 135, 0, 0.3) !important;
      }
    `}
  }
`;

// Bahrain International Circuit
export const BahrainCircuit: React.FC<{ width?: string; height?: string }> = ({ width, height }) => (
  <CircuitSVG width={width} height={height}>
    <img 
      src="/circuits/bahrain-circuit.jpg" 
      alt="Bahrain Grand Prix Circuit"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px',
        position: 'relative',
        zIndex: 1
      }}
    />
  </CircuitSVG>
);

// Saudi Arabian Grand Prix - Jeddah Corniche Circuit
export const SaudiArabiaCircuit: React.FC<{ width?: string; height?: string }> = ({ width, height }) => (
  <CircuitSVG width={width} height={height}>
    <img 
      src="/circuits/saudi-arabia-circuit.jpg" 
      alt="Saudi Arabian Grand Prix Circuit"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px',
        position: 'relative',
        zIndex: 1
      }}
    />
  </CircuitSVG>
);

// Australian Grand Prix - Albert Park Circuit
export const AustraliaCircuit: React.FC<{ width?: string; height?: string }> = ({ width, height }) => (
  <CircuitSVG width={width} height={height}>
    <img 
      src="/circuits/australia-circuit.jpg" 
      alt="Australian Grand Prix Circuit"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px',
        position: 'relative',
        zIndex: 1
      }}
    />
  </CircuitSVG>
);

// Japanese Grand Prix - Suzuka Circuit
export const JapanCircuit: React.FC<{ width?: string; height?: string }> = ({ width, height }) => (
  <CircuitSVG width={width} height={height}>
    <img 
      src="/circuits/japanese-circuit.jpg" 
      alt="Japanese Grand Prix Circuit"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px',
        position: 'relative',
        zIndex: 1
      }}
    />
  </CircuitSVG>
);

// Monaco Grand Prix - Circuit de Monaco
export const MonacoCircuit: React.FC<{ width?: string; height?: string }> = ({ width, height }) => (
  <CircuitSVG width={width} height={height}>
    <img 
      src="/circuits/monaco-circuit.jpg" 
      alt="Monaco Grand Prix Circuit"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px',
        position: 'relative',
        zIndex: 1
      }}
    />
  </CircuitSVG>
);

// Emilia Romagna Grand Prix - Autodromo Enzo e Dino Ferrari (Imola)
export const EmiliaRomagnaCircuit: React.FC<{ width?: string; height?: string }> = ({ width, height }) => (
  <CircuitSVG width={width} height={height}>
    <img
      src="/circuits/imola-circuit.jpg"
      alt="Autodromo Enzo e Dino Ferrari (Imola) Circuit Layout"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '8px',
        filter: 'brightness(1.1) contrast(1.2)',
      }}
    />
  </CircuitSVG>
);

// Mexico City Grand Prix - Autódromo Hermanos Rodríguez
export const MexicoCityCircuit: React.FC<{ width?: string; height?: string }> = ({ width, height }) => (
  <CircuitSVG width={width} height={height}>
    <img 
      src="/circuits/mexico-circuit.jpg" 
      alt="Mexico City Grand Prix Circuit"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px',
        position: 'relative',
        zIndex: 1
      }}
    />
  </CircuitSVG>
);

// São Paulo Grand Prix - Autódromo José Carlos Pace (Interlagos)
export const BrazilCircuit: React.FC<{ width?: string; height?: string }> = ({ width, height }) => (
  <CircuitSVG width={width} height={height}>
    <img 
      src="/circuits/sao-paulo-circuit.jpg" 
      alt="São Paulo Grand Prix Circuit"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px',
        position: 'relative',
        zIndex: 1
      }}
    />
  </CircuitSVG>
);

// Italian Grand Prix - Autodromo Nazionale Monza
export const ItalyCircuit: React.FC<{ width?: string; height?: string }> = ({ width, height }) => (
  <CircuitSVG width={width} height={height}>
    <img 
      src="/circuits/italian-circuit.jpg" 
      alt="Italian Grand Prix Circuit"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px',
        position: 'relative',
        zIndex: 1
      }}
    />
  </CircuitSVG>
);

// Azerbaijan Grand Prix - Baku City Circuit
export const AzerbaijanCircuit: React.FC<{ width?: string; height?: string }> = ({ width, height }) => (
  <CircuitSVG width={width} height={height}>
    <img 
      src="/circuits/azerbaijan-circuit.jpg" 
      alt="Azerbaijan Grand Prix Circuit"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px',
        position: 'relative',
        zIndex: 1
      }}
    />
  </CircuitSVG>
);

// Spanish Grand Prix - Circuit de Barcelona-Catalunya
export const SpainCircuit: React.FC<{ width?: string; height?: string }> = ({ width, height }) => (
  <CircuitSVG width={width} height={height}>
    <img 
      src="/circuits/spanish-circuit.jpg" 
      alt="Spanish Grand Prix Circuit"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px',
        position: 'relative',
        zIndex: 1
      }}
    />
  </CircuitSVG>
);

// Belgian Grand Prix - Circuit de Spa-Francorchamps
export const BelgiumCircuit: React.FC<{ width?: string; height?: string }> = ({ width, height }) => (
  <CircuitSVG width={width} height={height}>
    <img 
      src="/circuits/belgian-circuit.jpg" 
      alt="Belgian Grand Prix Circuit"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px',
        position: 'relative',
        zIndex: 1
      }}
    />
  </CircuitSVG>
);

// Canadian Grand Prix - Circuit Gilles Villeneuve
export const CanadaCircuit: React.FC<{ width?: string; height?: string }> = ({ width, height }) => (
  <CircuitSVG width={width} height={height}>
    <img 
      src="/circuits/canadian-circuit.jpg" 
      alt="Canadian Grand Prix Circuit"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px',
        position: 'relative',
        zIndex: 1
      }}
    />
  </CircuitSVG>
);

// United States Grand Prix - Circuit of the Americas
export const USACircuit: React.FC<{ width?: string; height?: string }> = ({ width, height }) => (
  <CircuitSVG width={width} height={height}>
    <img 
      src="/circuits/usa-circuit.jpg" 
      alt="United States Grand Prix Circuit"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px',
        position: 'relative',
        zIndex: 1
      }}
    />
  </CircuitSVG>
);

// Dutch Grand Prix - Circuit Zandvoort
export const NetherlandsCircuit: React.FC<{ width?: string; height?: string }> = ({ width, height }) => (
  <CircuitSVG width={width} height={height}>
    <img 
      src="/circuits/dutch-circuit.jpg" 
      alt="Dutch Grand Prix Circuit"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px',
        position: 'relative',
        zIndex: 1
      }}
    />
  </CircuitSVG>
);

// Hungarian Grand Prix - Hungaroring
export const HungaryCircuit: React.FC<{ width?: string; height?: string }> = ({ width, height }) => (
  <CircuitSVG width={width} height={height}>
    <img 
      src="/circuits/hungarian-circuit.jpg" 
      alt="Hungarian Grand Prix Circuit"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px',
        position: 'relative',
        zIndex: 1
      }}
    />
  </CircuitSVG>
);

// Las Vegas Grand Prix - Las Vegas Strip Circuit
export const LasVegasCircuit: React.FC<{ width?: string; height?: string }> = ({ width, height }) => (
  <CircuitSVG width={width} height={height}>
    <img 
      src="/circuits/las-vegas-circuit.jpg" 
      alt="Las Vegas Grand Prix Circuit"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px',
        position: 'relative',
        zIndex: 1
      }}
    />
  </CircuitSVG>
);

// Qatar Grand Prix - Lusail International Circuit
export const QatarCircuit: React.FC<{ width?: string; height?: string }> = ({ width, height }) => (
  <CircuitSVG width={width} height={height}>
    <img 
      src="/circuits/qatar-circuit.jpg" 
      alt="Qatar Grand Prix Circuit"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px',
        position: 'relative',
        zIndex: 1
      }}
    />
  </CircuitSVG>
);

// Singapore Grand Prix - Marina Bay Street Circuit
export const SingaporeCircuit: React.FC<{ width?: string; height?: string }> = ({ width, height }) => (
  <CircuitSVG width={width} height={height}>
    <img 
      src="/circuits/singapore-circuit.jpg" 
      alt="Singapore Grand Prix Circuit"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px',
        position: 'relative',
        zIndex: 1
      }}
    />
  </CircuitSVG>
);

// Miami Grand Prix - Miami International Autodrome
export const MiamiCircuit: React.FC<{ width?: string; height?: string }> = ({ width, height }) => (
  <CircuitSVG width={width} height={height}>
    <img 
      src="/circuits/miami-circuit.jpg" 
      alt="Miami Grand Prix Circuit"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px',
        position: 'relative',
        zIndex: 1
      }}
    />
  </CircuitSVG>
);

// Austrian Grand Prix - Red Bull Ring
export const AustriaCircuit: React.FC<{ width?: string; height?: string }> = ({ width, height }) => (
  <CircuitSVG width={width} height={height}>
    <img 
      src="/circuits/austrian-circuit.jpg" 
      alt="Austrian Grand Prix Circuit"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px',
        position: 'relative',
        zIndex: 1
      }}
    />
  </CircuitSVG>
);

// Chinese Grand Prix - Shanghai International Circuit
export const ChinaCircuit: React.FC<{ width?: string; height?: string }> = ({ width, height }) => (
  <CircuitSVG width={width} height={height}>
    <img 
      src="/circuits/chinese-circuit.jpg" 
      alt="Chinese Grand Prix Circuit"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px',
        position: 'relative',
        zIndex: 1
      }}
    />
  </CircuitSVG>
);

// British Grand Prix - Silverstone Circuit
export const BritainCircuit: React.FC<{ width?: string; height?: string }> = ({ width, height }) => (
  <CircuitSVG width={width} height={height}>
    <img 
      src="/circuits/british-circuit.jpg" 
      alt="British Grand Prix Circuit"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px',
        position: 'relative',
        zIndex: 1
      }}
    />
  </CircuitSVG>
);

// Abu Dhabi Grand Prix - Yas Marina Circuit
export const AbuDhabiCircuit: React.FC<{ width?: string; height?: string }> = ({ width, height }) => (
  <CircuitSVG width={width} height={height}>
    <img 
      src="/circuits/abu-dhabi-circuit.jpg" 
      alt="Abu Dhabi Grand Prix Circuit"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px',
        position: 'relative',
        zIndex: 1
      }}
    />
  </CircuitSVG>
);

// Circuit Component Selector
interface CircuitOutlineProps {
  circuitId: string;
  width?: string;
  height?: string;
  onClick?: () => void;
}

export const CircuitOutline: React.FC<CircuitOutlineProps> = ({ circuitId, width, height, onClick }) => {
  const circuitComponents: { [key: string]: React.FC<{ width?: string; height?: string }> } = {
    'bahrain': BahrainCircuit,
    'saudi-arabia': SaudiArabiaCircuit,
    'australia': AustraliaCircuit,
    'japan': JapanCircuit,
    'monaco': MonacoCircuit,
    'emilia-romagna': EmiliaRomagnaCircuit,
    'mexico': MexicoCityCircuit,
    'brazil': BrazilCircuit,
    'italy': ItalyCircuit,
    'azerbaijan': AzerbaijanCircuit,
    'spain': SpainCircuit,
    'belgium': BelgiumCircuit,
    'canada': CanadaCircuit,
    'usa': USACircuit,
    'netherlands': NetherlandsCircuit,
    'hungary': HungaryCircuit,
    'las-vegas': LasVegasCircuit,
    'qatar': QatarCircuit,
    'singapore': SingaporeCircuit,
    'miami': MiamiCircuit,
    'austria': AustriaCircuit,
    'china': ChinaCircuit,
    'britain': BritainCircuit,
    'abu-dhabi': AbuDhabiCircuit,
  };

  const CircuitComponent = circuitComponents[circuitId];
  
  if (!CircuitComponent) {
    // Generic circuit for circuits without specific SVG
    return (
      <CircuitSVG width={width} height={height}>
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <path
            className="circuit-track"
            d="M50,150 Q100,50 200,100 Q300,150 350,100 Q400,150 350,200 Q300,250 200,200 Q100,150 50,200 Q0,150 50,150"
          />
          <line className="start-finish" x1="45" y1="140" x2="45" y2="160" />
          <text className="corner-number" x="180" y="155" fontSize="12">F1</text>
        </svg>
      </CircuitSVG>
    );
  }

  return (
    <ClickableWrapper onClick={onClick} hasClick={!!onClick}>
      <CircuitComponent width={width} height={height} />
    </ClickableWrapper>
  );
};