import React, { useState } from "react";

import "../scss/chartColumn/chartcolumn.scss";

interface Props {
  day: string;
  amount: number;
}

let today = new Date();
let date = today.getDay();

let dayList = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const ChartColumn: React.FC<Props> = ({ day, amount }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return dayList[date] !== day ? (
    <div className="specific">
      <p
        style={{
          background: isHovering ? "hsl(25, 47%, 15%)" : "",
          color: isHovering ? "white" : " ",
          padding: isHovering ? "3px" : "",
          borderRadius: isHovering ? "5px" : "",
          display: isHovering ? "block" : "none",
        }}
      >
        ${(amount / 2.4).toFixed(2)}
      </p>
      <div
        style={{
          height: amount.toString() + "px",
          background: isHovering ? " hsl(10, 93%, 83%)" : "hsl(10, 79%, 65%)",
          width: "45px",
          borderRadius: "5px",
          marginBottom: "5px",
          margin: "0 8px",
          cursor: "pointer",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
    </div>
  ) : (
    <div className="specific">
      <p
        style={{
          background: isHovering ? "hsl(25, 47%, 15%)" : "",
          color: isHovering ? "white" : " ",
          padding: isHovering ? "3px" : "",
          borderRadius: isHovering ? "5px" : "",
          display: isHovering ? "block" : "none",
        }}
      >
        {(amount / 2.4).toFixed(2)}
      </p>
      <div
        style={{
          height: amount.toString() + "px",
          background: isHovering ? "hsl(186, 66%, 80%) " : "hsl(186, 34%, 60%)",
          width: "45px",
          borderRadius: "5px",
          marginBottom: "5px",
          margin: "0 9px",
          cursor: "pointer",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
    </div>
  );
};

export default ChartColumn;
