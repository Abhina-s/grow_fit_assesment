import React from 'react';

const Home = ({ onClick }) => (
  <div className="container" style={{ margin: '100px' }} >
    <h4> Start Test </h4>
    <button type="button" className="btn btn-light" onClick={onClick}> click </button>
  </div>
);

export default Home;
