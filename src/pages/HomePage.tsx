import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Container, FlexContainer, F1Button, F1Card, GradientText } from '../styles/theme';
import { newsItems } from '../utils/searchEngine';

const PageWrapper = styled.div`
  margin-top: 80px; // Account for fixed navbar
`;

const HeroSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.black} 0%,
    ${props => props.theme.colors.gray} 50%,
    ${props => props.theme.colors.black} 100%
  );
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 2px,
        rgba(225, 6, 0, 0.1) 2px,
        rgba(225, 6, 0, 0.1) 4px
      ),
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(225, 6, 0, 0.05) 2px,
        rgba(225, 6, 0, 0.05) 4px
      );
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  z-index: 2;
  position: relative;
`;

const HeroTitle = styled(motion.h1)`
  font-family: ${props => props.theme.fonts.primary};
  font-size: clamp(3rem, 8vw, 8rem);
  font-weight: 900;
  margin-bottom: 20px;
  text-shadow: 0 0 30px rgba(225, 6, 0, 0.5);
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 3vw, 2rem);
  margin-bottom: 40px;
  color: ${props => props.theme.colors.lightGray};
  max-width: 600px;
`;

const F1CarAnimation = styled(motion.div)`
  position: absolute;
  right: -200px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 150px;
  z-index: 1;
  opacity: 0.3;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const StatsSection = styled.section`
  padding: 100px 0;
  background: ${props => props.theme.colors.black};
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 40px 20px;
  
  h3 {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 10px;
  }
  
  p {
    color: ${props => props.theme.colors.lightGray};
    font-size: 1.1rem;
  }
`;

const FeaturesSection = styled.section`
  padding: 100px 0;
  background: ${props => props.theme.gradients.dark};
`;

const FeatureCard = styled(F1Card)`
  text-align: center;
  
  .icon {
    font-size: 3rem;
    margin-bottom: 20px;
    display: block;
  }
  
  h3 {
    margin-bottom: 15px;
    color: ${props => props.theme.colors.primary};
  }
  
  p {
    color: ${props => props.theme.colors.lightGray};
    margin-bottom: 25px;
  }
`;

const NewsSection = styled.section`
  padding: 100px 0;
  background: ${props => props.theme.colors.black};
`;

const NewsCard = styled(F1Card)`
  .news-image {
    width: 100%;
    height: 200px;
    background: ${props => props.theme.colors.gray};
    border-radius: 8px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.lightGray};
  }
  
  .news-date {
    color: ${props => props.theme.colors.primary};
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
  
  h4 {
    margin-bottom: 15px;
    color: ${props => props.theme.colors.white};
  }
  
  p {
    color: ${props => props.theme.colors.lightGray};
    line-height: 1.6;
  }
`;

