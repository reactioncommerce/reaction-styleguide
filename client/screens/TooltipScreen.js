import React, { Component } from "react";
import { Tooltip, Button } from "/imports/plugins/core/ui/client/components";

class MyReactComponent extends Component {
  state = {
    tooltipIsOpen: false
  }

  handleMouseOut = (event, value) => {
    this.setState({
      tooltipIsOpen: false
    });
  }

  handleMouseOver = (event, value) => {
    this.setState({
      tooltipIsOpen: true
    });
  }

  render() {
    const tooltipContent = (
      <span>{"My Tooltip"}</span>
    );

    return (
      <Tooltip tooltipContent={tooltipContent}>
        <div
          onTagMouseOut={this.handleMouseOut}
          onTagMouseOver={this.handleMouseOver}
        >
          <span>{"Element Text"}</span>
        </div>
      </Tooltip>
    );
  }
};

export default MyReactComponent;
