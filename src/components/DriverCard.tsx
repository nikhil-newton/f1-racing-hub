import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Driver } from '../types';
import { F1Card, F1Button, GradientText } from '../styles/theme';


const DriverCard = styled(F1Card)`
  position: relative;
  overflow: hidden;
  
  .driver-image {
    width: 100%;
    height: 250px;
    background: ${props => props.theme.gradients.dark};
    border-radius: 8px;
    margin-bottom: 20px;
    overflow: hidden;
    position: relative;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    
    .driver-number {
      position: absolute;
      top: 10px;
      right: 10px;
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.white};
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: ${props => props.theme.fonts.primary};
      font-weight: 900;
      font-size: 18px;
    }
    
    .team-badge {
      position: absolute;
      bottom: 10px;
      left: 10px;
      background: rgba(0, 0, 0, 0.9);
      color: ${props => props.theme.colors.white};
      padding: 8px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
  }
  
  .driver-info {
    h3 {
      font-family: ${props => props.theme.fonts.primary};
      font-size: 1.4rem;
      margin-bottom: 10px;
      text-transform: uppercase;
    }
    
    .nationality {
      color: ${props => props.theme.colors.lightGray};
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      gap: 8px;
      
      .flag {
        font-size: 1.2rem;
      }
    }
    
    .stats {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
      margin: 20px 0;
      
      .stat {
        text-align: center;
        
        .value {
          font-family: ${props => props.theme.fonts.primary};
          font-size: 1.8rem;
          font-weight: 900;
          color: ${props => props.theme.colors.primary};
        }
        
        .label {
          font-size: 0.8rem;
          color: ${props => props.theme.colors.lightGray};
          text-transform: uppercase;
        }
      }
    }
    
    .biography {
      color: ${props => props.theme.colors.lightGray};
      line-height: 1.6;
      margin-bottom: 20px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    .social-links {
      display: flex;
      gap: 10px;
      margin-top: 15px;
      
      a {
        width: 35px;
        height: 35px;
        background: ${props => props.theme.colors.gray};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme.colors.white};
        text-decoration: none;
        transition: all 0.3s ease;
        
        &:hover {
          background: ${props => props.theme.colors.primary};
          transform: translateY(-2px);
        }
      }
    }
  }
  
  &:hover {
    .driver-image img {
      transform: scale(1.05);
    }
  }
`;

interface DriverCardComponentProps {
  driver: Driver;
  index: number;
  onViewDetails: (driver: Driver) => void;
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

const DriverCardComponent: React.FC<DriverCardComponentProps> = ({ driver, index }) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/drivers/${driver.id}`);
  };

  const handleExternalLink = (url: string, event: React.MouseEvent) => {
    event.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <DriverCard hover>
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
          <div className="team-badge">
            {driver.team}
          </div>
        </div>
        
        <div className="driver-info">
          <GradientText>
            <h3>{driver.name}</h3>
          </GradientText>
          
          <div className="nationality">
            <span className="flag">{getFlagEmoji(driver.nationality)}</span>
            {driver.nationality}
          </div>
          
          <div className="stats">
            <div className="stat">
              <div className="value">{driver.raceWins}</div>
              <div className="label">Wins</div>
            </div>
            <div className="stat">
              <div className="value">{driver.podiums}</div>
              <div className="label">Podiums</div>
            </div>
            <div className="stat">
              <div className="value">{driver.championships}</div>
              <div className="label">Championships</div>
            </div>
            <div className="stat">
              <div className="value">{driver.points}</div>
              <div className="label">Points</div>
            </div>
          </div>
          
          <p className="biography">{driver.biography}</p>
          
          <F1Button 
            onClick={handleViewProfile}
            style={{ width: '100%', marginBottom: '15px' }}
          >
            View Full Profile
          </F1Button>
          
          <div className="social-links">
            {driver.socialMedia.twitter && (
              <a 
                href={`https://twitter.com/${driver.socialMedia.twitter.replace('@', '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (driver.socialMedia.twitter) {
                    handleExternalLink(`https://twitter.com/${driver.socialMedia.twitter.replace('@', '')}`, e);
                  }
                }}
                title="Follow on Twitter"
              >
                📱
              </a>
            )}
            {driver.socialMedia.instagram && (
              <a 
                href={`https://instagram.com/${driver.socialMedia.instagram.replace('@', '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (driver.socialMedia.instagram) {
                    handleExternalLink(`https://instagram.com/${driver.socialMedia.instagram.replace('@', '')}`, e);
                  }
                }}
                title="Follow on Instagram"
              >
                📷
              </a>
            )}
          </div>
        </div>
      </DriverCard>
    </motion.div>
  );
};

export default DriverCardComponent;