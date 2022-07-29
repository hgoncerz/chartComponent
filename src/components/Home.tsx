import React from "react";
import "../scss/style.scss";

import Bar from "../components/Bar";

const Home: React.FC = () => {
  return (
    <div className="main">
      <div className="main__wrap">
        <div className="main__wrap__content">
          <Bar />
        </div>
      </div>
    </div>
  );
};

export default Home;
