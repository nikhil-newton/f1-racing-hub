import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, GradientText, FlexContainer } from '../styles/theme';

const PageWrapper = styled.div`
  margin-top: 80px;
  padding: 60px 0;
  min-height: calc(100vh - 80px);
`;

const ForumLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const MainContent = styled.div``;

const Sidebar = styled.div`
  @media (max-width: 1024px) {
    order: -1;
  }
`;

const CategoryGrid = styled.div`
  display: grid;
  gap: 20px;
  margin-bottom: 30px;
`;

const CategoryCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(23, 23, 30, 0.95) 0%, rgba(30, 30, 40, 0.95) 100%);
  border: 2px solid #e1060030;
  border-radius: 15px;
  padding: 25px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #e10600;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px #e1060020;
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const CategoryIcon = styled.div`
  font-size: 2rem;
  margin-right: 15px;
`;

const CategoryInfo = styled.div`
  flex: 1;
`;

const CategoryName = styled.h3`
  color: #fff;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.4rem;
  margin: 0 0 5px 0;
`;

const CategoryDesc = styled.p`
  color: #d0d0d2;
  font-size: 0.9rem;
  margin: 0;
`;

const CategoryStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-top: 15px;
`;

const StatBox = styled.div`
  text-align: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
`;

const StatValue = styled.div`
  color: #e10600;
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
`;

const StatLabel = styled.div`
  color: #d0d0d2;
  font-size: 0.7rem;
  text-transform: uppercase;
  margin-top: 2px;
`;

const PostsSection = styled.div`
  margin-top: 20px;
`;

const PostCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(23, 23, 30, 0.95) 0%, rgba(30, 30, 40, 0.95) 100%);
  border-left: 4px solid #e10600;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 20px #e1060010;
  }
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const PostTitle = styled.h4`
  color: #fff;
  font-size: 1.1rem;
  margin: 0;
  flex: 1;
`;

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: #d0d0d2;
  font-size: 0.8rem;
`;

const PostPreview = styled.p`
  color: #d0d0d2;
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 10px 0 0 0;
`;

const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e10600, #ff4757);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 0.8rem;
`;

const SidebarCard = styled.div`
  background: linear-gradient(135deg, rgba(23, 23, 30, 0.95) 0%, rgba(30, 30, 40, 0.95) 100%);
  border: 2px solid #e1060030;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
`;

const SidebarTitle = styled.h3`
  color: #fff;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.2rem;
  margin: 0 0 15px 0;
`;

const TrendingTopic = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`;

const TopicNumber = styled.div`
  color: #e10600;
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  margin-right: 15px;
  min-width: 20px;
`;

const TopicInfo = styled.div`
  flex: 1;
`;

const TopicTitle = styled.div`
  color: #fff;
  font-size: 0.9rem;
  margin-bottom: 3px;
`;

const TopicCount = styled.div`
  color: #d0d0d2;
  font-size: 0.8rem;
`;

interface ForumCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  topics: number;
  posts: number;
  online: number;
}

interface ForumPost {
  id: string;
  title: string;
  preview: string;
  author: string;
  category: string;
  replies: number;
  views: number;
  lastActivity: string;
}

const forumCategories: ForumCategory[] = [
  {
    id: 'general',
    name: 'General F1 Discussion',
    description: 'Talk about everything Formula 1 related',
    icon: '🏁',
    topics: 1247,
    posts: 15683,
    online: 234
  },
  {
    id: 'race-weekend',
    name: 'Race Weekend Discussion',
    description: 'Live discussions during race weekends',
    icon: '🏎️',
    topics: 892,
    posts: 12457,
    online: 189
  },
  {
    id: 'drivers',
    name: 'Driver Talk',
    description: 'Discuss your favorite drivers and their performances',
    icon: '👨‍🏎️',
    topics: 1056,
    posts: 9234,
    online: 167
  },
  {
    id: 'teams',
    name: 'Team Analysis',
    description: 'Team strategies, updates, and technical discussions',
    icon: '🏆',
    topics: 734,
    posts: 8901,
    online: 145
  },
  {
    id: 'technical',
    name: 'Technical Discussion',
    description: 'Deep dive into F1 technology and regulations',
    icon: '🔧',
    topics: 567,
    posts: 6789,
    online: 98
  },
  {
    id: 'predictions',
    name: 'Predictions & Fantasy',
    description: 'Make predictions and discuss fantasy F1',
    icon: '🔮',
    topics: 423,
    posts: 5432,
    online: 76
  }
];

const recentPosts: ForumPost[] = [
  {
    id: '1',
    title: 'Max Verstappen\'s dominant 2025 season - Is anyone going to challenge him?',
    preview: 'With Verstappen winning the first 4 races of 2025, it looks like another dominant season. Can Ferrari with Hamilton mount a challenge?',
    author: 'F1Fanatic2025',
    category: 'General F1 Discussion',
    replies: 47,
    views: 892,
    lastActivity: '2 hours ago'
  },
  {
    id: '2',
    title: 'Kimi Antonelli\'s Mercedes debut - Impressive or overhyped?',
    preview: 'The young Italian has shown flashes of brilliance but also made rookie mistakes. What do you think of his performance so far?',
    author: 'MercedesWatcher',
    category: 'Driver Talk',
    replies: 31,
    views: 567,
    lastActivity: '4 hours ago'
  },
  {
    id: '3',
    title: 'Technical Analysis: 2025 Car Regulations Impact',
    preview: 'How have the new regulations affected car performance? Let\'s discuss the technical changes and their impact on racing.',
    author: 'TechGuru_F1',
    category: 'Technical Discussion',
    replies: 23,
    views: 445,
    lastActivity: '6 hours ago'
  },
  {
    id: '4',
    title: 'Lewis Hamilton at Ferrari - Living up to expectations?',
    preview: 'Hamilton\'s move to Ferrari was the biggest story of 2025. How has he adapted to the new team?',
    author: 'FerrariTifosi',
    category: 'Driver Talk',
    replies: 89,
    views: 1234,
    lastActivity: '8 hours ago'
  },
  {
    id: '5',
    title: 'Monaco GP 2025 - Will we finally see an exciting race?',
    preview: 'With the new regulations and closer competition, could Monaco actually produce good racing this year?',
    author: 'MonacoMagic',
    category: 'Race Weekend Discussion',
    replies: 56,
    views: 723,
    lastActivity: '12 hours ago'
  }
];

