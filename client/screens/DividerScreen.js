import React, { Component } from "react";
import { Divider, Section } from "../components"


class DividerScreen extends Component {
  render() {
    return (
      <Section title="Checkbox">
        <Divider />

        <Divider label="Text In Middle" />
      </Section>
    )
  }
}

export default DividerScreen
