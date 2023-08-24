import React, { useEffect } from 'react';

const ScrollProgress = () => {
  useEffect(() => {
    const updateProgressBar = () => {
      const { scrollTop, scrollHeight } = document.documentElement;
      const scrollPercent = `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}%`;

      const progressBar = document.querySelector("#progress-bar");
      progressBar.style.width = scrollPercent;

      // Konstantní odstín fialové
      const hue = 270; // Odstín fialové
      progressBar.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    };

    window.addEventListener('scroll', updateProgressBar);

    return () => {
      window.removeEventListener('scroll', updateProgressBar);
    };
  }, []);

  return (
    <div className='w-full h-[5px] bg-white relative'>
      <div id="progress-bar" className='h-full bg-blue-500 absolute top-0 left-0' />
    </div>
  );
};

export default ScrollProgress;
