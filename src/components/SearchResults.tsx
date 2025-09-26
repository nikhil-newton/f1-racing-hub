import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchResult } from '../utils/searchEngine';
import { F1Button, GradientText } from '../styles/theme';

const SearchResultsContainer = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${props => props.theme.gradients.dark};
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 8px;
  max-height: 400px;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: ${props => props.theme.shadows.card};
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.gray};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: 3px;
  }
`;

const SearchResultItem = styled(motion.div)`
  padding: 15px 20px;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(225, 6, 0, 0.1);
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  .result-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
    
    .result-title {
      font-family: ${props => props.theme.fonts.primary};
      font-weight: 700;
      font-size: 1rem;
      margin: 0;
    }
    
    .result-type {
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.white};
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 0.7rem;
      text-transform: uppercase;
      font-weight: 600;
    }
  }
  
  .result-description {
    color: ${props => props.theme.colors.lightGray};
    font-size: 0.9rem;
    line-height: 1.4;
    margin: 0;
  }
  
  .result-meta {
    display: flex;
    gap: 10px;
    margin-top: 8px;
    font-size: 0.8rem;
    
    .match-info {
      color: ${props => props.theme.colors.primary};
      font-weight: 600;
    }
  }
`;

const NoResults = styled.div`
  padding: 30px 20px;
  text-align: center;
  color: ${props => props.theme.colors.lightGray};
  
  h4 {
    margin-bottom: 10px;
    color: ${props => props.theme.colors.white};
  }
  
  p {
    margin-bottom: 20px;
  }
`;

const SuggestionsContainer = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  
  .suggestions-title {
    font-size: 0.8rem;
    color: ${props => props.theme.colors.lightGray};
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .suggestions-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    
    .suggestion-tag {
      background: ${props => props.theme.colors.gray};
      color: ${props => props.theme.colors.white};
      padding: 4px 12px;
      border-radius: 16px;
      font-size: 0.8rem;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        background: ${props => props.theme.colors.primary};
      }
    }
  }
`;

interface SearchResultsProps {
  results: SearchResult[];
  suggestions: string[];
  query: string;
  isVisible: boolean;
  onResultClick: (result: SearchResult) => void;
  onSuggestionClick: (suggestion: string) => void;
  onClose: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  suggestions,
  query,
  isVisible,
  onResultClick,
  onSuggestionClick,
  onClose
}) => {
  const navigate = useNavigate();

  const handleResultClick = (result: SearchResult) => {
    onResultClick(result);
    
    // Navigate to external URL or internal route
    if (result.route.startsWith('http')) {
      window.open(result.route, '_blank', 'noopener,noreferrer');
    } else {
      navigate(result.route);
    }
    
    onClose();
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'driver': return '🏎️';
      case 'team': return '🏁';
      case 'race': return '🏆';
      case 'news': return '📰';
      default: return '🔍';
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <SearchResultsContainer
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {query && results.length === 0 && (
            <SuggestionsContainer>
              <div className="suggestions-title">Popular Searches</div>
              <div className="suggestions-list">
                {suggestions.slice(0, 6).map((suggestion, index) => (
                  <span
                    key={index}
                    className="suggestion-tag"
                    onClick={() => onSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </span>
                ))}
              </div>
            </SuggestionsContainer>
          )}
          
          {results.length > 0 ? (
            results.slice(0, 8).map((result, index) => (
              <SearchResultItem
                key={result.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => handleResultClick(result)}
              >
                <div className="result-header">
                  <GradientText>
                    <h4 className="result-title">
                      {getTypeIcon(result.type)} {result.title}
                    </h4>
                  </GradientText>
                  <span className="result-type">{result.type}</span>
                </div>
                <p className="result-description">{result.description}</p>
                <div className="result-meta">
                  <span className="match-info">
                    Relevance: {Math.round(result.relevanceScore)}%
                  </span>
                  {result.matchedFields.length > 0 && (
                    <span>
                      Matched: {result.matchedFields.join(', ')}
                    </span>
                  )}
                </div>
              </SearchResultItem>
            ))
          ) : query && (
            <NoResults>
              <h4>No results found</h4>
              <p>Try searching for drivers, teams, races, or news topics.</p>
              <F1Button size="small" onClick={onClose}>
                Browse All Content
              </F1Button>
            </NoResults>
          )}
        </SearchResultsContainer>
      )}
    </AnimatePresence>
  );
};

export default SearchResults;