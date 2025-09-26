import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, GradientText, FlexContainer } from '../styles/theme';

const PageWrapper = styled.div`
  margin-top: 80px;
  padding: 60px 0;
  min-height: calc(100vh - 80px);
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 40px 0;
`;

const CategoryCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(23, 23, 30, 0.95) 0%, rgba(30, 30, 40, 0.95) 100%);
  border: 2px solid #e1060050;
  border-radius: 15px;
  padding: 30px 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #e10600;
    transform: translateY(-5px);
    box-shadow: 0 20px 40px #e1060020;
  }
`;

const CategoryIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 15px;
`;

const CategoryName = styled.h3`
  color: #fff;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const CategoryDesc = styled.p`
  color: #d0d0d2;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-top: 40px;
`;

const ProductCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(23, 23, 30, 0.95) 0%, rgba(30, 30, 40, 0.95) 100%);
  border: 2px solid #e1060030;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #e10600;
    transform: translateY(-5px);
    box-shadow: 0 20px 40px #e1060020;
  }
`;

const ProductImage = styled.div<{ bgColor: string }>`
  height: 200px;
  background: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.3));
  }
`;

const ProductInfo = styled.div`
  padding: 20px;
`;

const ProductName = styled.h4`
  color: #fff;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.1rem;
  margin-bottom: 8px;
`;

