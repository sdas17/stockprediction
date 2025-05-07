import React from 'react';
import Button from '../assets/resuable/Button';

const Main = () => {
  return (
    <div className="container">
      <div className="p-5 text-center bg-dark rounded mt-5">
        <h1 className="text-light">Stock Prediction Portal</h1>
        <p className="lead text-light">
          This stock prediction application utilizes machine learning techniques, specifically a Keras-based LSTM model, integrated within the Django framework. 
          It forecasts future stock prices by analyzing 100-day and 200-day moving averages—key indicators widely used by analysts to support trading and investment decisions.
        </p>
        <Button  classample="btn btn-danger" text="Get Prediction"/>
      </div>
    </div>
  );
};

export default Main;
