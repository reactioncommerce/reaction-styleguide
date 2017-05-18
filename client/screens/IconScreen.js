import React, { Component } from "react";
import { Icon, Section } from "../components"


class IconScreen extends Component {
  state = {
    value: ""
  }

  handleChange = (event, value) => {
    this.setState({
      value: value
    });
  }

  render() {
    return (
      <Section title="Dropdown Menu">
        <Icon icon="fa fa-star" />
      </Section>
    )
  }
}

export default IconScreen
