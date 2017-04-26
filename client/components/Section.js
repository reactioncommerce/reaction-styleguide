import React, { Component } from "react";

const styles = {
  base: {
    maxWidth: "1140px",
    marginBottom: 60
  }
}

class Section extends Component {
  render() {
    return (
      <div style={styles.base}>
        <h2>{this.props.title}</h2>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Section
