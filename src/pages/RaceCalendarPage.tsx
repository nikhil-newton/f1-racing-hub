import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, GradientText, FlexContainer } from '../styles/theme';
import { raceCalendarData } from '../data/races';
import { Race } from '../types';

const PageWrapper = styled.div`
  margin-top: 80px;
  padding: 60px 0;
  min-height: calc(100vh - 80px);
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const RaceCard = styled(motion.div)<{ isCompleted: boolean }>`
  background: linear-gradient(135deg, rgba(23, 23, 30, 0.95) 0%, rgba(30, 30, 40, 0.95) 100%);
  border: 2px solid ${props => props.isCompleted ? '#00ff4150' : '#e1060050'};
  border-radius: 20px;
  padding: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.isCompleted ? 
      'linear-gradient(90deg, #00ff41, #32ff7e)' : 
      'linear-gradient(90deg, #e10600, #ff4757)'};
  }

  &:hover {
    transform: translateY(-5px);
    border-color: ${props => props.isCompleted ? '#00ff41' : '#e10600'};
    box-shadow: 0 20px 40px ${props => props.isCompleted ? '#00ff4120' : '#e1060020'};
  }
`;

const RaceHeader = styled.div`
  margin-bottom: 20px;
`;

const RaceName = styled.h3`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 8px 0;
`;

const RaceDetails = styled.div`
  color: #d0d0d2;
  margin-bottom: 15px;
`;

const RaceDate = styled.div`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #e10600;
  margin-bottom: 5px;
`;

const CircuitName = styled.div`
  font-size: 0.95rem;
  color: #d0d0d2;
`;

const CountryFlag = styled.span`
  font-size: 1.5rem;
  margin-right: 10px;
`;

const StatusBadge = styled.div<{ isCompleted: boolean }>`
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  background: ${props => props.isCompleted ? '#00ff4120' : '#ff475720'};
  color: ${props => props.isCompleted ? '#00ff41' : '#ff4757'};
  border: 1px solid ${props => props.isCompleted ? '#00ff4150' : '#ff475750'};
`;

const RaceModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled(motion.div)`
  background: linear-gradient(135deg, rgba(23, 23, 30, 0.98) 0%, rgba(30, 30, 40, 0.98) 100%);
  border: 2px solid #e1060060;
  border-radius: 20px;
  padding: 40px;
  max-width: 700px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  backdrop-filter: blur(20px);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;
`;

const SessionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
  margin: 20px 0;
`;

const SessionCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 15px 10px;
  text-align: center;
`;

const SessionName = styled.div`
  color: #e10600;
  font-weight: 600;
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const SessionTime = styled.div`
  color: #fff;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.9rem;
  margin-bottom: 5px;
`;

const SessionDate = styled.div`
  color: #d0d0d2;
  font-size: 0.8rem;
`;

const RaceResultsSection = styled.div`
  margin: 25px 0;
`;

const RaceResultsTitle = styled.h3`
  color: #fff;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  
  &::before {
    content: '🏁';
    font-size: 1.3rem;
  }
`;

const PolePositionCard = styled.div`
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  color: #000;
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 20px;
  font-weight: bold;
`;

const PodiumResults = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 15px;
`;

const PodiumCard = styled.div<{ position: number }>`
  background: ${props => 
    props.position === 1 ? 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)' :
    props.position === 2 ? 'linear-gradient(135deg, #C0C0C0 0%, #A8A8A8 100%)' :
    'linear-gradient(135deg, #CD7F32 0%, #A0522D 100%)'
  };
  color: ${props => props.position === 1 ? '#000' : '#fff'};
  padding: 15px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  
  &::before {
    content: '${props => 
      props.position === 1 ? '🥇' :
      props.position === 2 ? '🥈' : '🥉'
    }';
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 1.5rem;
  }
`;

const DriverName = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
`;

const TeamName = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const ResultTime = styled.div`
  font-family: 'Orbitron', monospace;
  font-size: 0.95rem;
  margin-top: 5px;
`;

