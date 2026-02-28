import { useEffect, useState } from 'react';

interface VisitorStats {
  weeklyVisitors: number;
  totalVisitors: number;
}

const VisitorCounter = () => {
  const [stats, setStats] = useState<VisitorStats>({
    weeklyVisitors: 12, // Valeur de départ pour les visiteurs de la semaine
    totalVisitors: 200 // Commencer à 200 comme demandé
  });

  useEffect(() => {
    // Pour cette version, nous utilisons des valeurs statiques
    // et simulons une augmentation périodique du compteur
    
    const interval = setInterval(() => {
      setStats(prevStats => ({
        weeklyVisitors: prevStats.weeklyVisitors + (Math.random() > 0.5 ? 1 : 0),
        totalVisitors: prevStats.totalVisitors + (Math.random() > 0.7 ? 1 : 0)
      }));
    }, 60000); // Mise à jour toutes les minutes
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center flex-col">
      <h3 className="text-white text-base font-semibold mb-2">Visiteurs</h3>
      <div className="flex space-x-8">
        <div className="flex flex-col items-center">
          <span className="text-accent text-xl font-bold">{stats.weeklyVisitors}</span>
          <span className="text-gray-400 text-xs">Cette semaine</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-accent text-xl font-bold">{stats.totalVisitors}</span>
          <span className="text-gray-400 text-xs">Total</span>
        </div>
      </div>
    </div>
  );
};

export default VisitorCounter;