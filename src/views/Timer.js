import Timer from "react-compound-timer";
import ReactDOM from "react-dom";
import React, { Component, PropTypes } from "react";
const OPTIONS = { prefix: "seconds elapsed!", delay: 100 };

class SessionTimer extends React.Component {
  /* delay is just the delay on showing the update of the timer */
  render() {
    return (
      <div>
        <Timer>
          <h4>
            <Timer.Hours />:
            <Timer.Minutes />:
            <Timer.Seconds />
          </h4>
        </Timer>
      </div>
    );
  }
}

export default SessionTimer;
// ReactDOM.render( <TestComponent />, document.getElementById('root') )