const ProductPrice = styled.div`
  color: #e10600;
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  color: #d0d0d2;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const FilterSection = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

const BuyNowButton = styled.button`
  background: linear-gradient(135deg, #e10600, #ff4757);
  border: none;
  color: #fff;
  padding: 12px 25px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px #e1060030;
    background: linear-gradient(135deg, #ff1a00, #ff5722);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  team?: string;
  icon: string;
  bgColor: string;
  purchaseUrl: string;
}

const products: Product[] = [
  // Team Merchandise
  {
    id: "rb-cap",
    name: "Red Bull Racing Cap",
    price: 45,
    description: "Official Red Bull Racing team cap with embroidered logo",
    category: "caps",
    team: "Red Bull Racing",
    icon: "🧢",
    bgColor: "linear-gradient(135deg, #3671C6, #FF1801)",
    purchaseUrl: "https://redbullshop.com/en-us/c/f1-merchandise"
  },
  {
    id: "ferrari-tshirt",
    name: "Ferrari Team T-Shirt",
    price: 65,
    description: "Premium Ferrari team t-shirt in classic red",
    category: "apparel",
    team: "Ferrari",
    icon: "👕",
    bgColor: "linear-gradient(135deg, #E8002D, #000000)",
    purchaseUrl: "https://store.ferrari.com/en-us/formula-1/"
  },
  {
    id: "mercedes-jacket",
    name: "Mercedes Team Jacket",
    price: 120,
    description: "Official Mercedes-AMG PETRONAS team jacket",
    category: "apparel",
    team: "Mercedes",
    icon: "🧥",
    bgColor: "linear-gradient(135deg, #27F4D2, #000000)",
    purchaseUrl: "https://mercedesamgf1.com/shop"
  },
  {
    id: "mclaren-hoodie",
    name: "McLaren Team Hoodie",
    price: 85,
    description: "McLaren Racing team hoodie in papaya orange",
    category: "apparel",
    team: "McLaren",
    icon: "👔",
    bgColor: "linear-gradient(135deg, #FF8000, #47C7FC)",
    purchaseUrl: "https://www.mclaren.com/racing/shop/"
  },
  
  // Driver Collections
  {
    id: "verstappen-helmet",
    name: "Max Verstappen Mini Helmet",
    price: 199,
    description: "1:2 scale replica of Max Verstappen's 2025 helmet",
    category: "collectibles",
    team: "Red Bull Racing",
    icon: "⛑️",
    bgColor: "linear-gradient(135deg, #3671C6, #FF1801)",
    purchaseUrl: "https://redbullshop.com/en-us/c/f1-merchandise"
  },
  {
    id: "hamilton-watch",
    name: "Lewis Hamilton IWC Watch",
    price: 899,
    description: "Limited edition Lewis Hamilton signature watch",
    category: "accessories",
    team: "Ferrari",
    icon: "⌚",
    bgColor: "linear-gradient(135deg, #E8002D, #000000)",
    purchaseUrl: "https://www.iwc.com/us/en/watch-collections/pilot-watches/iw377725-pilot-s-watch-chronograph-41-lewis-hamilton.html"
  },
  {
    id: "norris-cap",
    name: "Lando Norris Signature Cap",
    price: 55,
    description: "Lando Norris personal signature cap collection",
    category: "caps",
    team: "McLaren",
    icon: "🧢",
    bgColor: "linear-gradient(135deg, #FF8000, #47C7FC)",
    purchaseUrl: "https://www.mclaren.com/racing/shop/"
  },
  
  // Accessories
  {
    id: "f1-keychain",
    name: "F1 Logo Keychain",
    price: 15,
    description: "Official Formula 1 logo metal keychain",
    category: "accessories",
    icon: "🔑",
    bgColor: "linear-gradient(135deg, #15151e, #e10600)",
    purchaseUrl: "https://f1store.formula1.com/en/accessories/keychains/"
  },
  {
    id: "f1-mug",
    name: "F1 Racing Mug",
    price: 25,
    description: "Ceramic mug with F1 racing design",
    category: "lifestyle",
    icon: "☕",
    bgColor: "linear-gradient(135deg, #15151e, #e10600)",
    purchaseUrl: "https://f1store.formula1.com/en/drinkware/"
  },
  {
    id: "f1-phone-case",
    name: "F1 Phone Case",
    price: 35,
    description: "Premium F1 themed phone case for multiple models",
    category: "accessories",
    icon: "📱",
    bgColor: "linear-gradient(135deg, #15151e, #e10600)",
    purchaseUrl: "https://f1store.formula1.com/en/accessories/"
  },
  
  // Collectibles
  {
    id: "f1-car-model",
    name: "F1 2025 Car Model Set",
    price: 299,
    description: "Complete set of 1:43 scale 2025 F1 cars",
    category: "collectibles",
    icon: "🏎️",
    bgColor: "linear-gradient(135deg, #15151e, #e10600)",
    purchaseUrl: "https://f1store.formula1.com/en/collectibles/"
  },
  {
    id: "circuit-poster",
    name: "Monaco Circuit Poster",
    price: 45,
    description: "Vintage-style Monaco Grand Prix circuit poster",
    category: "lifestyle",
    icon: "🖼️",
    bgColor: "linear-gradient(135deg, #15151e, #e10600)",
    purchaseUrl: "https://f1store.formula1.com/en/lifestyle/"
  }
];

const categories = [
  { id: 'all', name: 'All Products', icon: '🏁', desc: 'Browse our complete F1 collection' },
  { id: 'apparel', name: 'Apparel', icon: '👕', desc: 'Team jerseys, t-shirts, and racing wear' },
  { id: 'caps', name: 'Caps & Hats', icon: '🧢', desc: 'Official team caps and headwear' },
  { id: 'accessories', name: 'Accessories', icon: '⌚', desc: 'Watches, keychains, and tech accessories' },
  { id: 'collectibles', name: 'Collectibles', icon: '🏆', desc: 'Model cars, helmets, and memorabilia' },
  { id: 'lifestyle', name: 'Lifestyle', icon: '☕', desc: 'Home and office F1 themed items' }
];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  return (
    <PageWrapper>
      <Container>
        <GradientText>
          <h1 style={{ fontSize: '3rem', fontFamily: 'Orbitron', textAlign: 'center', marginBottom: '20px' }}>
            F1 OFFICIAL SHOP
          </h1>
        </GradientText>
        
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#d0d0d2', marginBottom: '40px' }}>
          Official Formula 1 merchandise, team gear, and exclusive collectibles
        </p>

        <CategoryGrid>
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedCategory(category.id)}
              style={{ 
                borderColor: selectedCategory === category.id ? '#e10600' : '#e1060050',
                background: selectedCategory === category.id ? 
                  'linear-gradient(135deg, rgba(225, 6, 0, 0.1) 0%, rgba(30, 30, 40, 0.95) 100%)' :
                  'linear-gradient(135deg, rgba(23, 23, 30, 0.95) 0%, rgba(30, 30, 40, 0.95) 100%)'
              }}
            >
              <CategoryIcon>{category.icon}</CategoryIcon>
              <CategoryName>{category.name}</CategoryName>
              <CategoryDesc>{category.desc}</CategoryDesc>
            </CategoryCard>
          ))}
        </CategoryGrid>

        <FilterSection>
          <h2 style={{ color: '#fff', marginBottom: '20px', textAlign: 'center' }}>
            {selectedCategory === 'all' ? 'All Products' : 
             categories.find(c => c.id === selectedCategory)?.name}
          </h2>
        </FilterSection>

        <ProductsGrid>
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <ProductImage bgColor={product.bgColor}>
                <div style={{ fontSize: '4rem', zIndex: 1 }}>
                  {product.icon}
                </div>
                {product.team && (
                  <div style={{ 
                    position: 'absolute', 
                    top: '15px', 
                    right: '15px', 
                    background: 'rgba(0,0,0,0.7)', 
                    color: '#fff', 
                    padding: '5px 10px', 
                    borderRadius: '10px',
                    fontSize: '0.8rem',
                    zIndex: 1
                  }}>
                    {product.team}
                  </div>
                )}
              </ProductImage>
              
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>${product.price}</ProductPrice>
                <ProductDescription>{product.description}</ProductDescription>
                <BuyNowButton onClick={() => window.open(product.purchaseUrl, '_blank')}>
                  🛒 Buy Now
                </BuyNowButton>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductsGrid>

        <div style={{ textAlign: 'center', marginTop: '60px', padding: '40px', background: 'rgba(225, 6, 0, 0.05)', borderRadius: '20px' }}>
          <h3 style={{ color: '#e10600', marginBottom: '15px' }}>�️ Official F1 Merchandise</h3>
          <p style={{ color: '#d0d0d2', marginBottom: '20px' }}>
            All "Buy Now" buttons link to official F1 team stores and authorized retailers. 
            Purchase authentic merchandise directly from the source.
          </p>
          <FlexContainer justify="center" gap="30px" style={{ marginTop: '20px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🔒</div>
              <div style={{ color: '#fff', fontSize: '0.9rem' }}>Secure Payment</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>✅</div>
              <div style={{ color: '#fff', fontSize: '0.9rem' }}>Authentic Products</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📞</div>
              <div style={{ color: '#fff', fontSize: '0.9rem' }}>24/7 Support</div>
            </div>
          </FlexContainer>
        </div>
      </Container>
    </PageWrapper>
  );
};

export default ShopPage;