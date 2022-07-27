import React from 'react';
import hogueraAnimada from '../../assets/hoguera_animada.gif';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Get Ready for an Adventure</h1>
      <img alt="gif" src={hogueraAnimada} />
    </div>
  );
};

Home.displayName = 'Home';

export default Home;
