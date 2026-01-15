import { useState, useEffect } from 'react';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset for demo purposes
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-3">
      <div className="text-center">
        <div className="bg-burgundy text-primary-foreground rounded-lg w-16 h-16 flex items-center justify-center">
          <span className="text-2xl font-bold font-serif">{formatNumber(timeLeft.hours)}</span>
        </div>
        <span className="text-xs text-muted-foreground mt-1 block">Horas</span>
      </div>
      <span className="text-2xl font-bold text-burgundy">:</span>
      <div className="text-center">
        <div className="bg-burgundy text-primary-foreground rounded-lg w-16 h-16 flex items-center justify-center">
          <span className="text-2xl font-bold font-serif">{formatNumber(timeLeft.minutes)}</span>
        </div>
        <span className="text-xs text-muted-foreground mt-1 block">Minutos</span>
      </div>
      <span className="text-2xl font-bold text-burgundy">:</span>
      <div className="text-center">
        <div className="bg-burgundy text-primary-foreground rounded-lg w-16 h-16 flex items-center justify-center">
          <span className="text-2xl font-bold font-serif">{formatNumber(timeLeft.seconds)}</span>
        </div>
        <span className="text-xs text-muted-foreground mt-1 block">Segundos</span>
      </div>
    </div>
  );
};
