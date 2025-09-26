import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 20px;
`;

const ModalContent = styled(motion.div)`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%);
  border-radius: 16px;
  border: 2px solid #FF8700;
  box-shadow: 0 20px 60px rgba(255, 135, 0, 0.3);
  overflow: hidden;
`;

const ModalHeader = styled.div`
  padding: 20px;
  background: linear-gradient(90deg, #FF8700 0%, #FF6B00 100%);
  color: white;
  text-align: center;
`;

const CircuitTitle = styled.h2`
  margin: 0;
  font-family: 'Orbitron', monospace;
  font-size: 24px;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const CircuitSubtitle = styled.p`
  margin: 5px 0 0 0;
  font-size: 14px;
  opacity: 0.9;
`;

const ImageContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  width: 100%;
`;

const CircuitImage = styled.img`
  max-width: 100%;
  max-height: 70vh;
  width: auto;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  object-fit: contain;
  display: block;
  margin: 0 auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
`;

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid #333;
  border-top: 4px solid #FF8700;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const ErrorMessage = styled.div`
  color: #FF4444;
  text-align: center;
  padding: 40px 20px;
  background: rgba(255, 68, 68, 0.1);
  border: 2px solid #FF4444;
  border-radius: 12px;
  font-family: 'Orbitron', monospace;
  max-width: 400px;
  
  h3 {
    margin: 0 0 10px 0;
    font-size: 18px;
  }
  
  p {
    margin: 0;
    font-size: 14px;
    opacity: 0.8;
  }
`;

interface CircuitImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  circuitName: string;
  circuitVenue: string;
  imageSrc: string;
  grandPrix: string;
}

export const CircuitImageModal: React.FC<CircuitImageModalProps> = ({
  isOpen,
  onClose,
  circuitName,
  circuitVenue,
  imageSrc,
  grandPrix
}) => {
  const [imageError, setImageError] = React.useState(false);
  const [imageLoading, setImageLoading] = React.useState(true);

  React.useEffect(() => {
    // Reset image states when modal opens with new image
    if (isOpen) {
      setImageError(false);
      setImageLoading(true);
    }
  }, [isOpen, imageSrc]);

  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleImageLoad = () => {
    setImageLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
    console.warn(`Failed to load circuit image: ${imageSrc}`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleOverlayClick}
        >
          <ModalContent
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ModalHeader>
              <CircuitTitle>{grandPrix}</CircuitTitle>
              <CircuitSubtitle>{circuitName} - {circuitVenue}</CircuitSubtitle>
            </ModalHeader>
            
            <CloseButton onClick={onClose}>
              ×
            </CloseButton>
            
            <ImageContainer>
              {imageLoading && <LoadingSpinner />}
              {imageError ? (
                <ErrorMessage>
                  <h3>Image Failed to Load</h3>
                  <p>Unable to display circuit layout for {circuitName}</p>
                  <p>Please try again later or check your connection.</p>
                </ErrorMessage>
              ) : (
                <CircuitImage 
                  src={imageSrc} 
                  alt={`${circuitName} Circuit Layout`}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  style={{ display: imageLoading ? 'none' : 'block' }}
                />
              )}
            </ImageContainer>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};