import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, GradientText, F1Button } from '../styles/theme';
import { driversData } from '../data/drivers';
import { Driver } from '../types';

const PageWrapper = styled.div`
  margin-top: 80px;
  padding: 60px 0;
  min-height: calc(100vh - 80px);
`;

const DriverHeader = styled.section`
  background: ${props => props.theme.gradients.dark};
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 40px;
  
  .driver-main-info {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 40px;
    align-items: start;
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      grid-template-columns: 1fr;
      text-align: center;
    }
    
    .driver-image {
      width: 300px;
      height: 350px;
      border-radius: 12px;
      overflow: hidden;
      position: relative;
      
      @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        margin: 0 auto;
      }
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      .driver-number {
        position: absolute;
        top: 15px;
        right: 15px;
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: ${props => props.theme.fonts.primary};
        font-weight: 900;
        font-size: 28px;
      }
    }
    
    .driver-details {
      h1 {
        font-family: ${props => props.theme.fonts.primary};
        font-size: clamp(2.5rem, 5vw, 4rem);
        margin-bottom: 10px;
        text-transform: uppercase;
      }
      
      .team-info {
        font-size: 1.6rem;
        color: ${props => props.theme.colors.primary};
        font-weight: 700;
        margin-bottom: 30px;
      }
      
      .personal-info {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        margin-bottom: 30px;
        
        .info-item {
          .label {
            font-size: 0.9rem;
            color: ${props => props.theme.colors.lightGray};
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 5px;
          }
          
          .value {
            font-size: 1.2rem;
            font-weight: 600;
          }
        }
      }
      
      .action-buttons {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
        
        @media (max-width: ${props => props.theme.breakpoints.tablet}) {
          justify-content: center;
        }
      }
    }
  }
`;

const StatsSection = styled.section`
  background: ${props => props.theme.gradients.dark};
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 40px;
  
  h2 {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 2rem;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    
    .stat-item {
      text-align: center;
      
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

const BiographySection = styled.section`
  background: ${props => props.theme.gradients.dark};
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 40px;
  
  h2 {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 2rem;
    margin-bottom: 30px;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${props => props.theme.colors.lightGray};
  }
`;

const SocialSection = styled.section`
  background: ${props => props.theme.gradients.dark};
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  
  h2 {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 2rem;
    margin-bottom: 30px;
  }
  
  .social-links {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    
    a {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 15px 25px;
      background: ${props => props.theme.colors.gray};
      border-radius: 8px;
      color: ${props => props.theme.colors.white};
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      
      &:hover {
        background: ${props => props.theme.colors.primary};
        transform: translateY(-2px);
      }
      
      .icon {
        font-size: 1.5rem;
      }
    }
  }
`;

const BackButton = styled(F1Button)`
  margin-bottom: 30px;
`;

const NotFound = styled.div`
  text-align: center;
  padding: 100px 20px;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.lightGray};
    margin-bottom: 30px;
  }
