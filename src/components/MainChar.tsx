import React from "react";

import "../scss/mainchar/mainchar.scss";
import Chart from "./Chart";

const MainChar: React.FC = () => {
  return (
    <div className="component">
      <div className="component__text">
        <h2>Spending - Last 7 days</h2>
      </div>
      <Chart />
      <hr />
      <div className="component__bottom">
        <div className="component__bottom__text1">
          <p>Total this month</p>
          <h4>$478.33</h4>
        </div>
        <div className="component__bottom__text2">
          <h4>+2.4%</h4>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
};

export default MainChar;
