import { useState, useMemo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, GradientText, F1Button } from '../styles/theme';
import { driversData } from '../data/drivers';
import DriverCard from '../components/DriverCard';
import DriverModal from '../components/DriverModal';
import { Driver } from '../types';
import { driverStats } from '../utils/driverStats';

const PageWrapper = styled.div`
  margin-top: 80px;
  padding: 60px 0;
  min-height: calc(100vh - 80px);
`;

const HeaderSection = styled.section`
  text-align: center;
  margin-bottom: 60px;
  
  h1 {
    font-size: clamp(2.5rem, 6vw, 4rem);
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.lightGray};
    max-width: 600px;
    margin: 0 auto 40px auto;
    line-height: 1.6;
  }
`;

const FilterSection = styled.section`
  background: rgba(56, 56, 63, 0.3);
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 50px;
  
  .filter-title {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 1.2rem;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .filter-controls {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    align-items: center;
    
    .search-input {
      background: ${props => props.theme.colors.gray};
      border: 1px solid ${props => props.theme.colors.gray};
      border-radius: 8px;
      padding: 12px 16px;
      color: ${props => props.theme.colors.white};
      font-size: 14px;
      
      &::placeholder {
        color: ${props => props.theme.colors.lightGray};
      }
      
      &:focus {
        outline: none;
        border-color: ${props => props.theme.colors.primary};
      }
    }
    
    .filter-select {
      background: ${props => props.theme.colors.gray};
      border: 1px solid ${props => props.theme.colors.gray};
      border-radius: 8px;
      padding: 12px 16px;
      color: ${props => props.theme.colors.white};
      font-size: 14px;
      cursor: pointer;
      
      &:focus {
        outline: none;
        border-color: ${props => props.theme.colors.primary};
      }
      
      option {
        background: ${props => props.theme.colors.gray};
        color: ${props => props.theme.colors.white};
      }
    }
    
    .sort-buttons {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

const DriversGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
`;

const StatsOverview = styled.section`
  background: ${props => props.theme.gradients.dark};
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 50px;
  text-align: center;
  
  h2 {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 2rem;
    margin-bottom: 30px;
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    
    .stat-item {
      .stat-number {
        font-family: ${props => props.theme.fonts.primary};
        font-size: 3rem;
        font-weight: 900;
        margin-bottom: 10px;
      }
      
      .stat-label {
        color: ${props => props.theme.colors.lightGray};
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    }
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 60px 20px;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.lightGray};
`;