const CompletedRaceInfo = styled.div`
  margin-top: 15px;
  padding: 15px;
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid rgba(0, 255, 65, 0.3);
  border-radius: 12px;
`;

const StatsOverview = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const OverviewStat = styled.div`
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
`;

const OverviewValue = styled.div`
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #e10600;
  margin-bottom: 5px;
`;

const OverviewLabel = styled.div`
  color: #d0d0d2;
  font-size: 0.9rem;
  text-transform: uppercase;
`;

const FilterSection = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

const FilterButton = styled.button<{ active: boolean }>`
  background: ${props => props.active ? '#e10600' : 'transparent'};
  border: 2px solid #e10600;
  color: ${props => props.active ? '#fff' : '#e10600'};
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #e10600;
    color: #fff;
  }
`;

const getCountryFlag = (country: string): string => {
  const flags: { [key: string]: string } = {
    'Bahrain': '🇧🇭',
    'Saudi Arabia': '🇸🇦',
    'Australia': '🇦🇺',
    'China': '🇨🇳',
    'Japan': '🇯🇵',
    'United States': '🇺🇸',
    'Italy': '🇮🇹',
    'Monaco': '🇲🇨',
    'Canada': '🇨🇦',
    'Spain': '🇪🇸',
    'Austria': '🇦🇹',
    'United Kingdom': '🇬🇧',
    'Hungary': '🇭🇺',
    'Belgium': '🇧🇪',
    'Netherlands': '🇳🇱',
    'Azerbaijan': '🇦🇿',
    'Singapore': '🇸🇬',
    'Mexico': '🇲🇽',
    'Brazil': '🇧🇷',
    'Qatar': '🇶🇦',
    'United Arab Emirates': '🇦🇪'
  };
  return flags[country] || '🏁';
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric' 
  });
};

