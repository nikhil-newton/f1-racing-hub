import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, GradientText, FlexContainer } from '../styles/theme';
import { teamsData } from '../data/teams';
import { Team } from '../types';
import { getTeamColors, getTeamLogoPath } from '../assets/team-logos';

const PageWrapper = styled.div`
  margin-top: 80px;
  padding: 60px 0;
  min-height: calc(100vh - 80px);
`;

const TeamsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const TeamCard = styled(motion.div)<{ primaryColor: string }>`
  background: linear-gradient(135deg, rgba(23, 23, 30, 0.95) 0%, rgba(30, 30, 40, 0.95) 100%);
  border: 2px solid ${props => props.primaryColor}40;
  border-radius: 20px;
  padding: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px);
    border-color: ${props => props.primaryColor};
    box-shadow: 0 20px 40px ${props => props.primaryColor}20;
  }
`;

const TeamHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const TeamLogoContainer = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }
`;

const TeamInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TeamName = styled.h3`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  line-height: 1.2;
  display: flex;
  align-items: center;
`;

const TeamFullName = styled.p`
  color: #d0d0d2;
  margin: 0 0 10px 0;
  font-size: 0.9rem;
`;

const TeamStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin: 20px 0;
`;

const StatBox = styled.div`
  text-align: center;
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
`;

const StatValue = styled.div`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  color: #d0d0d2;
  font-size: 0.8rem;
  text-transform: uppercase;
`;

const DriversSection = styled.div`
  margin-top: 20px;
`;

const DriverTag = styled.span<{ primaryColor: string }>`
  display: inline-block;
  background: ${props => props.primaryColor}20;
  color: ${props => props.primaryColor};
  padding: 8px 15px;
  border-radius: 20px;
  margin: 5px 10px 5px 0;
  font-size: 0.9rem;
  font-weight: 600;
`;

const TeamModal = styled(motion.div)`
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

const ModalContent = styled(motion.div)<{ primaryColor: string }>`
  background: linear-gradient(135deg, rgba(23, 23, 30, 0.98) 0%, rgba(30, 30, 40, 0.98) 100%);
  border: 2px solid ${props => props.primaryColor}60;
  border-radius: 20px;
  padding: 40px;
  max-width: 800px;
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

