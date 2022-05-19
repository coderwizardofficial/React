import React, { Component } from "react";

class ClassClick extends Component {
  clicHandler() {
    console.log("Clicked the handler");
  }

  render() {
    return (
      <div>
        <button onClick={this.clicHandler}>Click Me</button>
      </div>
    );
  }
}

export default ClassClick;
