import React from 'react';
import mythologyCircleTransparent from 'assets/mythology_circle_transparent.png';

const Home: React.FC = () => {
  return (
    <div className='home'>
      <h1>Get Ready for an Adventure</h1>
      <img alt="png" src={mythologyCircleTransparent} />
    </div>
  );
};

Home.displayName = 'Home';

export default Home;