const TeamsPage = () => {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  const totalStats = {
    teams: teamsData.length,
    totalWins: teamsData.reduce((sum, team) => sum + team.stats.raceWins, 0),
    totalChampionships: teamsData.reduce((sum, team) => sum + team.championships.constructors, 0),
    totalPoints: teamsData.reduce((sum, team) => sum + team.stats.points, 0)
  };

  return (
    <PageWrapper>
      <Container>
        <GradientText>
          <h1 className="f1-title" style={{ fontSize: '3rem', fontFamily: 'Orbitron', textAlign: 'center', marginBottom: '20px' }}>
            F1 TEAMS 2025
          </h1>
        </GradientText>
        
        <StatsOverview>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#d0d0d2', marginBottom: '30px' }}>
            Complete overview of all Formula 1 teams competing in the 2025 season
          </p>
          <StatsContainer>
            <OverviewStat>
              <OverviewValue>{totalStats.teams}</OverviewValue>
              <OverviewLabel>Teams</OverviewLabel>
            </OverviewStat>
            <OverviewStat>
              <OverviewValue>{totalStats.totalWins}</OverviewValue>
              <OverviewLabel>Total Wins</OverviewLabel>
            </OverviewStat>
            <OverviewStat>
              <OverviewValue>{totalStats.totalChampionships}</OverviewValue>
              <OverviewLabel>Championships</OverviewLabel>
            </OverviewStat>
            <OverviewStat>
              <OverviewValue>{Math.round(totalStats.totalPoints / 1000)}K</OverviewValue>
              <OverviewLabel>Total Points</OverviewLabel>
            </OverviewStat>
          </StatsContainer>
        </StatsOverview>

        <TeamsGrid>
          {teamsData.map((team, index) => (
            <TeamCard
              key={team.id}
              primaryColor={getTeamColors(team.id).primary}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedTeam(team)}
            >
              <TeamHeader>
                <TeamLogoContainer>
                  <img
                    src={getTeamLogoPath(team.name)}
                    alt={`${team.name} logo`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transform: 'scale(1.5)',
                      borderRadius: '8px',
                    }}
                  />
                </TeamLogoContainer>
                <TeamInfo>
                  <TeamName>{team.name}</TeamName>
                  <TeamFullName>{team.fullName}</TeamFullName>
                  <div style={{ color: '#d0d0d2', fontSize: '0.9rem' }}>
                    {team.nationality} • Founded {team.founded}
                  </div>
                </TeamInfo>
              </TeamHeader>

              <TeamStats>
                <StatBox>
                  <StatValue>{team.championships.constructors}</StatValue>
                  <StatLabel>Constructors</StatLabel>
                </StatBox>
                <StatBox>
                  <StatValue>{team.stats.raceWins}</StatValue>
                  <StatLabel>Race Wins</StatLabel>
                </StatBox>
                <StatBox>
                  <StatValue>{team.stats.podiums}</StatValue>
                  <StatLabel>Podiums</StatLabel>
                </StatBox>
                <StatBox>
                  <StatValue>{team.stats.points}</StatValue>
                  <StatLabel>Points</StatLabel>
                </StatBox>
              </TeamStats>

              <DriversSection>
                <div style={{ color: '#d0d0d2', fontSize: '0.9rem', marginBottom: '10px' }}>
                  Current Drivers:
                </div>
                {team.drivers.map((driver) => (
                  <DriverTag key={driver} primaryColor={getTeamColors(team.id).primary}>
                    {driver}
                  </DriverTag>
                ))}
              </DriversSection>
            </TeamCard>
          ))}
        </TeamsGrid>

        <AnimatePresence>
          {selectedTeam && (
            <TeamModal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTeam(null)}
            >
              <ModalContent
                primaryColor={selectedTeam.primaryColor}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                style={{ position: 'relative' }}
              >
                <CloseButton onClick={() => setSelectedTeam(null)}>×</CloseButton>
                
                <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ 
                    width: '100px', 
                    height: '100px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '15px',
                    padding: '10px',
                    flexShrink: 0
                  }}>
                    <img
                      src={getTeamLogoPath(selectedTeam.name)}
                      alt={`${selectedTeam.name} logo`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: 'scale(1.5)',
                        borderRadius: '8px',
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <TeamName style={{ fontSize: '2.5rem' }}>{selectedTeam.name}</TeamName>
                    <TeamFullName style={{ fontSize: '1.1rem' }}>{selectedTeam.fullName}</TeamFullName>
                    <div style={{ color: '#d0d0d2', marginTop: '10px' }}>
                      <strong>Team Principal:</strong> {selectedTeam.teamPrincipal}<br/>
                      <strong>Base:</strong> {selectedTeam.base}<br/>
                      <strong>Founded:</strong> {selectedTeam.founded}
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <h3 style={{ color: '#fff', marginBottom: '15px' }}>About the Team</h3>
                  <p style={{ color: '#d0d0d2', lineHeight: '1.6' }}>{selectedTeam.description}</p>
                </div>

                <div style={{ marginBottom: '30px' }}>
                  <h3 style={{ color: '#fff', marginBottom: '15px' }}>Detailed Statistics</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
                    <StatBox>
                      <StatValue style={{ color: selectedTeam.primaryColor }}>
                        {selectedTeam.championships.constructors}
                      </StatValue>
                      <StatLabel>Constructors' Titles</StatLabel>
                    </StatBox>
                    <StatBox>
                      <StatValue style={{ color: selectedTeam.primaryColor }}>
                        {selectedTeam.championships.drivers}
                      </StatValue>
                      <StatLabel>Drivers' Titles</StatLabel>
                    </StatBox>
                    <StatBox>
                      <StatValue style={{ color: selectedTeam.primaryColor }}>
                        {selectedTeam.stats.raceWins}
                      </StatValue>
                      <StatLabel>Race Wins</StatLabel>
                    </StatBox>
                    <StatBox>
                      <StatValue style={{ color: selectedTeam.primaryColor }}>
                        {selectedTeam.stats.podiums}
                      </StatValue>
                      <StatLabel>Podiums</StatLabel>
                    </StatBox>
                    <StatBox>
                      <StatValue style={{ color: selectedTeam.primaryColor }}>
                        {selectedTeam.stats.poles}
                      </StatValue>
                      <StatLabel>Pole Positions</StatLabel>
                    </StatBox>
                    <StatBox>
                      <StatValue style={{ color: selectedTeam.primaryColor }}>
                        {selectedTeam.stats.fastestLaps}
                      </StatValue>
                      <StatLabel>Fastest Laps</StatLabel>
                    </StatBox>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h3 style={{ color: '#fff', marginBottom: '15px' }}>2025 Driver Lineup</h3>
                  {selectedTeam.drivers.map((driver) => (
                    <DriverTag key={driver} primaryColor={selectedTeam.primaryColor}>
                      {driver}
                    </DriverTag>
                  ))}
                </div>

                <div>
                  <h3 style={{ color: '#fff', marginBottom: '15px' }}>Follow the Team</h3>
                  <FlexContainer gap="15px">
                    {selectedTeam.social.twitter && (
                      <a 
                        href={`https://twitter.comhub/${selectedTeam.social.twitter.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: selectedTeam.primaryColor, textDecoration: 'none' }}
                      >
                        Twitter: {selectedTeam.social.twitter}
                      </a>
                    )}
                    {selectedTeam.social.instagram && (
                      <a 
                        href={`https://instagram.com/${selectedTeam.social.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: selectedTeam.primaryColor, textDecoration: 'none' }}
                      >
                        Instagram: {selectedTeam.social.instagram}
                      </a>
                    )}
                  </FlexContainer>
                </div>
              </ModalContent>
            </TeamModal>
          )}
        </AnimatePresence>
      </Container>
    </PageWrapper>
  );
};

export default TeamsPage;