import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Car } from '../types';
import { F1Button } from '../styles/theme';

interface CarModalProps {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
}

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled(motion.div)`
  background: linear-gradient(145deg, rgba(26, 26, 46, 0.95), rgba(22, 33, 62, 0.95));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  font-size: 20px;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
`;

const CarImageSection = styled.div`
  position: relative;
  height: 250px;
  background: ${props => `linear-gradient(135deg, ${props.color}20, ${props.color}10)`};
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.color || 'linear-gradient(90deg, #e10600, #ff6b00, #ffd700)'};
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .car-header {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    padding: 30px 30px 20px;
    
    h2 {
      color: #fff;
      font-size: 2rem;
      font-weight: 900;
      margin: 0 0 5px 0;
      font-family: 'Orbitron', monospace;
    }
    
    .team {
      color: ${props => props.color || '#e10600'};
      font-size: 1.1rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
`;

const ModalBody = styled.div`
  padding: 30px;
`;

const DriversSection = styled.div`
  margin-bottom: 30px;
  
  h3 {
    color: #fff;
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 15px;
    font-family: 'Orbitron', monospace;
  }
  
  .drivers-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    
    .driver-chip {
      background: ${props => props.color || '#e10600'}20;
      border: 1px solid ${props => props.color || '#e10600'}40;
      color: ${props => props.color || '#e10600'};
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 600;
    }
  }
`;

const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SpecSection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  
  h4 {
    color: ${props => props.color || '#e10600'};
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0 0 15px 0;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'Orbitron', monospace;
  }
  
  .spec-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    &:last-child {
      border-bottom: none;
    }
    
    .label {
      color: #ccc;
      font-size: 0.9rem;
      font-weight: 500;
    }
    
    .value {
      color: #fff;
      font-size: 0.9rem;
      font-weight: 600;
      text-align: right;
    }
  }
`;

const CarModal: React.FC<CarModalProps> = ({ car, isOpen, onClose }) => {
  if (!car) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContent
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            color={car.primaryColor}
          >
            <CloseButton onClick={onClose}>×</CloseButton>
            
            <CarImageSection color={car.primaryColor}>
              <img src={car.image} alt={car.fullName} />
              <div className="car-header">
                <h2>{car.fullName}</h2>
                <div className="team">{car.team} • {car.year}</div>
              </div>
            </CarImageSection>
            
            <ModalBody>
              <DriversSection color={car.primaryColor}>
                <h3>Drivers</h3>
                <div className="drivers-list">
                  {car.drivers.map(driver => (
                    <span key={driver} className="driver-chip">
                      {driver}
                    </span>
                  ))}
                </div>
              </DriversSection>
              
              <SpecsGrid>
                <SpecSection color={car.primaryColor}>
                  <h4>Engine</h4>
                  <div className="spec-item">
                    <span className="label">Manufacturer</span>
                    <span className="value">{car.engine.manufacturer}</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">Type</span>
                    <span className="value">{car.engine.type}</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">Displacement</span>
                    <span className="value">{car.engine.displacement}</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">Cylinders</span>
                    <span className="value">{car.engine.cylinders}</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">Power Output</span>
                    <span className="value">{car.engine.powerOutput}</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">Max RPM</span>
                    <span className="value">{car.engine.maxRPM}</span>
                  </div>
                </SpecSection>

                <SpecSection color={car.primaryColor}>
                  <h4>Chassis</h4>
                  <div className="spec-item">
                    <span className="label">Manufacturer</span>
                    <span className="value">{car.chassis.manufacturer}</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">Model</span>
                    <span className="value">{car.chassis.model}</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">Weight</span>
                    <span className="value">{car.chassis.weight}</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">Wheelbase</span>
                    <span className="value">{car.chassis.wheelbase}</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">Construction</span>
                    <span className="value">{car.chassis.construction}</span>
                  </div>
                </SpecSection>

                <SpecSection color={car.primaryColor}>
                  <h4>Aerodynamics</h4>
                  <div className="spec-item">
                    <span className="label">Front Wing</span>
                    <span className="value">{car.aerodynamics.frontWing}</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">Rear Wing</span>
                    <span className="value">{car.aerodynamics.rearWing}</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">DRS</span>
                    <span className="value">{car.electronics.drs ? 'Available' : 'Not Available'}</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">Downforce</span>
                    <span className="value">{car.aerodynamics.downforce}</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">Drag Coefficient</span>
                    <span className="value">{car.aerodynamics.dragCoefficient}</span>
                  </div>
                </SpecSection>

                <SpecSection color={car.primaryColor}>
                  <h4>Performance</h4>
                  <div className="spec-item">
                    <span className="label">Top Speed</span>
                    <span className="value">{car.performance.topSpeed}</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">0-100 km/h</span>
                    <span className="value">{car.performance.acceleration}</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">Fuel Capacity</span>
                    <span className="value">{car.fuel.capacity}</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">Fuel Type</span>
                    <span className="value">{car.fuel.type}</span>
                  </div>
                </SpecSection>

                <SpecSection color={car.primaryColor}>
                  <h4>Transmission</h4>
                  <div className="spec-item">
                    <span className="label">Type</span>
                    <span className="value">{car.transmission.type}</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">Gears</span>
                    <span className="value">{car.transmission.gears}</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">Manufacturer</span>
                    <span className="value">{car.transmission.manufacturer}</span>
                  </div>
                </SpecSection>

                <SpecSection color={car.primaryColor}>
                  <h4>Dimensions</h4>
                  <div className="spec-item">
                    <span className="label">Length</span>
                    <span className="value">{car.dimensions.length}</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">Width</span>
                    <span className="value">{car.dimensions.width}</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">Height</span>
                    <span className="value">{car.dimensions.height}</span>
                  </div>
                </SpecSection>

                <SpecSection color={car.primaryColor}>
                  <h4>Electronics</h4>
                  <div className="spec-item">
                    <span className="label">ECU</span>
                    <span className="value">{car.electronics.ecu}</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">ERS MGU-K</span>
                    <span className="value">{car.electronics.ers.mguK}</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">Telemetry</span>
                    <span className="value">{car.electronics.telemetry}</span>
                  </div>
                </SpecSection>
              </SpecsGrid>
              
              <div style={{ marginTop: '30px', textAlign: 'center' }}>
                <F1Button onClick={onClose}>
                  Close Specifications
                </F1Button>
              </div>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default CarModal;