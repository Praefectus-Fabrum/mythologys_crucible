import React from 'react';
import mythologyCircleTransparent from 'assets/mythology_circle_transparent.png';

const Home: React.FC = () => {
  return (
    <div className='home'>
      <h1 className='title'>Get Ready for an Adventure</h1>
      <img className='logo_prov' alt="png" src={mythologyCircleTransparent} />
    </div>
  );
};

Home.displayName = 'Home';

export default Home;
