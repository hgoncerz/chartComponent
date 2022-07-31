import React from "react";

import "../scss/bar/bar.scss";

const bar: React.FC = () => {
  return (
    <div className="wrap">
      <div className="wrap__content">
        <div className="wrap__content__text">
          <p>My Balance</p>
          <h2>$921.48</h2>
        </div>
        <div className="wrap__content__logo">
          <div className="wrap__content__logo__white"></div>
          <div className="wrap__content__logo__black"></div>
        </div>
      </div>
    </div>
  );
};

export default bar;
