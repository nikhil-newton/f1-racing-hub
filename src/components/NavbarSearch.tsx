import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { searchEngine, SearchResult } from '../utils/searchEngine';


const NavSearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const NavSearchInput = styled.input`
  background: rgba(56, 56, 63, 0.5);
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 25px;
  padding: 10px 15px;
  color: ${props => props.theme.colors.white};
  font-size: 14px;
  width: 250px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.shadows.red};
    width: 300px;
  }
  
  &::placeholder {
    color: ${props => props.theme.colors.lightGray};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 200px;
    &:focus {
      width: 220px;
    }
  }
`;

const NavSearchResults = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  background: ${props => props.theme.gradients.dark};
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 8px;
  max-height: 350px;
  overflow-y: auto;
  z-index: 2000;
  box-shadow: ${props => props.theme.shadows.card};
  margin-top: 5px;
  
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

const NavSearchResultItem = styled(motion.div)`
  padding: 12px 15px;
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
    margin-bottom: 5px;
    
    .result-title {
      font-family: ${props => props.theme.fonts.primary};
      font-weight: 700;
      font-size: 0.9rem;
      margin: 0;
      color: ${props => props.theme.colors.white};
    }
    
    .result-type {
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.white};
      padding: 2px 6px;
      border-radius: 10px;
      font-size: 0.6rem;
      text-transform: uppercase;
      font-weight: 600;
    }
  }
  
  .result-description {
    color: ${props => props.theme.colors.lightGray};
    font-size: 0.8rem;
    line-height: 1.3;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const NavSearchSuggestions = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  
  .suggestions-title {
    font-size: 0.7rem;
    color: ${props => props.theme.colors.lightGray};
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .suggestions-list {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    
    .suggestion-tag {
      background: ${props => props.theme.colors.gray};
      color: ${props => props.theme.colors.white};
      padding: 3px 8px;
      border-radius: 12px;
      font-size: 0.7rem;
      cursor: pointer;
      transition: all 0.3s ease;
      
      &:hover {
        background: ${props => props.theme.colors.primary};
      }
    }
  }
`;

const NavSearchNoResults = styled.div`
  padding: 20px 15px;
  text-align: center;
  color: ${props => props.theme.colors.lightGray};
  font-size: 0.8rem;
`;

interface NavbarSearchProps {
  placeholder?: string;
}

const NavbarSearch: React.FC<NavbarSearchProps> = ({
  placeholder = "Search drivers, teams..."
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const searchTimeoutRef = useRef<number>();

  useEffect(() => {
    // Handle clicks outside
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsResultsVisible(false);
      }
    };

    // Handle escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsResultsVisible(false);
        inputRef.current?.blur();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    // Debounced search
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(() => {
      performSearch(query);
    }, 300);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [query]);

  const performSearch = async (searchQuery: string) => {
    setIsLoading(true);
    
    try {
      if (searchQuery.length >= 2) {
        const searchResults = searchEngine.search(searchQuery);
        const searchSuggestions = searchEngine.getSuggestions(searchQuery);
        
        setResults(searchResults.slice(0, 6)); // Limit results for navbar
        setSuggestions(searchSuggestions.slice(0, 4)); // Limit suggestions
      } else {
        setResults([]);
        setSuggestions(searchEngine.getPopularSearches().slice(0, 4));
      }
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setIsResultsVisible(true);
  };

  const handleInputFocus = () => {
    setIsResultsVisible(true);
    if (!query) {
      setSuggestions(searchEngine.getPopularSearches().slice(0, 4));
    }
  };

  const handleResultClick = (result: SearchResult) => {
    setQuery('');
    setIsResultsVisible(false);
    
    // Navigate to external URL or internal route
    if (result.route.startsWith('http')) {
      window.open(result.route, '_blank', 'noopener,noreferrer');
    } else {
      navigate(result.route);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    performSearch(suggestion);
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
    <NavSearchContainer ref={containerRef}>
      <NavSearchInput
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        placeholder={isLoading ? "Searching..." : placeholder}
        disabled={isLoading}
      />

      <AnimatePresence>
        {isResultsVisible && (
          <NavSearchResults
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {query && results.length === 0 && !isLoading && (
              <NavSearchSuggestions>
                <div className="suggestions-title">Try searching for</div>
                <div className="suggestions-list">
                  {suggestions.map((suggestion, index) => (
                    <span
                      key={index}
                      className="suggestion-tag"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </span>
                  ))}
                </div>
              </NavSearchSuggestions>
            )}
            
            {results.length > 0 ? (
              results.map((result, index) => (
                <NavSearchResultItem
                  key={result.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => handleResultClick(result)}
                >
                  <div className="result-header">
                    <h4 className="result-title">
                      {getTypeIcon(result.type)} {result.title}
                    </h4>
                    <span className="result-type">{result.type}</span>
                  </div>
                  <p className="result-description">{result.description}</p>
                </NavSearchResultItem>
              ))
            ) : query && !isLoading && (
              <NavSearchNoResults>
                No results found for "{query}"
              </NavSearchNoResults>
            )}
            
            {!query && suggestions.length > 0 && (
              <NavSearchSuggestions>
                <div className="suggestions-title">Popular searches</div>
                <div className="suggestions-list">
                  {suggestions.map((suggestion, index) => (
                    <span
                      key={index}
                      className="suggestion-tag"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </span>
                  ))}
                </div>
              </NavSearchSuggestions>
            )}
          </NavSearchResults>
        )}
      </AnimatePresence>
    </NavSearchContainer>
  );
};

export default NavbarSearch;