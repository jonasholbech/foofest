import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(5 * 60); // 5 minutes in seconds

  useEffect(() => {
    // Decrease the timer every second
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clean up the timer when the component is unmounted or seconds reach 0
    return () => clearInterval(timer);
  }, []);

  // Convert remaining seconds to minutes and seconds
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div>
      {minutes}:{remainingSeconds < 10 ? '0' : ''}
      {remainingSeconds}
    </div>
  );
}

export default Timer;