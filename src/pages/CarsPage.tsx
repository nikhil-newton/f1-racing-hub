import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Car } from '../types';
import { carsData } from '../data/cars';
import { F1Card, F1Button } from '../styles/theme';
import CarModal from '../components/CarModal';

const CarsContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  padding: 120px 20px 60px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
  
  h1 {
    font-size: clamp(3rem, 8vw, 5rem);
    font-weight: 900;
    background: linear-gradient(45deg, #e10600, #ff6b00, #ffd700);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 20px;
    font-family: 'Orbitron', monospace;
  }
  
  p {
    font-size: 1.2rem;
    color: #ccc;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const FilterSection = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  
  label {
    color: #fff;
    font-weight: 600;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const Select = styled.select`
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(225, 6, 0, 0.3);
  border-radius: 8px;
  color: #fff;
  padding: 8px 12px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #e10600;
    background: rgba(225, 6, 0, 0.1);
  }
  
  option {
    background: #1a1a2e;
    color: #fff;
  }
`;

const SearchInput = styled.input`
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(225, 6, 0, 0.3);
  border-radius: 8px;
  color: #fff;
  padding: 8px 12px;
  font-size: 0.9rem;
  width: 200px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #e10600;
    background: rgba(225, 6, 0, 0.1);
  }
  
  &::placeholder {
    color: #aaa;
  }
`;

const CarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const CarCard = styled(F1Card)`
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.color || 'linear-gradient(90deg, #e10600, #ff6b00, #ffd700)'};
  }
  
  .car-image {
    width: 100%;
    height: 200px;
    background: ${props => `linear-gradient(135deg, ${props.color}20, ${props.color}10)`};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    color: ${props => props.color || '#e10600'};
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    
    &:hover img {
      transform: scale(1.05);
    }
  }
  
  .car-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 15px;
    
    h3 {
      font-size: 1.4rem;
      font-weight: 700;
      color: #fff;
      margin: 0;
      font-family: 'Orbitron', monospace;
    }
    
    .year {
      color: ${props => props.color || '#e10600'};
      font-size: 1.1rem;
      font-weight: 600;
    }
  }
  
  .team-name {
    color: #ccc;
    font-size: 0.9rem;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .drivers {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
    
    .driver-chip {
      background: ${props => props.color || '#e10600'}20;
      border: 1px solid ${props => props.color || '#e10600'}40;
      color: ${props => props.color || '#e10600'};
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 500;
    }
  }
  
  .specs-preview {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 20px;
    
    .spec {
      background: rgba(255, 255, 255, 0.05);
      padding: 8px;
      border-radius: 6px;
      text-align: center;
      
      .label {
        font-size: 0.8rem;
        color: #aaa;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 4px;
      }
      
      .value {
        font-size: 0.9rem;
        font-weight: 600;
        color: #fff;
      }
    }
  }
`;

const StatsSection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 40px;
  text-align: center;
  
  h2 {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 20px;
    font-family: 'Orbitron', monospace;
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    
    .stat {
      .number {
        font-size: 2rem;
        font-weight: 900;
        color: #e10600;
        font-family: 'Orbitron', monospace;
      }
      
      .label {
        color: #ccc;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-top: 5px;
      }
    }
  }
`;

type SortOption = 'name' | 'team' | 'topSpeed' | 'power';

const CarsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTeam, setSelectedTeam] = useState<string>('all');
  const [selectedEngine, setSelectedEngine] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortOption>('name');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teams = useMemo(() => {
    const teamSet = new Set(carsData.map(car => car.team));
    return Array.from(teamSet).sort();
  }, []);

  const engines = useMemo(() => {
    const engineSet = new Set(carsData.map(car => car.engine.manufacturer));
    return Array.from(engineSet).sort();
  }, []);

  const filteredAndSortedCars = useMemo(() => {
    let filtered = carsData.filter(car => {
      const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           car.team.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTeam = selectedTeam === 'all' || car.team === selectedTeam;
      const matchesEngine = selectedEngine === 'all' || car.engine.manufacturer === selectedEngine;
      
      return matchesSearch && matchesTeam && matchesEngine;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'team':
          return a.team.localeCompare(b.team);
        case 'topSpeed':
          const speedA = parseInt(a.performance.topSpeed.replace(/[^0-9]/g, ''));
          const speedB = parseInt(b.performance.topSpeed.replace(/[^0-9]/g, ''));
          return speedB - speedA;
        case 'power':
          return a.engine.powerOutput.localeCompare(b.engine.powerOutput);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedTeam, selectedEngine, sortBy]);

  const handleViewDetails = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  return (
    <CarsContainer>
      <Header>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          2025 F1 CARS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore the cutting-edge Formula 1 cars competing in the 2025 season. 
          Advanced hybrid powertrains, revolutionary aerodynamics, and state-of-the-art technology.
        </motion.p>
      </Header>

      <StatsSection>
        <h2>2025 SEASON OVERVIEW</h2>
        <div className="stats-grid">
          <div className="stat">
            <div className="number">10</div>
            <div className="label">Teams</div>
          </div>
          <div className="stat">
            <div className="number">20</div>
            <div className="label">Cars</div>
          </div>
          <div className="stat">
            <div className="number">1000+</div>
            <div className="label">Horsepower</div>
          </div>
          <div className="stat">
            <div className="number">370+</div>
            <div className="label">Top Speed (km/h)</div>
          </div>
        </div>
      </StatsSection>

      <FilterSection>
        <FilterGroup>
          <label>Search</label>
          <SearchInput
            type="text"
            placeholder="Search cars..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </FilterGroup>

        <FilterGroup>
          <label>Team</label>
          <Select
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
          >
            <option value="all">All Teams</option>
            {teams.map(team => (
              <option key={team} value={team}>{team}</option>
            ))}
          </Select>
        </FilterGroup>

        <FilterGroup>
          <label>Engine</label>
          <Select
            value={selectedEngine}
            onChange={(e) => setSelectedEngine(e.target.value)}
          >
            <option value="all">All Engines</option>
            {engines.map(engine => (
              <option key={engine} value={engine}>{engine}</option>
            ))}
          </Select>
        </FilterGroup>

        <FilterGroup>
          <label>Sort By</label>
          <Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
          >
            <option value="name">Name</option>
            <option value="team">Team</option>
            <option value="topSpeed">Top Speed</option>
            <option value="power">Power</option>
          </Select>
        </FilterGroup>
      </FilterSection>

      <CarsGrid>
        {filteredAndSortedCars.map((car, index) => (
          <motion.div
            key={car.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <CarCard hover color={car.primaryColor}>
              <div className="car-image">
                <img src={car.image} alt={`${car.fullName}`} />
              </div>
              
              <div className="car-header">
                <h3>{car.name}</h3>
                <span className="year">{car.year}</span>
              </div>
              
              <div className="team-name">{car.team}</div>
              
              <div className="drivers">
                {car.drivers.map(driver => (
                  <span key={driver} className="driver-chip">
                    {driver}
                  </span>
                ))}
              </div>
              
              <div className="specs-preview">
                <div className="spec">
                  <div className="label">Engine</div>
                  <div className="value">{car.engine.manufacturer}</div>
                </div>
                <div className="spec">
                  <div className="label">Power</div>
                  <div className="value">{car.engine.powerOutput}</div>
                </div>
                <div className="spec">
                  <div className="label">Top Speed</div>
                  <div className="value">{car.performance.topSpeed}</div>
                </div>
                <div className="spec">
                  <div className="label">Weight</div>
                  <div className="value">{car.chassis.weight}</div>
                </div>
              </div>
              
              <F1Button 
                onClick={() => handleViewDetails(car)}
                style={{ width: '100%' }}
              >
                View Specifications
              </F1Button>
            </CarCard>
          </motion.div>
        ))}
      </CarsGrid>
      
      <CarModal 
        car={selectedCar}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </CarsContainer>
  );
};

export default CarsPage;