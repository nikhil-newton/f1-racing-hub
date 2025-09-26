import { driversData } from '../data/drivers';

export const getDriverStatistics = () => {
  const totalDrivers = driversData.length;
  
  const totalChampionships = driversData.reduce((sum, driver) => sum + driver.championships, 0);
  
  const totalCareerWins = driversData.reduce((sum, driver) => sum + driver.raceWins, 0);
  
  const totalCareerPodiums = driversData.reduce((sum, driver) => sum + driver.podiums, 0);
  
  const nationalities = new Set(driversData.map(driver => driver.nationality));
  const totalNationalities = nationalities.size;
  
  // Get breakdown by nationality
  const nationalityBreakdown = driversData.reduce((acc, driver) => {
    acc[driver.nationality] = (acc[driver.nationality] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  // Get most successful drivers
  const championDrivers = driversData.filter(driver => driver.championships > 0).length;
  const raceWinners = driversData.filter(driver => driver.raceWins > 0).length;
  const podiumFinishers = driversData.filter(driver => driver.podiums > 0).length;
  
  return {
    totalDrivers,
    totalChampionships,
    totalCareerWins,
    totalCareerPodiums,
    totalNationalities,
    championDrivers,
    raceWinners,
    podiumFinishers,
    nationalityBreakdown,
    nationalitiesList: Array.from(nationalities).sort()
  };
};

export const driverStats = getDriverStatistics();