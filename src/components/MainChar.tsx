import React from "react";

const MainChar: React.FC = () => {
  return (
    <div className="component">
      <div className="component__text">
        <h1>Spending - Last 7 days</h1>
      </div>
      <p>chart</p>
      <hr />
      <div className="component__bottom">
        <div className="component__bottom__text1">
          <p>Total this month</p>
          <h1>$478.33</h1>
        </div>
        <div className="component__bottom__text2">
          <h6>+2.4%</h6>
          <p>From last mont</p>
        </div>
      </div>
    </div>
  );
};

export default MainChar;
