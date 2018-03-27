import React from 'react';

const Home = ({ onClick }) => (
  <div className="container-fluid justify-content-center" >
    <h4> Start Test </h4>
    <button type="button" className="btn btn-primary" onClick={onClick}> click </button>
  </div>
);

export default Home;