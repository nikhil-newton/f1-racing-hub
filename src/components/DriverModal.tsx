import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Driver } from '../types';
import { GradientText } from '../styles/theme';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
`;

const ModalContent = styled(motion.div)`
  background: ${props => props.theme.gradients.dark};
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 12px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.gray};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 4px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: ${props => props.theme.colors.gray};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: ${props => props.theme.colors.white};
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1;
  
  &:hover {
    background: ${props => props.theme.colors.primary};
  }
`;

const DriverHeader = styled.div`
  position: relative;
  padding: 40px;
  background: linear-gradient(135deg, rgba(225, 6, 0, 0.1) 0%, rgba(56, 56, 63, 0.1) 100%);
  
  .driver-main-info {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 30px;
    align-items: start;
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      grid-template-columns: 1fr;
      text-align: center;
    }
    
    .driver-image {
      width: 200px;
      height: 250px;
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
        top: 10px;
        right: 10px;
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: ${props => props.theme.fonts.primary};
        font-weight: 900;
        font-size: 24px;
      }
    }
    
    .driver-details {
      h1 {
        font-family: ${props => props.theme.fonts.primary};
        font-size: clamp(2rem, 4vw, 3rem);
        margin-bottom: 10px;
      }
      
      .team-info {
        font-size: 1.4rem;
        color: ${props => props.theme.colors.primary};
        font-weight: 700;
        margin-bottom: 20px;
      }
      
      .personal-info {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
        margin-bottom: 20px;
        
        .info-item {
          .label {
            font-size: 0.9rem;
            color: ${props => props.theme.colors.lightGray};
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          .value {
            font-size: 1.1rem;
            font-weight: 600;
            margin-top: 5px;
          }
        }
      }
    }
  }
`;

const StatsSection = styled.div`
  padding: 0 40px 40px 40px;
  
  h2 {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 2rem;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
    
    .stat-card {
      background: rgba(56, 56, 63, 0.3);
      border: 1px solid ${props => props.theme.colors.gray};
      border-radius: 8px;
      padding: 30px 20px;
      text-align: center;
      transition: all 0.3s ease;
      
      &:hover {
        border-color: ${props => props.theme.colors.primary};
        transform: translateY(-5px);
      }
      
      .stat-value {
        font-family: ${props => props.theme.fonts.primary};
        font-size: 3rem;
        font-weight: 900;
        margin-bottom: 10px;
      }
      
      .stat-label {
        color: ${props => props.theme.colors.lightGray};
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.9rem;
      }
    }
  }
`;

const BiographySection = styled.div`
  padding: 0 40px 40px 40px;
  
  h2 {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  p {
    color: ${props => props.theme.colors.lightGray};
    line-height: 1.8;
    font-size: 1.1rem;
  }
`;

const SocialSection = styled.div`
  padding: 0 40px 40px 40px;
  
  h2 {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .social-links {
    display: flex;
    gap: 20px;
    justify-content: center;
    
    a {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 15px 25px;
      background: ${props => props.theme.colors.gray};
      border-radius: 25px;
      color: ${props => props.theme.colors.white};
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      
      &:hover {
        background: ${props => props.theme.colors.primary};
        transform: translateY(-2px);
      }
      
      .icon {
        font-size: 1.2rem;
      }
    }
  }
`;

interface DriverModalProps {
  driver: Driver | null;
  isOpen: boolean;
  onClose: () => void;
}

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

const DriverModal: React.FC<DriverModalProps> = ({ driver, isOpen, onClose }) => {
  if (!driver) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateAge = (dateString: string) => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

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
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={onClose}>✕</CloseButton>
            
            <DriverHeader>
              <div className="driver-main-info">
                <div className="driver-image">
                  <img 
                    src={driver.image} 
                    alt={driver.name}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/300x250/15151e/ffffff?text=' + driver.firstName;
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
                      <div className="value">{formatDate(driver.dateOfBirth)}</div>
                    </div>
                    
                    <div className="info-item">
                      <div className="label">Age</div>
                      <div className="value">{calculateAge(driver.dateOfBirth)} years</div>
                    </div>
                    
                    <div className="info-item">
                      <div className="label">Place of Birth</div>
                      <div className="value">{driver.placeOfBirth}</div>
                    </div>
                  </div>
                </div>
              </div>
            </DriverHeader>
            
            <StatsSection>
              <GradientText>
                <h2>CAREER STATISTICS</h2>
              </GradientText>
              
              <div className="stats-grid">
                <div className="stat-card">
                  <GradientText>
                    <div className="stat-value">{driver.championships}</div>
                  </GradientText>
                  <div className="stat-label">World Championships</div>
                </div>
                
                <div className="stat-card">
                  <GradientText>
                    <div className="stat-value">{driver.raceWins}</div>
                  </GradientText>
                  <div className="stat-label">Race Wins</div>
                </div>
                
                <div className="stat-card">
                  <GradientText>
                    <div className="stat-value">{driver.podiums}</div>
                  </GradientText>
                  <div className="stat-label">Podium Finishes</div>
                </div>
                
                <div className="stat-card">
                  <GradientText>
                    <div className="stat-value">{driver.points}</div>
                  </GradientText>
                  <div className="stat-label">Career Points</div>
                </div>
              </div>
            </StatsSection>
            
            <BiographySection>
              <GradientText>
                <h2>BIOGRAPHY</h2>
              </GradientText>
              <p>{driver.biography}</p>
            </BiographySection>
            
            {(driver.socialMedia.twitter || driver.socialMedia.instagram) && (
              <SocialSection>
                <GradientText>
                  <h2>FOLLOW {driver.firstName.toUpperCase()}</h2>
                </GradientText>
                
                <div className="social-links">
                  {driver.socialMedia.twitter && (
                    <a 
                      href={`https://twitter.com/${driver.socialMedia.twitter.replace('@', '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <span className="icon">📱</span>
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
            )}
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default DriverModal;