import React, { Component } from "react";
import { Checkbox, Section } from "../components"


class CheckboxScreen extends Component {
  render() {
    return (
      <Section title="Checkbox">
        <Checkbox
          label="Check Box"
        />
      </Section>
    )
  }
}

export default CheckboxScreen
