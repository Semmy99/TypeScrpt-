import * as React from "react";
import "./style.css";

class Preloader extends React.Component {
  render() {
    return (
      <div className="loader">
        <div className="l_main">
          <div className="l_square">
            <span />
            <span />
            <span />
          </div>
          <div className="l_square">
            <span />
            <span />
            <span />
          </div>
          <div className="l_square">
            <span />
            <span />
            <span />
          </div>
          <div className="l_square">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    );
  }
}

export default Preloader;
