import React, { Component } from "react";
import { Checkbox, Section, ExampleBlock } from "../components";
import * as PTD from "../../lib/propTypeDefinitions";

const componentProps = [
  PTD.i18nKeyLabel,
  PTD.checked,
  {
    ...PTD.onChange,
    description: "Change callback params (event, isInputChecked)"
  },
  PTD.label,
];

class CheckboxScreen extends Component {
  state = {
    checked: false
  }

  handleCheck = (event, isInputChecked) => {
    this.setState({
      checked: isInputChecked
    });
  }

  render() {
    return (
      <Section title="Checkbox">

        <Section>
          <Checkbox
            label="Check Box"
            onChange={this.handleCheck}
          />
        </Section>

        <ExampleBlock componentProps={componentProps}>
          <Checkbox
            label="Check Box"
          />
        </ExampleBlock>
      </Section>
    )
  }
}

export default CheckboxScreen;
