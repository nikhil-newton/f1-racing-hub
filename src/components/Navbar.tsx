import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, FlexContainer, GradientText } from '../styles/theme';
import NavbarSearch from './NavbarSearch';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(21, 21, 30, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  z-index: 1000;
  padding: 15px 0;
`;

const Logo = styled(Link)`
  font-family: ${props => props.theme.fonts.primary};
  font-size: 28px;
  font-weight: 900;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  
  .logo-icon {
    width: 40px;
    height: 40px;
    background: ${props => props.theme.gradients.primary};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    color: white;
  }
`;

const NavMenu = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 40px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${props => props.theme.colors.black};
    flex-direction: column;
    padding: 20px 0;
    border-top: 1px solid ${props => props.theme.colors.gray};
    transform: translateY(${props => props.isOpen ? '0' : '-100%'});
    opacity: ${props => props.isOpen ? '1' : '0'};
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    transition: all 0.3s ease;
  }
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  text-decoration: none;
  color: ${props => props.$isActive ? props.theme.colors.primary : props.theme.colors.white};
  position: relative;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 2px;
    background: ${props => props.theme.gradients.primary};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
  }
  
  span {
    width: 25px;
    height: 3px;
    background: ${props => props.theme.colors.white};
    margin: 3px 0;
    transition: 0.3s;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/drivers', label: 'Drivers' },
    { path: '/teams', label: 'Teams' },
    { path: '/cars', label: 'Cars' },
    { path: '/circuits', label: 'Circuits' },
    { path: '/calendar', label: 'Calendar' },
    { path: '/shop', label: 'Shop' },
    { path: '/forum', label: 'Forum' }
  ];

  return (
    <NavbarContainer>
      <Container>
        <FlexContainer justify="space-between" align="center">
          <Logo to="/">
            <div className="logo-icon">F1</div>
            <GradientText>Racing Hub</GradientText>
          </Logo>

          <NavMenu isOpen={isMenuOpen}>
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to={item.path}
                  $isActive={location.pathname === item.path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </NavMenu>

          <FlexContainer align="center" gap="20px">
            <NavbarSearch placeholder="Search drivers, teams..." />

            <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span />
              <span />
              <span />
            </MobileMenuButton>
          </FlexContainer>
        </FlexContainer>
      </Container>
    </NavbarContainer>
  );
};

export default Navbar;