const DriversPage = () => {
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [teamFilter, setTeamFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Get unique teams for filter
  const teams = useMemo(() => {
    const uniqueTeams = [...new Set(driversData.map(driver => driver.team))];
    return uniqueTeams.sort();
  }, []);

  // Calculate overview stats
  // Use comprehensive driver statistics
  const stats = {
    totalDrivers: driverStats.totalDrivers,
    totalChampionships: driverStats.totalChampionships,
    totalWins: driverStats.totalCareerWins,
    totalPodiums: driverStats.totalCareerPodiums,
    nationalities: driverStats.totalNationalities,
    championDrivers: driverStats.championDrivers,
    raceWinners: driverStats.raceWinners,
    podiumFinishers: driverStats.podiumFinishers
  };

  // Filter and sort drivers
  const filteredAndSortedDrivers = useMemo(() => {
    let filtered = driversData.filter(driver => {
      const matchesSearch = driver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          driver.team.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          driver.nationality.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTeam = teamFilter === 'all' || driver.team === teamFilter;
      
      return matchesSearch && matchesTeam;
    });

    // Sort drivers
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'wins':
          return b.raceWins - a.raceWins;
        case 'championships':
          return b.championships - a.championships;
        case 'points':
          return b.points - a.points;
        case 'age':
          return new Date(a.dateOfBirth).getTime() - new Date(b.dateOfBirth).getTime();
        case 'name':
        default:
          return a.lastName.localeCompare(b.lastName);
      }
    });

    return filtered;
  }, [searchQuery, teamFilter, sortBy]);

  const handleViewDriver = (driver: Driver) => {
    setSelectedDriver(driver);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDriver(null);
  };

  return (
    <PageWrapper>
      <Container>
        <HeaderSection>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <GradientText>
              <h1 className="f1-title">F1 DRIVERS 2024</h1>
            </GradientText>
            <p>
              Meet all the current Formula 1 drivers competing in the 2024 season. 
              Explore their profiles, statistics, and career achievements.
            </p>
          </motion.div>
        </HeaderSection>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <StatsOverview>
            <GradientText>
              <h2 className="f1-title">2024 SEASON OVERVIEW</h2>
            </GradientText>
            <div className="stats-grid">
              <div className="stat-item">
                <GradientText>
                  <div className="stat-number f1-red-text">{stats.totalDrivers}</div>
                </GradientText>
                <div className="stat-label">Active Drivers</div>
              </div>
              <div className="stat-item">
                <GradientText>
                  <div className="stat-number f1-red-text">{stats.totalChampionships}</div>
                </GradientText>
                <div className="stat-label">Total Championships</div>
              </div>
              <div className="stat-item">
                <GradientText>
                  <div className="stat-number f1-red-text">{stats.totalWins}</div>
                </GradientText>
                <div className="stat-label">Career Wins</div>
              </div>
              <div className="stat-item">
                <GradientText>
                  <div className="stat-number f1-red-text">{stats.totalPodiums}</div>
                </GradientText>
                <div className="stat-label">Career Podiums</div>
              </div>
              <div className="stat-item">
                <GradientText>
                  <div className="stat-number f1-red-text">{stats.nationalities}</div>
                </GradientText>
                <div className="stat-label">Nationalities</div>
              </div>
              <div className="stat-item">
                <GradientText>
                  <div className="stat-number f1-red-text">{stats.championDrivers}</div>
                </GradientText>
                <div className="stat-label">World Champions</div>
              </div>
            </div>
          </StatsOverview>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <FilterSection>
            <GradientText>
              <div className="filter-title">FILTER & SORT DRIVERS</div>
            </GradientText>
            
            <div className="filter-controls">
              <input
                type="text"
                placeholder="Search drivers, teams, or nationality..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              
              <select
                className="filter-select"
                value={teamFilter}
                onChange={(e) => setTeamFilter(e.target.value)}
              >
                <option value="all">All Teams</option>
                {teams.map(team => (
                  <option key={team} value={team}>{team}</option>
                ))}
              </select>
              
              <div className="sort-buttons">
                <F1Button
                  variant={sortBy === 'name' ? 'primary' : 'outline'}
                  size="small"
                  onClick={() => setSortBy('name')}
                >
                  Name
                </F1Button>
                <F1Button
                  variant={sortBy === 'wins' ? 'primary' : 'outline'}
                  size="small"
                  onClick={() => setSortBy('wins')}
                >
                  Wins
                </F1Button>
                <F1Button
                  variant={sortBy === 'championships' ? 'primary' : 'outline'}
                  size="small"
                  onClick={() => setSortBy('championships')}
                >
                  Championships
                </F1Button>
                <F1Button
                  variant={sortBy === 'points' ? 'primary' : 'outline'}
                  size="small"
                  onClick={() => setSortBy('points')}
                >
                  Points
                </F1Button>
                <F1Button
                  variant={sortBy === 'age' ? 'primary' : 'outline'}
                  size="small"
                  onClick={() => setSortBy('age')}
                >
                  Age
                </F1Button>
              </div>
            </div>
          </FilterSection>
        </motion.div>

        {filteredAndSortedDrivers.length === 0 ? (
          <LoadingMessage>
            No drivers found matching your search criteria.
          </LoadingMessage>
        ) : (
          <DriversGrid>
            {filteredAndSortedDrivers.map((driver, index) => (
              <DriverCard
                key={driver.id}
                driver={driver}
                index={index}
                onViewDetails={handleViewDriver}
              />
            ))}
          </DriversGrid>
        )}
      </Container>

      <DriverModal
        driver={selectedDriver}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </PageWrapper>
  );
};

export default DriversPage;