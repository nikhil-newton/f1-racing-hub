import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, GradientText, F1Button } from '../styles/theme';
import { newsItems, NewsItem } from '../utils/searchEngine';

const PageWrapper = styled.div`
  margin-top: 80px;
  padding: 60px 0;
  min-height: calc(100vh - 80px);
`;

const NewsHeader = styled.section`
  background: ${props => props.theme.gradients.dark};
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 40px;
  
  .news-meta {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
    font-size: 0.9rem;
    color: ${props => props.theme.colors.lightGray};
    
    .news-date {
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.white};
      padding: 4px 12px;
      border-radius: 16px;
      font-weight: 600;
    }
    
    .news-category {
      background: ${props => props.theme.colors.gray};
      color: ${props => props.theme.colors.white};
      padding: 4px 12px;
      border-radius: 16px;
      text-transform: uppercase;
      font-weight: 600;
    }
  }
  
  h1 {
    font-family: ${props => props.theme.fonts.primary};
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 20px;
    line-height: 1.2;
  }
  
  .news-summary {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.lightGray};
    line-height: 1.6;
  }
`;

const NewsContent = styled.section`
  background: ${props => props.theme.gradients.dark};
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 40px;
  
  .content-section {
    margin-bottom: 30px;
    
    h2 {
      font-family: ${props => props.theme.fonts.primary};
      font-size: 1.5rem;
      margin-bottom: 15px;
      color: ${props => props.theme.colors.primary};
    }
    
    p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: ${props => props.theme.colors.lightGray};
      margin-bottom: 15px;
    }
    
    ul {
      list-style: none;
      padding-left: 0;
      
      li {
        position: relative;
        padding-left: 25px;
        margin-bottom: 10px;
        color: ${props => props.theme.colors.lightGray};
        
        &::before {
          content: '🏎️';
          position: absolute;
          left: 0;
        }
      }
    }
  }
`;

const RelatedLinks = styled.section`
  background: ${props => props.theme.gradients.dark};
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  
  h2 {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
  
  .links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 30px;
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

const NewsDetailPage = () => {
  const { newsId } = useParams<{ newsId: string }>();
  const navigate = useNavigate();
  
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);

  useEffect(() => {
    if (newsId) {
      const foundNews = newsItems.find(item => item.id === parseInt(newsId));
      setNewsItem(foundNews || null);
    }
  }, [newsId]);

  const getDetailedContent = (item: NewsItem) => {
    switch (item.category) {
      case 'regulations':
        return {
          sections: [
            {
              title: 'Key Changes',
              content: 'The FIA has announced several significant changes to the technical regulations for the upcoming season, focusing on aerodynamics, power unit specifications, and safety improvements.'
            },
            {
              title: 'Impact on Teams',
              content: 'These regulation changes will require teams to redesign key components of their cars, potentially reshuffling the competitive order for the new season.'
            },
            {
              title: 'Driver Reactions',
              content: 'Several drivers have expressed their opinions on the new regulations, with many welcoming the changes that promise closer racing and improved safety.'
            }
          ]
        };
      case 'transfers':
        return {
          sections: [
            {
              title: 'Latest Moves',
              content: 'The driver transfer market has been particularly active this season, with several high-profile moves confirmed and others still under negotiation.'
            },
            {
              title: 'Contract Negotiations',
              content: 'Teams are working to secure their preferred driver lineups, with some surprising developments in the works that could reshape the grid.'
            }
          ]
        };
      case 'safety':
        return {
          sections: [
            {
              title: 'Circuit Improvements',
              content: 'Major safety upgrades are being implemented across multiple circuits, including enhanced barrier systems and improved run-off areas.'
            },
            {
              title: 'New Safety Protocols',
              content: 'The FIA has introduced additional safety protocols and procedures to further protect drivers, marshals, and spectators.'
            }
          ]
        };
      default:
        return {
          sections: [
            {
              title: 'Full Story',
              content: 'This is developing news in the Formula 1 world. Stay tuned for more updates as this story unfolds.'
            }
          ]
        };
    }
  };

  if (!newsItem) {
    return (
      <PageWrapper>
        <Container>
          <BackButton onClick={() => navigate('/')}>
            ← Back to Home
          </BackButton>
          
          <NotFound>
            <GradientText>
              <h1>News Article Not Found</h1>
            </GradientText>
            <p>The news article you're looking for doesn't exist or has been removed.</p>
            <F1Button onClick={() => navigate('/')}>
              Back to Home
            </F1Button>
          </NotFound>
        </Container>
      </PageWrapper>
    );
  }

  const content = getDetailedContent(newsItem);

  return (
    <PageWrapper>
      <Container>
        <BackButton onClick={() => navigate('/')}>
          ← Back to Home
        </BackButton>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <NewsHeader>
            <div className="news-meta">
              <span className="news-date">{newsItem.date}</span>
              {newsItem.category && (
                <span className="news-category">{newsItem.category}</span>
              )}
            </div>
            
            <GradientText>
              <h1>{newsItem.title}</h1>
            </GradientText>
            
            <p className="news-summary">{newsItem.summary}</p>
          </NewsHeader>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <NewsContent>
            {content.sections.map((section, index) => (
              <div key={index} className="content-section">
                <GradientText>
                  <h2>{section.title}</h2>
                </GradientText>
                <p>{section.content}</p>
              </div>
            ))}
          </NewsContent>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <RelatedLinks>
            <GradientText>
              <h2>Explore More F1 Content</h2>
            </GradientText>
            <div className="links-grid">
              <F1Button onClick={() => navigate('/drivers')}>
                View Drivers
              </F1Button>
              <F1Button onClick={() => navigate('/teams')} variant="outline">
                View Teams
              </F1Button>
              <F1Button onClick={() => navigate('/calendar')} variant="outline">
                Race Calendar
              </F1Button>
            </div>
          </RelatedLinks>
        </motion.div>
      </Container>
    </PageWrapper>
  );
};

export default NewsDetailPage;