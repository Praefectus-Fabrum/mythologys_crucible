import React from 'react';
import UserCalls from './components/userCalls';

//* RCT* --> literals.logout should not be any type

const ApiCalls: React.FC = () => {
  return (
    <div>
      <h1>For testing  all api calls</h1>
      <UserCalls />
    </div>
  );
};

ApiCalls.displayName = 'ApiCalls';

export default ApiCalls;
