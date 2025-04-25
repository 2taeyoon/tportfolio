import { useEffect, useState } from 'react';

export const useKoreanTime = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateKoreanTime = () => {
      const now = new Date();

			const koreanTime = new Date(now.getTime() + 9 * 60 * 60 * 1000);

      const year = koreanTime.getUTCFullYear();
      const month = (koreanTime.getUTCMonth() + 1).toString().padStart(2, '0');
      const date = koreanTime.getUTCDate().toString().padStart(2, '0');

      const hours = koreanTime.getUTCHours();
      const minutes = koreanTime.getUTCMinutes().toString().padStart(2, '0');
      const formattedHour = hours % 12 || 12;
      const ampm = hours < 12 ? 'AM' : 'PM';

      const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      const dayOfWeek = days[koreanTime.getUTCDay()];

      setCurrentTime(`${year}.${month}.${date} (${dayOfWeek}) ${formattedHour}:${minutes} ${ampm}`);
    };

    updateKoreanTime();
    const interval = setInterval(updateKoreanTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return currentTime;
};