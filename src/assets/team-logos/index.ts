// Team logo paths - exact logos provided by user in correct order (Replace placeholders with your actual images)
export const teamLogoPaths = {
  'red-bull-racing': '/team-logos/red-bull-racing.jpg', // 1. Red Bull Racing - Updated with user's image
  'ferrari': '/team-logos/ferrari.jpg', // 2. Ferrari - Updated with user's image
  'mercedes': '/team-logos/mercedes.jpg', // 3. Mercedes - Updated with user's image
  'mclaren': '/team-logos/mclaren.jpg', // 4. McLaren - Updated with user's image
  'aston-martin': '/team-logos/aston-martin.jpg', // 5. Aston Martin - Updated with user's image
  'alpine': '/team-logos/alpine.jpg', // 6. Alpine - Updated with user's image
  'williams': '/team-logos/williams.jpg', // 7. Williams - Updated with user's image
  'racing-bulls': '/team-logos/racing-bulls.jpg', // 8. Racing Bulls - Updated with user's image
  'haas': '/team-logos/haas.jpg', // 9. Haas - Updated with user's image
  'kick-sauber': '/team-logos/kick-sauber.jpg', // 10. Kick Sauber - Updated with user's image
  'sauber': '/team-logos/kick-sauber.jpg', // Alias for Kick Sauber
};

// Get team logo path by team ID or name (converts team names to IDs)
export const getTeamLogoPath = (teamIdOrName: string): string | undefined => {
  // Convert team name to ID format (lowercase, spaces to hyphens)
  const teamId = teamIdOrName.toLowerCase().replace(/\s+/g, '-');
  return teamLogoPaths[teamId as keyof typeof teamLogoPaths];
};

// For backward compatibility - returns null as components will use img tags with paths
export const getTeamLogoComponent = (_teamId: string) => {
  return null;
};

// Team color mapping for consistent theming
export const teamColors = {
  'red-bull-racing': {
    primary: '#1E3A8A',
    secondary: '#FFD700',
    accent: '#3B82F6'
  },
  'ferrari': {
    primary: '#DC143C',
    secondary: '#FFD700',
    accent: '#FF0000'
  },
  'mercedes': {
    primary: '#00D2BE',
    secondary: '#FFFFFF',
    accent: '#1DD3C0'
  },
  'mclaren': {
    primary: '#FF8700',
    secondary: '#000000',
    accent: '#FF6600'
  },
  'aston-martin': {
    primary: '#006F62',
    secondary: '#FFD700',
    accent: '#00A693'
  },
  'alpine': {
    primary: '#0090FF',
    secondary: '#FF1801',
    accent: '#0070D9'
  },
  'williams': {
    primary: '#005AFF',
    secondary: '#FFFFFF',
    accent: '#37BEFF'
  },
  'racing-bulls': {
    primary: '#6667AB',
    secondary: '#FFD700',
    accent: '#1E1E3F'
  },
  'haas': {
    primary: '#FF69B4',
    secondary: '#ED1C24',
    accent: '#B6BABD'
  },
  'sauber': {
    primary: '#52B030',
    secondary: '#000000',
    accent: '#00FF41'
  },
  'kick-sauber': {
    primary: '#52B030',
    secondary: '#000000',
    accent: '#00FF41'
  }
};

// Get team colors by team ID
export const getTeamColors = (teamId: string) => {
  return teamColors[teamId as keyof typeof teamColors] || {
    primary: '#FFFFFF',
    secondary: '#000000',
    accent: '#FF6B00'
  };
};