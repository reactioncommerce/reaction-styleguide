import React, { Component } from "react";
import Radium from "radium";
import { Alerts, Alert, Section, PropTable, Highlight } from "../components"

const styles = {
  base: {
    width: "100%"
  }
}

class ExampleBlock extends Component {
  render() {
    return (
      <div>
        <div style={styles.base}>
          <Highlight>
            {this.props.children}
          </Highlight>
          <div>
            {this.props.children}
          </div>
        </div>


        <PropTable componentProps={this.props.componentProps}/>
      </div>

    )
  }
}

export default Radium(ExampleBlock);