const trendingTopics = [
  { title: 'Verstappen Championship Chances', posts: '234 posts' },
  { title: 'Hamilton Ferrari Era', posts: '189 posts' },
  { title: 'Antonelli Rookie Season', posts: '156 posts' },
  { title: '2025 Regulation Changes', posts: '134 posts' },
  { title: 'McLaren Comeback Story', posts: '112 posts' }
];

const ForumPage = () => {

  return (
    <PageWrapper>
      <Container>
        <GradientText>
          <h1 style={{ fontSize: '3rem', fontFamily: 'Orbitron', textAlign: 'center', marginBottom: '20px' }}>
            F1 COMMUNITY FORUM
          </h1>
        </GradientText>
        
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#d0d0d2', marginBottom: '40px' }}>
          Join the discussion with fellow Formula 1 enthusiasts from around the world
        </p>

        <ForumLayout>
          <MainContent>
            <CategoryGrid>
              {forumCategories.map((category, index) => (
                <CategoryCard
                  key={category.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => console.log(`Selected category: ${category.id}`)}
                >
                  <CategoryHeader>
                    <CategoryIcon>{category.icon}</CategoryIcon>
                    <CategoryInfo>
                      <CategoryName>{category.name}</CategoryName>
                      <CategoryDesc>{category.description}</CategoryDesc>
                    </CategoryInfo>
                  </CategoryHeader>
                  
                  <CategoryStats>
                    <StatBox>
                      <StatValue>{category.topics}</StatValue>
                      <StatLabel>Topics</StatLabel>
                    </StatBox>
                    <StatBox>
                      <StatValue>{category.posts}</StatValue>
                      <StatLabel>Posts</StatLabel>
                    </StatBox>
                    <StatBox>
                      <StatValue>{category.online}</StatValue>
                      <StatLabel>Online</StatLabel>
                    </StatBox>
                  </CategoryStats>
                </CategoryCard>
              ))}
            </CategoryGrid>

            <PostsSection>
              <h2 style={{ color: '#fff', marginBottom: '20px' }}>Recent Discussions</h2>
              {recentPosts.map((post, index) => (
                <PostCard
                  key={post.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <PostHeader>
                    <FlexContainer align="center" gap="10px">
                      <UserAvatar>
                        {post.author.charAt(0).toUpperCase()}
                      </UserAvatar>
                      <div>
                        <PostTitle>{post.title}</PostTitle>
                        <div style={{ color: '#d0d0d2', fontSize: '0.8rem' }}>
                          by {post.author} in {post.category}
                        </div>
                      </div>
                    </FlexContainer>
                    <PostMeta>
                      <div>💬 {post.replies}</div>
                      <div>👁️ {post.views}</div>
                      <div>🕐 {post.lastActivity}</div>
                    </PostMeta>
                  </PostHeader>
                  <PostPreview>{post.preview}</PostPreview>
                </PostCard>
              ))}
            </PostsSection>
          </MainContent>

          <Sidebar>
            <SidebarCard>
              <SidebarTitle>🔥 Trending Topics</SidebarTitle>
              {trendingTopics.map((topic, index) => (
                <TrendingTopic key={index}>
                  <TopicNumber>#{index + 1}</TopicNumber>
                  <TopicInfo>
                    <TopicTitle>{topic.title}</TopicTitle>
                    <TopicCount>{topic.posts}</TopicCount>
                  </TopicInfo>
                </TrendingTopic>
              ))}
            </SidebarCard>

            <SidebarCard>
              <SidebarTitle>📊 Community Stats</SidebarTitle>
              <div style={{ display: 'grid', gap: '15px' }}>
                <StatBox>
                  <StatValue>12,847</StatValue>
                  <StatLabel>Total Members</StatLabel>
                </StatBox>
                <StatBox>
                  <StatValue>1,923</StatValue>
                  <StatLabel>Online Now</StatLabel>
                </StatBox>
                <StatBox>
                  <StatValue>58,293</StatValue>
                  <StatLabel>Total Posts</StatLabel>
                </StatBox>
              </div>
            </SidebarCard>

            <SidebarCard>
              <SidebarTitle>🎯 Quick Actions</SidebarTitle>
              <div style={{ display: 'grid', gap: '10px' }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: 'linear-gradient(135deg, #e10600, #ff4757)',
                    border: 'none',
                    color: '#fff',
                    padding: '12px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  🆕 Create New Topic
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: 'transparent',
                    border: '2px solid #e10600',
                    color: '#e10600',
                    padding: '12px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  🔍 Search Forum
                </motion.button>
              </div>
            </SidebarCard>
          </Sidebar>
        </ForumLayout>
      </Container>
    </PageWrapper>
  );
};

export default ForumPage;