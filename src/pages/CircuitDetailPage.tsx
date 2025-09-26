import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, GradientText } from '../styles/theme';
import { getCircuitById } from '../data/circuits';
import { CircuitOutline } from '../components/CircuitOutline';

const CircuitDetailContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.gradients.dark};
  padding-top: 80px;
`;

const BackButton = styled.button`
  background: ${props => props.theme.colors.gray};
  border: none;
  color: ${props => props.theme.colors.white};
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background: ${props => props.theme.colors.primary};
    transform: translateX(-5px);
  }
`;

const HeroSection = styled.div`
  margin-bottom: 50px;
  
  .circuit-header {
    text-align: center;
    margin-bottom: 40px;
    
    h1 {
      font-family: ${props => props.theme.fonts.primary};
      font-size: 3rem;
      font-weight: 900;
      margin-bottom: 15px;
      
      @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        font-size: 2rem;
      }
    }
    
    .grand-prix {
      font-size: 1.5rem;
      color: ${props => props.theme.colors.primary};
      font-weight: 600;
      margin-bottom: 10px;
    }
    
    .location {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      color: ${props => props.theme.colors.lightGray};
      font-size: 1.1rem;
      
      .flag {
        font-size: 1.5rem;
      }
    }
    
    .description {
      max-width: 800px;
      margin: 20px auto 0;
      color: ${props => props.theme.colors.lightGray};
      line-height: 1.6;
      font-size: 1.1rem;
    }
  }
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 50px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const CircuitVisual = styled.div`
  .circuit-outline {
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
  }
  
  .circuit-features {
    background: ${props => props.theme.gradients.dark};
    border: 1px solid ${props => props.theme.colors.gray};
    border-radius: 15px;
    padding: 25px;
    
    h3 {
      font-family: ${props => props.theme.fonts.primary};
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 20px;
      color: ${props => props.theme.colors.white};
    }
    
    .features-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      
      .feature-tag {
        background: ${props => props.theme.colors.primary};
        color: white;
        padding: 6px 12px;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 600;
      }
    }
  }
`;

const CircuitDetails = styled.div`
  .detail-section {
    background: ${props => props.theme.gradients.dark};
    border: 1px solid ${props => props.theme.colors.gray};
    border-radius: 15px;
    padding: 25px;
    margin-bottom: 25px;
    
    h3 {
      font-family: ${props => props.theme.fonts.primary};
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 20px;
      color: ${props => props.theme.colors.white};
    }
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    
    .stat-item {
      .label {
        font-size: 0.9rem;
        color: ${props => props.theme.colors.lightGray};
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 8px;
      }
      
      .value {
        font-family: ${props => props.theme.fonts.primary};
        font-size: 1.2rem;
        font-weight: 700;
        color: ${props => props.theme.colors.white};
      }
    }
  }
  
  .lap-record-section {
    background: rgba(225, 6, 0, 0.1);
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 15px;
    padding: 25px;
    text-align: center;
    
    .record-title {
      font-size: 1rem;
      color: ${props => props.theme.colors.primary};
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 15px;
      font-weight: 600;
    }
    
    .record-time {
      font-family: ${props => props.theme.fonts.primary};
      font-size: 2.5rem;
      font-weight: 900;
      color: ${props => props.theme.colors.white};
      margin-bottom: 15px;
      text-shadow: 0 0 20px rgba(225, 6, 0, 0.5);
    }
    
    .record-details {
      .driver-name {
        font-size: 1.2rem;
        font-weight: 700;
        color: ${props => props.theme.colors.white};
        margin-bottom: 5px;
      }
      
      .team-year {
        color: ${props => props.theme.colors.lightGray};
        font-size: 1rem;
        
        .team-name {
          color: ${props => props.theme.colors.primary};
          font-weight: 600;
        }
      }
    }
  }
`;

const ElevationSection = styled.div`
  margin-bottom: 50px;
  
  .elevation-card {
    background: ${props => props.theme.gradients.dark};
    border: 1px solid ${props => props.theme.colors.gray};
    border-radius: 15px;
    padding: 25px;
    
    h3 {
      font-family: ${props => props.theme.fonts.primary};
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 20px;
      color: ${props => props.theme.colors.white};
    }
    
    .elevation-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 20px;
      
      .elevation-item {
        text-align: center;
        
        .elevation-value {
          font-family: ${props => props.theme.fonts.primary};
          font-size: 1.5rem;
          font-weight: 900;
          color: ${props => props.theme.colors.primary};
          margin-bottom: 5px;
        }
        
        .elevation-label {
          font-size: 0.9rem;
          color: ${props => props.theme.colors.lightGray};
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
      }
    }
  }
`;

