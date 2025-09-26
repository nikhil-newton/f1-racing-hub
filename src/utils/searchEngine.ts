import { driversData } from '../data/drivers';
import { teamsData } from '../data/teams';
import { raceCalendarData } from '../data/races';
import { circuits } from '../data/circuits';
import { Race } from '../types';

export interface SearchResult {
  id: string;
  title: string;
  type: 'driver' | 'team' | 'race' | 'news' | 'circuit';
  description: string;
  route: string;
  relevanceScore: number;
  matchedFields: string[];
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  category?: string;
  externalUrl?: string;
}

// Enhanced news data with external links - 2025 Season
export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Verstappen Clinches Fifth Consecutive Championship',
    date: '2025-09-20',
    summary: 'Max Verstappen secures his fifth Formula 1 World Championship with dominant performances throughout 2025, extending Red Bull Racing\'s incredible streak...',
    category: 'championship',
    externalUrl: 'https://www.formula1.com/en/latest/article.verstappen-championship.html'
  },
  {
    id: 2,
    title: 'Hamilton\'s Ferrari Move Pays Dividends',
    date: '2025-09-18',
    summary: 'Lewis Hamilton\'s switch to Ferrari shows promising results with multiple race wins and podium finishes in his debut season with the Scuderia...',
    category: 'transfers'
  },
  {
    id: 3,
    title: 'McLaren vs Ferrari Battle Intensifies',
    date: '2025-09-15',
    summary: 'The constructors\' championship battle between McLaren and Ferrari reaches fever pitch as both teams fight for second place behind Red Bull Racing...',
    category: 'championship',
    externalUrl: 'https://www.formula1.com/en/latest/article.constructors-battle.html'
  },
  {
    id: 4,
    title: 'Rookie Sensations Making Their Mark',
    date: '2025-09-12',
    summary: 'Young talents Kimi Antonelli, Jack Doohan, and Ollie Bearman showcase impressive performances in their debut F1 seasons, promising an exciting future...',
    category: 'rookies'
  },
  {
    id: 5,
    title: 'Singapore GP Delivers Thrilling Night Race',
    date: '2025-09-22',
    summary: 'The Singapore Grand Prix provides another spectacular night race with wheel-to-wheel action and strategic battles under the Marina Bay street circuit lights...',
    category: 'race-results'
  },
  {
    id: 6,
    title: '2026 Regulation Changes Preview',
    date: '2025-09-10',
    summary: 'FIA reveals details about the upcoming 2026 technical regulations featuring new power unit specifications and aerodynamic packages...',
    category: 'regulations',
    externalUrl: 'https://www.fia.com/regulation/category/110'
  }
];

class F1SearchEngine {
  private static instance: F1SearchEngine;
  
  static getInstance(): F1SearchEngine {
    if (!F1SearchEngine.instance) {
      F1SearchEngine.instance = new F1SearchEngine();
    }
    return F1SearchEngine.instance;
  }

  search(query: string): SearchResult[] {
    if (!query || query.length < 2) return [];
    
    const lowercaseQuery = query.toLowerCase();
    const results: SearchResult[] = [];

    // Search drivers
    driversData.forEach(driver => {
      const relevanceScore = this.calculateRelevance(lowercaseQuery, [
        driver.name,
        driver.team,
        driver.nationality,
        driver.biography
      ]);
      
      if (relevanceScore > 0) {
        results.push({
          id: driver.id,
          title: driver.name,
          type: 'driver',
          description: `${driver.nationality} driver for ${driver.team}. ${driver.raceWins} wins, ${driver.championships} championships.`,
          route: `/drivers/${driver.id}`,
          relevanceScore,
          matchedFields: this.getMatchedFields(lowercaseQuery, {
            name: driver.name,
            team: driver.team,
            nationality: driver.nationality,
            biography: driver.biography
          })
        });
      }
    });

    // Search teams
    teamsData.forEach(team => {
      const relevanceScore = this.calculateRelevance(lowercaseQuery, [
        team.name,
        team.fullName,
        team.nationality,
        team.teamPrincipal,
        team.base,
        team.description
      ]);
      
      if (relevanceScore > 0) {
        results.push({
          id: team.id,
          title: team.name,
          type: 'team',
          description: `${team.nationality} team based in ${team.base}. ${team.championships.constructors} constructors' championships.`,
          route: `/teams`,
          relevanceScore,
          matchedFields: this.getMatchedFields(lowercaseQuery, {
            name: team.name,
            fullName: team.fullName,
            nationality: team.nationality,
            base: team.base
          })
        });
      }
    });

    // Search races
    raceCalendarData.forEach((race: Race) => {
      const relevanceScore = this.calculateRelevance(lowercaseQuery, [
        race.name,
        race.country,
        race.circuit,
        race.winner || ''
      ]);
      
      if (relevanceScore > 0) {
        results.push({
          id: race.id,
          title: race.name,
          type: 'race',
          description: `${race.circuit}, ${race.country}. ${race.completed ? `Winner: ${race.winner}` : `Scheduled: ${race.date}`}`,
          route: `/calendar`,
          relevanceScore,
          matchedFields: this.getMatchedFields(lowercaseQuery, {
            name: race.name,
            country: race.country,
            circuit: race.circuit,
            winner: race.winner || ''
          })
        });
      }
    });

    // Search circuits
    circuits.forEach(circuit => {
      const relevanceScore = this.calculateRelevance(lowercaseQuery, [
        circuit.name,
        circuit.venue,
        circuit.grandPrix,
        circuit.country,
        circuit.city,
        circuit.lapRecord.driver,
        circuit.lapRecord.team,
        ...circuit.characteristics,
        ...circuit.notableFeatures
      ]);
      
      if (relevanceScore > 0) {
        results.push({
          id: `circuit-${circuit.id}`,
          title: circuit.name,
          type: 'circuit',
          description: `${circuit.grandPrix} at ${circuit.venue}, ${circuit.country}. Lap record: ${circuit.lapRecord.time} by ${circuit.lapRecord.driver}`,
          route: `/circuits/${circuit.id}`,
          relevanceScore,
          matchedFields: this.getMatchedFields(lowercaseQuery, {
            name: circuit.name,
            venue: circuit.venue,
            grandPrix: circuit.grandPrix,
            country: circuit.country,
            driver: circuit.lapRecord.driver,
            team: circuit.lapRecord.team
          })
        });
      }
    });

    // Search news
    newsItems.forEach(news => {
      const relevanceScore = this.calculateRelevance(lowercaseQuery, [
        news.title,
        news.summary,
        news.category || ''
      ]);
      
      if (relevanceScore > 0) {
        results.push({
          id: `news-${news.id}`,
          title: news.title,
          type: 'news',
          description: news.summary,
          route: news.externalUrl || `/news/${news.id}`,
          relevanceScore,
          matchedFields: this.getMatchedFields(lowercaseQuery, {
            title: news.title,
            summary: news.summary,
            category: news.category || ''
          })
        });
      }
    });

    // Sort by relevance score (highest first)
    return results.sort((a, b) => b.relevanceScore - a.relevanceScore);
  }