`;

const getFlagEmoji = (nationality: string): string => {
  const flags: { [key: string]: string } = {
    'Dutch': '🇳🇱',
    'Mexican': '🇲🇽',
    'Monégasque': '🇲🇨',
    'Spanish': '🇪🇸',
    'British': '🇬🇧',
    'Australian': '🇦🇺',
    'Canadian': '🇨🇦',
    'French': '🇫🇷',
    'Thai': '🇹🇭',
    'American': '🇺🇸',
    'Japanese': '🇯🇵',
    'German': '🇩🇪',
    'Danish': '🇩🇰',
    'Finnish': '🇫🇮',
    'Chinese': '🇨🇳',
    'Italian': '🇮🇹',
    'New Zealand': '🇳🇿',
    'Brazilian': '🇧🇷'
  };
  return flags[nationality] || '🏁';
};

const DriverDetailPage = () => {
  const { driverId } = useParams<{ driverId: string }>();
  const navigate = useNavigate();
  
  const [driver, setDriver] = useState<Driver | null>(null);

  useEffect(() => {
    if (driverId) {
      const foundDriver = driversData.find(d => d.id === driverId);
      setDriver(foundDriver || null);
    }
  }, [driverId]);

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleF1Website = () => {
    if (driver) {
      // Navigate to official F1 driver page
      const driverSlug = driver.name.toLowerCase().replace(' ', '-');
      handleExternalLink(`https://www.formula1.com/en/drivers/${driverSlug}.html`);
    }
  };

  const handleWikipedia = () => {
    if (driver) {
      // Navigate to Wikipedia page
      const driverName = driver.name.replace(' ', '_');
      handleExternalLink(`https://en.wikipedia.org/wiki/${driverName}`);
    }
  };

  if (!driver) {
    return (
      <PageWrapper>
        <Container>
          <BackButton onClick={() => navigate('/drivers')}>
            ← Back to Drivers
          </BackButton>
          
          <NotFound>
            <GradientText>
              <h1>Driver Not Found</h1>
            </GradientText>
            <p>The driver you're looking for doesn't exist or has been removed.</p>
            <F1Button onClick={() => navigate('/drivers')}>
              View All Drivers
            </F1Button>
          </NotFound>
        </Container>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Container>
        <BackButton onClick={() => navigate('/drivers')}>
          ← Back to Drivers
        </BackButton>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <DriverHeader>
            <div className="driver-main-info">
              <div className="driver-image">
                <img 
                  src={driver.image} 
                  alt={driver.name}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/300x350/15151e/ffffff?text=' + driver.firstName;
                  }}
                />
                <div className="driver-number">{driver.number}</div>
              </div>
              
              <div className="driver-details">
                <GradientText>
                  <h1>{driver.name}</h1>
                </GradientText>
                
                <div className="team-info">{driver.team}</div>
                
                <div className="personal-info">
                  <div className="info-item">
                    <div className="label">Nationality</div>
                    <div className="value">
                      {getFlagEmoji(driver.nationality)} {driver.nationality}
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="label">Date of Birth</div>
                    <div className="value">{new Date(driver.dateOfBirth).toLocaleDateString()}</div>
                  </div>
                  <div className="info-item">
                    <div className="label">Place of Birth</div>
                    <div className="value">{driver.placeOfBirth}</div>
                  </div>
                  <div className="info-item">
                    <div className="label">Driver Number</div>
                    <div className="value">#{driver.number}</div>
                  </div>
                </div>
                
                <div className="action-buttons">
                  <F1Button onClick={handleF1Website}>
                    Official F1 Profile
                  </F1Button>
                  <F1Button variant="outline" onClick={handleWikipedia}>
                    Wikipedia
                  </F1Button>
                </div>
              </div>
            </div>
          </DriverHeader>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <StatsSection>
            <GradientText>
              <h2>Career Statistics</h2>
            </GradientText>
            <div className="stats-grid">
              <div className="stat-item">
                <GradientText>
                  <div className="stat-number">{driver.raceWins}</div>
                </GradientText>
                <div className="stat-label">Race Wins</div>
              </div>
              <div className="stat-item">
                <GradientText>
                  <div className="stat-number">{driver.podiums}</div>
                </GradientText>
                <div className="stat-label">Podiums</div>
              </div>
              <div className="stat-item">
                <GradientText>
                  <div className="stat-number">{driver.championships}</div>
                </GradientText>
                <div className="stat-label">Championships</div>
              </div>
              <div className="stat-item">
                <GradientText>
                  <div className="stat-number">{driver.points}</div>
                </GradientText>
                <div className="stat-label">Career Points</div>
              </div>
            </div>
          </StatsSection>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <BiographySection>
            <GradientText>
              <h2>Biography</h2>
            </GradientText>
            <p>{driver.biography}</p>
          </BiographySection>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <SocialSection>
            <GradientText>
              <h2>Follow {driver.firstName}</h2>
            </GradientText>
            <div className="social-links">
              {driver.socialMedia.twitter && (
                <a 
                  href={`https://twitter.com/${driver.socialMedia.twitter.replace('@', '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className="icon">🐦</span>
                  Twitter
                </a>
              )}
              {driver.socialMedia.instagram && (
                <a 
                  href={`https://instagram.com/${driver.socialMedia.instagram.replace('@', '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className="icon">📷</span>
                  Instagram
                </a>
              )}
            </div>
          </SocialSection>
        </motion.div>
      </Container>
    </PageWrapper>
  );
};

export default DriverDetailPage;