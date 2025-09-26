import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, GradientText } from '../styles/theme';
import { circuits, Circuit, searchCircuits } from '../data/circuits';
import { CircuitOutline } from '../components/CircuitOutline';
import { CircuitImageModal } from '../components/CircuitImageModal';

const CircuitsPageContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.gradients.dark};
  padding-top: 80px;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  
  h1 {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 3.5rem;
    font-weight: 900;
    margin-bottom: 20px;
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 2.5rem;
    }
  }
  
  .subtitle {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.lightGray};
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const StatsOverview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
  
  .stat-card {
    background: ${props => props.theme.gradients.dark};
    border: 1px solid ${props => props.theme.colors.gray};
    border-radius: 15px;
    padding: 25px;
    text-align: center;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: ${props => props.theme.shadows.card};
      border-color: ${props => props.theme.colors.primary};
    }
    
    .stat-number {
      font-family: ${props => props.theme.fonts.primary};
      font-size: 2.5rem;
      font-weight: 900;
      color: ${props => props.theme.colors.primary};
      margin-bottom: 10px;
    }
    
    .stat-label {
      font-size: 0.9rem;
      color: ${props => props.theme.colors.lightGray};
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
`;

const FilterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  min-width: 300px;
  background: rgba(56, 56, 63, 0.5);
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 25px;
  padding: 15px 20px;
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.shadows.red};
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.lightGray};
  }
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  
  .filter-btn {
    background: ${props => props.theme.colors.gray};
    border: 1px solid ${props => props.theme.colors.gray};
    border-radius: 20px;
    padding: 8px 16px;
    color: ${props => props.theme.colors.white};
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &.active {
      background: ${props => props.theme.colors.primary};
      border-color: ${props => props.theme.colors.primary};
    }
    
    &:hover {
      background: ${props => props.theme.colors.primary};
      border-color: ${props => props.theme.colors.primary};
    }
  }
`;

const SortSelect = styled.select`
  background: rgba(56, 56, 63, 0.5);
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 20px;
  padding: 10px 15px;
  color: ${props => props.theme.colors.white};
  font-size: 14px;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
  
  option {
    background: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
  }
`;

const CircuitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 30px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const CircuitCard = styled(motion.div)`
  background: ${props => props.theme.gradients.dark};
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${props => props.theme.shadows.card};
    border-color: ${props => props.theme.colors.primary};
  }
`;

const CircuitHeader = styled.div`
  padding: 25px;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  
  .circuit-name {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: ${props => props.theme.colors.white};
  }
  
  .grand-prix {
    font-size: 1rem;
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
    margin-bottom: 8px;
  }
  
  .location {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${props => props.theme.colors.lightGray};
    font-size: 0.9rem;
    
    .flag {
      font-size: 1.2rem;
    }
  }
`;

const CircuitBody = styled.div`
  padding: 0 25px 25px;
  
  .circuit-outline {
    margin: 20px 0;
    display: flex;
    justify-content: center;
  }
  
  .circuit-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-bottom: 20px;
    
    .stat-item {
      .stat-label {
        font-size: 0.8rem;
        color: ${props => props.theme.colors.lightGray};
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 4px;
      }
      
      .stat-value {
        font-family: ${props => props.theme.fonts.primary};
        font-weight: 700;
        color: ${props => props.theme.colors.white};
        font-size: 0.9rem;
      }
    }
  }
  
  .lap-record {
    background: rgba(225, 6, 0, 0.1);
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 20px;
    
    .record-title {
      font-size: 0.8rem;
      color: ${props => props.theme.colors.primary};
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 8px;
      font-weight: 600;
    }
    
    .record-time {
      font-family: ${props => props.theme.fonts.primary};
      font-size: 1.4rem;
      font-weight: 900;
      color: ${props => props.theme.colors.white};
      margin-bottom: 5px;
    }
    
    .record-driver {
      color: ${props => props.theme.colors.lightGray};
      font-size: 0.9rem;
      
      .driver-name {
        color: ${props => props.theme.colors.white};
        font-weight: 600;
      }
      
      .team-name {
        color: ${props => props.theme.colors.primary};
        font-weight: 600;
      }
    }
  }
  
  .circuit-type {
    display: inline-block;
    background: ${props => props.theme.colors.gray};
    color: ${props => props.theme.colors.white};
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

const CircuitActions = styled.div`
  padding: 20px 25px;
  border-top: 1px solid ${props => props.theme.colors.gray};
  display: flex;
  gap: 10px;
  
  .action-btn {
    flex: 1;
    background: ${props => props.theme.colors.primary};
    border: none;
    color: white;
    padding: 12px 20px;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background: #B71C1C;
      transform: translateY(-2px);
    }
    
    &.secondary {
      background: ${props => props.theme.colors.gray};
      
      &:hover {
        background: ${props => props.theme.colors.lightGray};
        color: ${props => props.theme.colors.black};
      }
    }
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: ${props => props.theme.colors.lightGray};
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: ${props => props.theme.colors.white};
  }
  
  p {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

type SortOption = 'name' | 'country' | 'length' | 'firstGP' | 'lapRecord';

const CircuitsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<Circuit['trackType'] | 'all'>('all');
  const [sortBy, setSortBy] = useState<SortOption>('name');
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedCircuitImage, setSelectedCircuitImage] = useState<string>('');
  const [selectedCircuitForImage, setSelectedCircuitForImage] = useState<Circuit | null>(null);
  const navigate = useNavigate();

  // Validate circuit image mapping on component mount
  useEffect(() => {
    const validateCircuitImages = () => {
      const unmappedCircuits = circuits.filter(circuit => {
        const imageName = getCircuitImageName(circuit.id);
        const isDefaultMapping = imageName === `${circuit.id}-circuit.jpg`;
        return isDefaultMapping && !['bahrain', 'saudi-arabia', 'australia', 'miami', 'monaco', 'austria', 'azerbaijan', 'singapore', 'las-vegas', 'qatar', 'abu-dhabi'].includes(circuit.id);
      });
      
      if (unmappedCircuits.length > 0) {
        console.warn('⚠️ Circuit images may need mapping verification:', unmappedCircuits.map(c => c.id));
      } else {
        console.info('✅ All circuit images are properly mapped');
      }
    };
    
    validateCircuitImages();
  }, []);

  const filteredAndSortedCircuits = useMemo(() => {
    let filtered = circuits;

    // Apply search filter
    if (searchQuery) {
      filtered = searchCircuits(searchQuery);
    }

    // Apply type filter
    if (selectedType !== 'all') {
      filtered = filtered.filter(circuit => circuit.trackType === selectedType);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'country':
          return a.country.localeCompare(b.country);
        case 'length':
          return b.trackLength - a.trackLength;
        case 'firstGP':
          return a.firstGrandPrix - b.firstGrandPrix;
        case 'lapRecord':
          return a.lapRecord.time.localeCompare(b.lapRecord.time);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedType, sortBy]);

  const circuitStats = useMemo(() => {
    const totalCircuits = circuits.length;
    const permanentCircuits = circuits.filter(c => c.trackType === 'Permanent Circuit').length;
    const streetCircuits = circuits.filter(c => c.trackType === 'Street Circuit').length;
    const countries = new Set(circuits.map(c => c.country)).size;
    
    return {
      totalCircuits,
      permanentCircuits,
      streetCircuits,
      countries
    };
  }, []);

  const handleCircuitClick = (circuitId: string) => {
    navigate(`/circuits/${circuitId}`);
  };

  // Circuit ID to image filename mapping
  const getCircuitImageName = (circuitId: string): string => {
    const imageMapping: { [key: string]: string } = {
      'bahrain': 'bahrain-circuit.jpg',
      'saudi-arabia': 'saudi-arabia-circuit.jpg',
      'australia': 'australia-circuit.jpg',
      'japan': 'japanese-circuit.jpg',
      'china': 'chinese-circuit.jpg',
      'miami': 'miami-circuit.jpg',
      'emilia-romagna': 'imola-circuit.jpg',
      'monaco': 'monaco-circuit.jpg',
      'canada': 'canadian-circuit.jpg',
      'spain': 'spanish-circuit.jpg',
      'austria': 'austrian-circuit.jpg',
      'britain': 'british-circuit.jpg',
      'hungary': 'hungarian-circuit.jpg',
      'belgium': 'belgian-circuit.jpg',
      'netherlands': 'dutch-circuit.jpg',
      'italy': 'italian-circuit.jpg',
      'azerbaijan': 'azerbaijan-circuit.jpg',
      'singapore': 'singapore-circuit.jpg',
      'usa': 'usa-circuit.jpg',
      'mexico': 'mexico-circuit.jpg',
      'brazil': 'sao-paulo-circuit.jpg',
      'las-vegas': 'las-vegas-circuit.jpg',
      'qatar': 'qatar-circuit.jpg',
      'abu-dhabi': 'abu-dhabi-circuit.jpg'
    };
    
    return imageMapping[circuitId] || `${circuitId}-circuit.jpg`;
  };

  const handleCircuitImageClick = (circuitId: string) => {
    const circuit = circuits.find(c => c.id === circuitId);
    if (circuit) {
      const imageName = getCircuitImageName(circuitId);
      setSelectedCircuitImage(`/circuits/${imageName}`);
      setSelectedCircuitForImage(circuit);
      setIsImageModalOpen(true);
    }
  };

  const handleCloseImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedCircuitImage('');
    setSelectedCircuitForImage(null);
  };

  return (
    <CircuitsPageContainer>
      <Container>
        <PageHeader>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GradientText>F1 Circuits</GradientText>
          </motion.h1>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore every Formula 1 circuit with detailed information about venues, lap records, 
            and track characteristics. From the streets of Monaco to the high speeds of Monza.
          </motion.p>
        </PageHeader>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <StatsOverview>
            <div className="stat-card">
              <div className="stat-number">{circuitStats.totalCircuits}</div>
              <div className="stat-label">Total Circuits</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{circuitStats.permanentCircuits}</div>
              <div className="stat-label">Permanent Circuits</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{circuitStats.streetCircuits}</div>
              <div className="stat-label">Street Circuits</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{circuitStats.countries}</div>
              <div className="stat-label">Countries</div>
            </div>
          </StatsOverview>

          <FilterSection>
            <SearchInput
              type="text"
              placeholder="Search circuits, venues, countries, or drivers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            
            <FilterButtons>
              <button
                className={`filter-btn ${selectedType === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedType('all')}
              >
                All Circuits
              </button>
              <button
                className={`filter-btn ${selectedType === 'Permanent Circuit' ? 'active' : ''}`}
                onClick={() => setSelectedType('Permanent Circuit')}
              >
                Permanent
              </button>
              <button
                className={`filter-btn ${selectedType === 'Street Circuit' ? 'active' : ''}`}
                onClick={() => setSelectedType('Street Circuit')}
              >
                Street
              </button>
              <button
                className={`filter-btn ${selectedType === 'Semi-Permanent' ? 'active' : ''}`}
                onClick={() => setSelectedType('Semi-Permanent')}
              >
                Semi-Permanent
              </button>
            </FilterButtons>

            <SortSelect
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
            >
              <option value="name">Sort by Name</option>
              <option value="country">Sort by Country</option>
              <option value="length">Sort by Length</option>
              <option value="firstGP">Sort by First GP</option>
              <option value="lapRecord">Sort by Lap Record</option>
            </SortSelect>
          </FilterSection>

          {filteredAndSortedCircuits.length > 0 ? (
            <CircuitsGrid>
              <AnimatePresence>
                {filteredAndSortedCircuits.map((circuit, index) => (
                  <CircuitCard
                    key={circuit.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CircuitHeader>
                      <div className="circuit-name">{circuit.name}</div>
                      <div className="grand-prix">{circuit.grandPrix}</div>
                      <div className="location">
                        <span className="flag">{circuit.flag}</span>
                        <span>{circuit.venue}, {circuit.country}</span>
                      </div>
                    </CircuitHeader>

                    <CircuitBody>
                      <div className="circuit-outline">
                        <CircuitOutline 
                          circuitId={circuit.id} 
                          width="280px" 
                          height="180px" 
                          onClick={() => handleCircuitImageClick(circuit.id)}
                        />
                      </div>

                      <div className="circuit-stats">
                        <div className="stat-item">
                          <div className="stat-label">Track Length</div>
                          <div className="stat-value">{circuit.trackLength} km</div>
                        </div>
                        <div className="stat-item">
                          <div className="stat-label">Number of Laps</div>
                          <div className="stat-value">{circuit.numberOfLaps}</div>
                        </div>
                        <div className="stat-item">
                          <div className="stat-label">Corners</div>
                          <div className="stat-value">{circuit.corners}</div>
                        </div>
                        <div className="stat-item">
                          <div className="stat-label">First GP</div>
                          <div className="stat-value">{circuit.firstGrandPrix}</div>
                        </div>
                      </div>

                      <div className="lap-record">
                        <div className="record-title">Lap Record</div>
                        <div className="record-time">{circuit.lapRecord.time}</div>
                        <div className="record-driver">
                          <span className="driver-name">{circuit.lapRecord.driver}</span>
                          {' - '}
                          <span className="team-name">{circuit.lapRecord.team}</span>
                          {' '}({circuit.lapRecord.year})
                        </div>
                      </div>

                      <div className="circuit-type">{circuit.trackType}</div>
                    </CircuitBody>

                    <CircuitActions>
                      <button
                        className="action-btn"
                        onClick={() => handleCircuitClick(circuit.id)}
                      >
                        View Details
                      </button>
                      <button className="action-btn secondary">
                        Compare
                      </button>
                    </CircuitActions>
                  </CircuitCard>
                ))}
              </AnimatePresence>
            </CircuitsGrid>
          ) : (
            <NoResults>
              <h3>No circuits found</h3>
              <p>Try adjusting your search terms or filters to find what you're looking for.</p>
            </NoResults>
          )}
        </motion.div>
      </Container>
      
      {isImageModalOpen && selectedCircuitForImage && (
        <CircuitImageModal
          isOpen={isImageModalOpen}
          onClose={handleCloseImageModal}
          circuitName={selectedCircuitForImage.name}
          circuitVenue={selectedCircuitForImage.venue}
          imageSrc={selectedCircuitImage}
          grandPrix={selectedCircuitForImage.grandPrix}
        />
      )}
    </CircuitsPageContainer>
  );
};

export default CircuitsPage;