  private calculateRelevance(query: string, fields: string[]): number {
    let score = 0;
    const queryWords = query.split(' ').filter(word => word.length > 1);
    
    fields.forEach(field => {
      const fieldLower = field.toLowerCase();
      
      queryWords.forEach(word => {
        const wordLower = word.toLowerCase();
        
        // Exact match gets highest score
        if (fieldLower === wordLower) {
          score += 100;
        }
        // Word starts with query gets high score
        else if (fieldLower.startsWith(wordLower)) {
          score += 50;
        }
        // Word contains query gets medium score
        else if (fieldLower.includes(wordLower)) {
          score += 25;
        }
        // Fuzzy match gets low score
        else if (this.fuzzyMatch(fieldLower, wordLower)) {
          score += 10;
        }
      });
    });
    
    return score;
  }

  private getMatchedFields(query: string, fields: { [key: string]: string }): string[] {
    const matched: string[] = [];
    const queryLower = query.toLowerCase();
    
    Object.entries(fields).forEach(([key, value]) => {
      if (value.toLowerCase().includes(queryLower)) {
        matched.push(key);
      }
    });
    
    return matched;
  }

  private fuzzyMatch(text: string, pattern: string): boolean {
    if (pattern.length > text.length) return false;
    
    let textIndex = 0;
    let patternIndex = 0;
    
    while (textIndex < text.length && patternIndex < pattern.length) {
      if (text[textIndex] === pattern[patternIndex]) {
        patternIndex++;
      }
      textIndex++;
    }
    
    return patternIndex === pattern.length;
  }

  // Get popular search suggestions
  getPopularSearches(): string[] {
    return [
      'Max Verstappen',
      'Red Bull Racing',
      'Monaco Grand Prix',
      'Silverstone Circuit',
      'Lewis Hamilton',
      'Ferrari',
      'Mercedes',
      'McLaren',
      'Spa-Francorchamps',
      'Championship'
    ];
  }

  // Get search suggestions based on partial query
  getSuggestions(query: string): string[] {
    if (!query || query.length < 2) return this.getPopularSearches();
    
    const suggestions = new Set<string>();
    const lowercaseQuery = query.toLowerCase();
    
    // Add driver names
    driversData.forEach(driver => {
      if (driver.name.toLowerCase().includes(lowercaseQuery)) {
        suggestions.add(driver.name);
      }
      if (driver.team.toLowerCase().includes(lowercaseQuery)) {
        suggestions.add(driver.team);
      }
    });
    
    // Add team names
    teamsData.forEach(team => {
      if (team.name.toLowerCase().includes(lowercaseQuery)) {
        suggestions.add(team.name);
      }
    });
    
    // Add race names
    raceCalendarData.forEach((race: Race) => {
      if (race.name.toLowerCase().includes(lowercaseQuery)) {
        suggestions.add(race.name);
      }
      if (race.country.toLowerCase().includes(lowercaseQuery)) {
        suggestions.add(race.country);
      }
    });
    
    // Add circuit names
    circuits.forEach(circuit => {
      if (circuit.name.toLowerCase().includes(lowercaseQuery)) {
        suggestions.add(circuit.name);
      }
      if (circuit.grandPrix.toLowerCase().includes(lowercaseQuery)) {
        suggestions.add(circuit.grandPrix);
      }
      if (circuit.venue.toLowerCase().includes(lowercaseQuery)) {
        suggestions.add(circuit.venue);
      }
    });
    
    return Array.from(suggestions).slice(0, 8);
  }
}

export const searchEngine = F1SearchEngine.getInstance();