const CharacteristicsSection = styled.div`
  .characteristics-card {
    background: ${props => props.theme.gradients.dark};
    border: 1px solid ${props => props.theme.colors.gray};
    border-radius: 15px;
    padding: 25px;
    
    h3 {
      font-family: ${props => props.theme.fonts.primary};
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 20px;
      color: ${props => props.theme.colors.white};
    }
    
    .characteristics-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      
      @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
      }
      
      .characteristic-list {
        h4 {
          font-size: 1rem;
          color: ${props => props.theme.colors.primary};
          margin-bottom: 15px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        ul {
          list-style: none;
          padding: 0;
          
          li {
            color: ${props => props.theme.colors.lightGray};
            margin-bottom: 8px;
            padding-left: 20px;
            position: relative;
            
            &:before {
              content: '▶';
              color: ${props => props.theme.colors.primary};
              position: absolute;
              left: 0;
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }
`;

const CircuitDetailPage: React.FC = () => {
  const { circuitId } = useParams<{ circuitId: string }>();
  const navigate = useNavigate();
  
  const circuit = circuitId ? getCircuitById(circuitId) : null;

  if (!circuit) {
    return (
      <CircuitDetailContainer>
        <Container>
          <div style={{ textAlign: 'center', padding: '100px 0', color: '#fff' }}>
            <h2>Circuit not found</h2>
            <button onClick={() => navigate('/circuits')}>
              Back to Circuits
            </button>
          </div>
        </Container>
      </CircuitDetailContainer>
    );
  }

  return (
    <CircuitDetailContainer>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <BackButton onClick={() => navigate('/circuits')}>
            ← Back to Circuits
          </BackButton>

          <HeroSection>
            <div className="circuit-header">
              <h1>
                <GradientText>{circuit.name}</GradientText>
              </h1>
              <div className="grand-prix">{circuit.grandPrix}</div>
              <div className="location">
                <span className="flag">{circuit.flag}</span>
                <span>{circuit.venue}, {circuit.country}</span>
              </div>
              <div className="description">{circuit.description}</div>
            </div>
          </HeroSection>

          <MainContent>
            <CircuitVisual>
              <div className="circuit-outline">
                <CircuitOutline circuitId={circuit.id} width="400px" height="300px" />
              </div>
              
              <div className="circuit-features">
                <h3>Notable Features</h3>
                <div className="features-list">
                  {circuit.notableFeatures.map((feature, index) => (
                    <span key={index} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </CircuitVisual>

            <CircuitDetails>
              <div className="detail-section">
                <h3>Track Information</h3>
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="label">Track Length</div>
                    <div className="value">{circuit.trackLength} km</div>
                  </div>
                  <div className="stat-item">
                    <div className="label">Number of Laps</div>
                    <div className="value">{circuit.numberOfLaps}</div>
                  </div>
                  <div className="stat-item">
                    <div className="label">Race Distance</div>
                    <div className="value">{circuit.raceDistance} km</div>
                  </div>
                  <div className="stat-item">
                    <div className="label">Corners</div>
                    <div className="value">{circuit.corners}</div>
                  </div>
                  <div className="stat-item">
                    <div className="label">DRS Zones</div>
                    <div className="value">{circuit.drsZones}</div>
                  </div>
                  <div className="stat-item">
                    <div className="label">Direction</div>
                    <div className="value">{circuit.direction}</div>
                  </div>
                  <div className="stat-item">
                    <div className="label">First Grand Prix</div>
                    <div className="value">{circuit.firstGrandPrix}</div>
                  </div>
                  <div className="stat-item">
                    <div className="label">Average Speed</div>
                    <div className="value">{circuit.averageSpeed} km/h</div>
                  </div>
                </div>
              </div>

              <div className="lap-record-section">
                <div className="record-title">Lap Record</div>
                <div className="record-time">{circuit.lapRecord.time}</div>
                <div className="record-details">
                  <div className="driver-name">{circuit.lapRecord.driver}</div>
                  <div className="team-year">
                    <span className="team-name">{circuit.lapRecord.team}</span>
                    {' '}({circuit.lapRecord.year})
                  </div>
                </div>
              </div>
            </CircuitDetails>
          </MainContent>

          <ElevationSection>
            <div className="elevation-card">
              <h3>Elevation Profile</h3>
              <div className="elevation-stats">
                <div className="elevation-item">
                  <div className="elevation-value">{circuit.elevation.highest}m</div>
                  <div className="elevation-label">Highest Point</div>
                </div>
                <div className="elevation-item">
                  <div className="elevation-value">{circuit.elevation.lowest}m</div>
                  <div className="elevation-label">Lowest Point</div>
                </div>
                <div className="elevation-item">
                  <div className="elevation-value">{circuit.elevation.variation}m</div>
                  <div className="elevation-label">Elevation Change</div>
                </div>
              </div>
            </div>
          </ElevationSection>

          <CharacteristicsSection>
            <div className="characteristics-card">
              <h3>Circuit Characteristics</h3>
              <div className="characteristics-grid">
                <div className="characteristic-list">
                  <h4>Track Characteristics</h4>
                  <ul>
                    {circuit.characteristics.map((characteristic, index) => (
                      <li key={index}>{characteristic}</li>
                    ))}
                  </ul>
                </div>
                <div className="characteristic-list">
                  <h4>Notable Features</h4>
                  <ul>
                    {circuit.notableFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </CharacteristicsSection>
        </motion.div>
      </Container>
    </CircuitDetailContainer>
  );
};

export default CircuitDetailPage;