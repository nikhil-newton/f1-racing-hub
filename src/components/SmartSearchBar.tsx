import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { searchEngine, SearchResult } from '../utils/searchEngine';
import SearchResults from './SearchResults';

const SearchContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 30px auto;
`;

const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: rgba(56, 56, 63, 0.9);
  border: 2px solid ${props => props.theme.colors.gray};
  border-radius: 50px;
  padding: 0 20px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:focus-within {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.shadows.red};
  }
  
  .search-icon {
    color: ${props => props.theme.colors.lightGray};
    font-size: 1.2rem;
    margin-right: 15px;
  }
  
  .clear-button {
    background: none;
    border: none;
    color: ${props => props.theme.colors.lightGray};
    font-size: 1.1rem;
    cursor: pointer;
    padding: 5px;
    margin-left: 10px;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const SearchInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 1.1rem;
  padding: 18px 0;
  outline: none;
  
  &::placeholder {
    color: ${props => props.theme.colors.lightGray};
    font-style: italic;
  }
`;

const SearchKeyboardShortcut = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.8rem;
  color: ${props => props.theme.colors.lightGray};
  pointer-events: none;
  
  .key {
    background: ${props => props.theme.colors.gray};
    padding: 2px 6px;
    border-radius: 4px;
    font-family: monospace;
  }
`;

const SearchStats = styled(motion.div)`
  position: absolute;
  top: -35px;
  right: 0;
  font-size: 0.8rem;
  color: ${props => props.theme.colors.lightGray};
  pointer-events: none;
`;

interface SmartSearchBarProps {
  placeholder?: string;
  autoFocus?: boolean;
  showShortcuts?: boolean;
  onSearchComplete?: (query: string, results: SearchResult[]) => void;
}

const SmartSearchBar: React.FC<SmartSearchBarProps> = ({
  placeholder = "Search drivers, teams, races, news...",
  autoFocus = false,
  showShortcuts = true,
  onSearchComplete
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const searchTimeoutRef = useRef<number>();

  useEffect(() => {
    // Handle keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        setIsResultsVisible(true);
      }
      
      if (e.key === 'Escape') {
        setIsResultsVisible(false);
        inputRef.current?.blur();
      }
    };

    // Handle clicks outside
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsResultsVisible(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Auto-focus if requested
    if (autoFocus) {
      inputRef.current?.focus();
    }
  }, [autoFocus]);

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
        
        setResults(searchResults);
        setSuggestions(searchSuggestions);
        
        if (onSearchComplete) {
          onSearchComplete(searchQuery, searchResults);
        }
      } else {
        setResults([]);
        setSuggestions(searchEngine.getPopularSearches());
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
      setSuggestions(searchEngine.getPopularSearches());
    }
  };

  const handleResultClick = (result: SearchResult) => {
    setQuery(result.title);
    setIsResultsVisible(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    performSearch(suggestion);
  };

  const handleClearSearch = () => {
    setQuery('');
    setResults([]);
    setSuggestions(searchEngine.getPopularSearches());
    inputRef.current?.focus();
  };

  const handleCloseResults = () => {
    setIsResultsVisible(false);
  };

  return (
    <SearchContainer
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      {results.length > 0 && query && (
        <SearchStats
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {results.length} result{results.length !== 1 ? 's' : ''} found
        </SearchStats>
      )}
      
      <SearchInputWrapper>
        <span className="search-icon">🔍</span>
        <SearchInput
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder={isLoading ? "Searching..." : placeholder}
          disabled={isLoading}
        />
        
        {query && (
          <button
            className="clear-button"
            onClick={handleClearSearch}
            title="Clear search"
          >
            ✕
          </button>
        )}
        
        {showShortcuts && !query && (
          <SearchKeyboardShortcut>
            <span className="key">Ctrl</span>
            <span>+</span>
            <span className="key">K</span>
          </SearchKeyboardShortcut>
        )}
      </SearchInputWrapper>

      <SearchResults
        results={results}
        suggestions={suggestions}
        query={query}
        isVisible={isResultsVisible}
        onResultClick={handleResultClick}
        onSuggestionClick={handleSuggestionClick}
        onClose={handleCloseResults}
      />
    </SearchContainer>
  );
};

export default SmartSearchBar;