const HomePage = () => {
  const navigate = useNavigate();
  const [animatedStats, setAnimatedStats] = useState({
    drivers: 0,
    teams: 0,
    races: 0,
    fans: 0
  });

  useEffect(() => {
    const animateStats = () => {
      const targetStats = { drivers: 20, teams: 10, races: 23, fans: 500 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedStats({
          drivers: Math.round(targetStats.drivers * progress),
          teams: Math.round(targetStats.teams * progress),
          races: Math.round(targetStats.races * progress),
          fans: Math.round(targetStats.fans * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    const timeout = setTimeout(animateStats, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const features = [
    {
      icon: '🏎️',
      title: 'Driver Profiles',
      description: 'Comprehensive profiles of all F1 drivers with stats, photos, and career highlights.',
      link: '/drivers'
    },
    {
      icon: '🏁',
      title: 'Team Pages',
      description: 'Detailed team information, car galleries, and historical data.',
      link: '/teams'
    },
    {
      icon: '📅',
      title: 'Race Calendar',
      description: 'Complete race schedule with results, standings, and circuit information.',
      link: '/calendar'
    },
    {
      icon: '📊',
      title: 'Statistics',
      description: 'Interactive charts and data visualization for F1 analytics.',
      link: '/statistics'
    }
  ];

  // Handle Read More functionality
  const handleReadMore = (newsItem: typeof newsItems[0]) => {
    if (newsItem.externalUrl) {
      // Navigate to external website
      window.open(newsItem.externalUrl, '_blank', 'noopener,noreferrer');
    } else {
      // Navigate to internal news page or related section
      switch (newsItem.category) {
        case 'transfers':
          navigate('/drivers');
          break;
        case 'safety':
          navigate('/calendar');
          break;
        case 'regulations':
          navigate('/teams');
          break;
        default:
          // If no specific category, try to create a news detail page
          navigate(`/news/${newsItem.id}`);
      }
    }
  };

  return (
    <PageWrapper>
      <HeroSection>
        <Container>
          <FlexContainer align="center" justify="space-between">
            <HeroContent>
              <HeroTitle
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <GradientText>F1</GradientText> Racing Hub
              </HeroTitle>
              
              <HeroSubtitle
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Your ultimate Formula 1 destination for drivers, teams, races, and everything F1.
              </HeroSubtitle>
              
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <FlexContainer gap="20px" wrap>
                  <F1Button as={Link} to="/drivers" size="large">
                    Explore Drivers
                  </F1Button>
                  <F1Button as={Link} to="/teams" variant="outline" size="large">
                    View Teams
                  </F1Button>
                </FlexContainer>
              </motion.div>
            </HeroContent>

            <F1CarAnimation
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 0.3 }}
              transition={{ duration: 2, delay: 1 }}
            >
              🏎️
            </F1CarAnimation>
          </FlexContainer>
        </Container>
      </HeroSection>

      <StatsSection>
        <Container>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <FlexContainer justify="center" style={{ marginBottom: '60px' }}>
              <GradientText>
                <h2 style={{ fontSize: '3rem', fontFamily: 'Orbitron' }}>F1 BY THE NUMBERS</h2>
              </GradientText>
            </FlexContainer>
            
            <FlexContainer justify="space-around" wrap>
              <StatCard>
                <GradientText>
                  <h3 className="f1-red-text">{animatedStats.drivers}</h3>
                </GradientText>
                <p>Active Drivers</p>
              </StatCard>
              
              <StatCard>
                <GradientText>
                  <h3 className="f1-red-text">{animatedStats.teams}</h3>
                </GradientText>
                <p>Racing Teams</p>
              </StatCard>
              
              <StatCard>
                <GradientText>
                  <h3 className="f1-red-text">{animatedStats.races}</h3>
                </GradientText>
                <p>Races per Season</p>
              </StatCard>
              
              <StatCard>
                <GradientText>
                  <h3 className="f1-red-text">{animatedStats.fans}M+</h3>
                </GradientText>
                <p>Global Fans</p>
              </StatCard>
            </FlexContainer>
          </motion.div>
        </Container>
      </StatsSection>

      <FeaturesSection>
        <Container>
          <FlexContainer justify="center" style={{ marginBottom: '60px' }}>
            <GradientText>
              <h2 style={{ fontSize: '3rem', fontFamily: 'Orbitron' }}>EXPLORE F1 HUB</h2>
            </GradientText>
          </FlexContainer>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px' 
          }}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureCard hover>
                  <span className="icon">{feature.icon}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <F1Button as={Link} to={feature.link}>
                    Learn More
                  </F1Button>
                </FeatureCard>
              </motion.div>
            ))}
          </div>
        </Container>
      </FeaturesSection>

      <NewsSection>
        <Container>
          <FlexContainer justify="center" style={{ marginBottom: '60px' }}>
            <GradientText>
              <h2 style={{ fontSize: '3rem', fontFamily: 'Orbitron' }}>LATEST NEWS</h2>
            </GradientText>
          </FlexContainer>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '30px' 
          }}>
            {newsItems.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <NewsCard hover>
                  <div className="news-image">📰 News Image</div>
                  <div className="news-date">{news.date}</div>
                  <h4>{news.title}</h4>
                  <p>{news.summary}</p>
                  <F1Button 
                    size="small" 
                    onClick={() => handleReadMore(news)}
                    title={news.externalUrl ? 'Read more on external site' : 'View related content'}
                  >
                    Read More {news.externalUrl ? '↗' : '→'}
                  </F1Button>
                </NewsCard>
              </motion.div>
            ))}
          </div>
        </Container>
      </NewsSection>
    </PageWrapper>
  );
};

export default HomePage;