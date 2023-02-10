import React, { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

interface CountDownProps {
  futureDate: number;
}

function CountDown({ futureDate }: CountDownProps) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = dayjs();
      const distance = dayjs(futureDate).diff(now, 'second');

      if (distance < 0) {
        clearInterval(intervalId);
      } else {
        setDays(Math.floor(distance / (60 * 60 * 24)));
        setHours(Math.floor((distance % (60 * 60 * 24)) / (60 * 60)));
        setMinutes(Math.floor((distance % (60 * 60)) / 60));
        setSeconds(distance % 60);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [futureDate]);

  return (
    <div className="count-down">
      <div className="count-down__item">{days < 10 ? `0${days}` : days}</div>
      <div className="count-down__separate">:</div>
      <div className="count-down__item">{hours < 10 ? `0${hours}` : hours}</div>
      <div className="count-down__separate">:</div>
      <div className="count-down__item">
        {minutes < 10 ? `0${minutes}` : minutes}
      </div>
      <div className="count-down__separate">:</div>
      <div className="count-down__item">
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </div>
  );
}

export default CountDown;