const RaceCalendarPage = () => {
  const [selectedRace, setSelectedRace] = useState<Race | null>(null);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed'>('all');

  const filteredRaces = raceCalendarData.filter(race => {
    if (filter === 'upcoming') return !race.completed;
    if (filter === 'completed') return race.completed;
    return true;
  });

  const totalStats = {
    total: raceCalendarData.length,
    completed: raceCalendarData.filter(r => r.completed).length,
    upcoming: raceCalendarData.filter(r => !r.completed).length,
    countries: new Set(raceCalendarData.map(r => r.country)).size
  };

  return (
    <PageWrapper>
      <Container>
        <GradientText>
          <h1 style={{ fontSize: '3rem', fontFamily: 'Orbitron', textAlign: 'center', marginBottom: '20px' }}>
            2025 F1 CALENDAR
          </h1>
        </GradientText>
        
        <StatsOverview>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#d0d0d2', marginBottom: '30px' }}>
            Complete 2025 Formula 1 season calendar with race weekends and track information
          </p>
          <StatsContainer>
            <OverviewStat>
              <OverviewValue>{totalStats.total}</OverviewValue>
              <OverviewLabel>Total Races</OverviewLabel>
            </OverviewStat>
            <OverviewStat>
              <OverviewValue>{totalStats.upcoming}</OverviewValue>
              <OverviewLabel>Upcoming</OverviewLabel>
            </OverviewStat>
            <OverviewStat>
              <OverviewValue>{totalStats.completed}</OverviewValue>
              <OverviewLabel>Completed</OverviewLabel>
            </OverviewStat>
            <OverviewStat>
              <OverviewValue>{totalStats.countries}</OverviewValue>
              <OverviewLabel>Countries</OverviewLabel>
            </OverviewStat>
          </StatsContainer>
        </StatsOverview>

        <FilterSection>
          <FilterButton 
            active={filter === 'all'} 
            onClick={() => setFilter('all')}
          >
            All Races
          </FilterButton>
          <FilterButton 
            active={filter === 'upcoming'} 
            onClick={() => setFilter('upcoming')}
          >
            Upcoming
          </FilterButton>
          <FilterButton 
            active={filter === 'completed'} 
            onClick={() => setFilter('completed')}
          >
            Completed
          </FilterButton>
        </FilterSection>

        <CalendarGrid>
          {filteredRaces.map((race, index) => (
            <RaceCard
              key={race.id}
              isCompleted={race.completed}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedRace(race)}
            >
              <StatusBadge isCompleted={race.completed}>
                {race.completed ? 'Completed' : 'Upcoming'}
              </StatusBadge>
              
              <RaceHeader>
                <FlexContainer align="center" gap="10px">
                  <CountryFlag>{getCountryFlag(race.country)}</CountryFlag>
                  <div style={{ flex: 1 }}>
                    <RaceName>{race.name}</RaceName>
                    <CircuitName>{race.circuit}</CircuitName>
                  </div>
                </FlexContainer>
              </RaceHeader>

              <RaceDetails>
                <RaceDate>{formatDate(race.date)} • {race.time}</RaceDate>
                <div style={{ fontSize: '0.9rem', color: '#d0d0d2' }}>
                  {race.country}
                </div>
              </RaceDetails>

              {race.trackInfo && (
                <div style={{ marginTop: '15px', fontSize: '0.9rem', color: '#d0d0d2' }}>
                  <div>Length: {race.trackInfo.length}</div>
                  <div>Turns: {race.trackInfo.turns}</div>
                </div>
              )}

              {race.completed && race.results && (
                <CompletedRaceInfo>
                  {race.polePosition && (
                    <div style={{ marginBottom: '10px' }}>
                      <strong>🏁 Pole Position:</strong><br />
                      <span style={{ fontSize: '0.9rem' }}>
                        {race.polePosition.driver} ({race.polePosition.team}) - {race.polePosition.time}
                      </span>
                    </div>
                  )}
                  
                  <div style={{ marginBottom: '10px' }}>
                    <strong>🏆 Winner:</strong><br />
                    <span style={{ fontSize: '0.9rem' }}>
                      {race.winner} - {race.winnerTime}
                    </span>
                  </div>

                  <div>
                    <strong>🥇 Top 3:</strong><br />
                    {race.results.slice(0, 3).map((result) => (
                      <div key={result.position} style={{ fontSize: '0.85rem', marginTop: '3px' }}>
                        {result.position}. {result.driver} ({result.team}) - {result.time}
                      </div>
                    ))}
                  </div>
                </CompletedRaceInfo>
              )}
            </RaceCard>
          ))}
        </CalendarGrid>

        <AnimatePresence>
          {selectedRace && (
            <RaceModal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRace(null)}
            >
              <ModalContent
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                style={{ position: 'relative' }}
              >
                <CloseButton onClick={() => setSelectedRace(null)}>×</CloseButton>
                
                <FlexContainer align="center" gap="15px" style={{ marginBottom: '25px' }}>
                  <CountryFlag style={{ fontSize: '3rem' }}>
                    {getCountryFlag(selectedRace.country)}
                  </CountryFlag>
                  <div>
                    <RaceName style={{ fontSize: '2rem' }}>{selectedRace.name}</RaceName>
                    <CircuitName style={{ fontSize: '1.1rem' }}>{selectedRace.circuit}</CircuitName>
                    <div style={{ color: '#d0d0d2', marginTop: '5px' }}>
                      {selectedRace.country}
                    </div>
                  </div>
                </FlexContainer>

                {selectedRace.sessions && (
                  <div style={{ marginBottom: '25px' }}>
                    <h3 style={{ color: '#fff', marginBottom: '15px' }}>Race Weekend Schedule</h3>
                    <SessionsGrid>
                      <SessionCard>
                        <SessionName>FP1</SessionName>
                        <SessionTime>{selectedRace.sessions.fp1.time}</SessionTime>
                        <SessionDate>{formatDate(selectedRace.sessions.fp1.date)}</SessionDate>
                      </SessionCard>
                      <SessionCard>
                        <SessionName>FP2</SessionName>
                        <SessionTime>{selectedRace.sessions.fp2.time}</SessionTime>
                        <SessionDate>{formatDate(selectedRace.sessions.fp2.date)}</SessionDate>
                      </SessionCard>
                      <SessionCard>
                        <SessionName>FP3</SessionName>
                        <SessionTime>{selectedRace.sessions.fp3.time}</SessionTime>
                        <SessionDate>{formatDate(selectedRace.sessions.fp3.date)}</SessionDate>
                      </SessionCard>
                      <SessionCard>
                        <SessionName>Qualifying</SessionName>
                        <SessionTime>{selectedRace.sessions.qualifying.time}</SessionTime>
                        <SessionDate>{formatDate(selectedRace.sessions.qualifying.date)}</SessionDate>
                      </SessionCard>
                      <SessionCard>
                        <SessionName>Race</SessionName>
                        <SessionTime>{selectedRace.sessions.race.time}</SessionTime>
                        <SessionDate>{formatDate(selectedRace.sessions.race.date)}</SessionDate>
                      </SessionCard>
                    </SessionsGrid>
                  </div>
                )}

                {selectedRace.trackInfo && (
                  <div style={{ marginBottom: '25px' }}>
                    <h3 style={{ color: '#fff', marginBottom: '15px' }}>Track Information</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
                      <SessionCard>
                        <SessionName>Length</SessionName>
                        <SessionTime>{selectedRace.trackInfo.length}</SessionTime>
                      </SessionCard>
                      <SessionCard>
                        <SessionName>Turns</SessionName>
                        <SessionTime>{selectedRace.trackInfo.turns}</SessionTime>
                      </SessionCard>
                      <SessionCard>
                        <SessionName>DRS Zones</SessionName>
                        <SessionTime>{selectedRace.trackInfo.drsZones}</SessionTime>
                      </SessionCard>
                    </div>
                    <div style={{ marginTop: '15px', color: '#d0d0d2' }}>
                      <strong>Lap Record:</strong> {selectedRace.trackInfo.lapRecord} 
                      <br />
                      <strong>Record Holder:</strong> {selectedRace.trackInfo.lapRecordHolder}
                    </div>
                  </div>
                )}

                {selectedRace.completed && selectedRace.results && (
                  <RaceResultsSection>
                    <RaceResultsTitle>Race Results</RaceResultsTitle>
                    
                    {selectedRace.polePosition && (
                      <PolePositionCard>
                        <strong>🏁 Pole Position</strong><br />
                        <DriverName>{selectedRace.polePosition.driver}</DriverName>
                        <TeamName>{selectedRace.polePosition.team}</TeamName>
                        <ResultTime>{selectedRace.polePosition.time}</ResultTime>
                      </PolePositionCard>
                    )}

                    <PodiumResults>
                      {selectedRace.results.slice(0, 3).map((result) => (
                        <PodiumCard key={result.position} position={result.position}>
                          <div style={{ fontSize: '1.2rem' }}>P{result.position}</div>
                          <DriverName>{result.driver}</DriverName>
                          <TeamName>{result.team}</TeamName>
                          <ResultTime>{result.time}</ResultTime>
                          {result.gap && result.gap !== "Winner" && (
                            <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>
                              {result.gap}
                            </div>
                          )}
                        </PodiumCard>
                      ))}
                    </PodiumResults>
                  </RaceResultsSection>
                )}

                {selectedRace.weather && (
                  <div>
                    <h3 style={{ color: '#fff', marginBottom: '15px' }}>Expected Weather</h3>
                    <FlexContainer gap="20px">
                      <div style={{ color: '#d0d0d2' }}>
                        <strong>Temperature:</strong> {selectedRace.weather.temperature}
                      </div>
                      <div style={{ color: '#d0d0d2' }}>
                        <strong>Conditions:</strong> {selectedRace.weather.conditions}
                      </div>
                    </FlexContainer>
                  </div>
                )}
              </ModalContent>
            </RaceModal>
          )}
        </AnimatePresence>
      </Container>
    </PageWrapper>
  );
};

export default RaceCalendarPage;