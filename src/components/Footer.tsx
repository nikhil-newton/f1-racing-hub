import styled from 'styled-components';
import { Container, FlexContainer, GradientText } from '../styles/theme';

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.black};
  border-top: 1px solid ${props => props.theme.colors.gray};
  padding: 60px 0 20px 0;
  margin-top: 80px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
`;

const FooterSection = styled.div`
  h3 {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 18px;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.primary};
  }
  
  ul {
    list-style: none;
    
    li {
      margin-bottom: 10px;
      
      a {
        color: ${props => props.theme.colors.lightGray};
        text-decoration: none;
        transition: color 0.3s ease;
        
        &:hover {
          color: ${props => props.theme.colors.white};
        }
      }
    }
  }
  
  p {
    color: ${props => props.theme.colors.lightGray};
    line-height: 1.6;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  
  a {
    width: 40px;
    height: 40px;
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
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${props => props.theme.colors.gray};
  padding-top: 20px;
  text-align: center;
  
  p {
    color: ${props => props.theme.colors.lightGray};
    font-size: 14px;
  }
`;

const Newsletter = styled.div`
  margin-top: 20px;
  
  input {
    background: ${props => props.theme.colors.gray};
    border: 1px solid ${props => props.theme.colors.gray};
    border-radius: 4px;
    padding: 10px 15px;
    color: ${props => props.theme.colors.white};
    width: 200px;
    margin-right: 10px;
    
    &::placeholder {
      color: ${props => props.theme.colors.lightGray};
    }
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary};
    }
  }
  
  button {
    background: ${props => props.theme.gradients.primary};
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    color: ${props => props.theme.colors.white};
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <h3>F1 Racing Hub</h3>
            <p>
              Your ultimate destination for Formula 1 news, driver profiles, team information, 
              and race updates. Stay connected with the thrilling world of F1 racing.
            </p>
            <SocialLinks>
              <a href="#" aria-label="Twitter">📱</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Facebook">👥</a>
              <a href="#" aria-label="YouTube">📺</a>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/drivers">Drivers</a></li>
              <li><a href="/teams">Teams</a></li>
              <li><a href="/cars">Cars</a></li>
              <li><a href="/calendar">Race Calendar</a></li>
              <li><a href="/standings">Championship Standings</a></li>
              <li><a href="/news">Latest News</a></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Racing Info</h3>
            <ul>
              <li><a href="/circuits">Circuits</a></li>
              <li><a href="/history">F1 History</a></li>
              <li><a href="/regulations">Technical Regulations</a></li>
              <li><a href="/statistics">Statistics</a></li>
              <li><a href="/records">Records</a></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Newsletter</h3>
            <p>Get the latest F1 updates delivered to your inbox.</p>
            <Newsletter>
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </Newsletter>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <FlexContainer justify="center" align="center" direction="column" gap="10px">
            <p>&copy; 2024 F1 Racing Hub. All rights reserved.</p>
            <p>
              Made with ❤️ for <GradientText>Formula 1</GradientText> fans worldwide
            </p>
          </FlexContainer>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;