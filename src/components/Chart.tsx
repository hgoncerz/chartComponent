import React from "react";
import "../scss/chart/chart.scss";

import data from "../data/data.json";
import ChartColumn from "./ChartColumn";

const Chart: React.FC = () => {
  return (
    <div className="chartarea">
      {data.map((record) => {
        return (
          <div className="chartarea__hover">
            <ChartColumn day={record.day} amount={record.amount * 2.4} />
            <p>{record.day}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Chart;
