import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h2>Welcome to React App</h2>
      <h3>Date : {new Date().toDateString()}</h3>
    </div>
  );
};

export default HomePage;
