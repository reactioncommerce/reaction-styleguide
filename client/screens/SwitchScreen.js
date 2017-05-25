import React, { Component, PropTypes } from "react";
import { Switch, Section, ExampleBlock } from "../components";
import * as PTD from "../../lib/propTypeDefinitions";

export const switchProps = [
  PTD.i18nKeyLabel,
  PTD.label,
]

class SwitchScreen extends Component {
  state = {
    checked: true
  }

  handleCheck = (event, isChecked) => {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    return (
      <Section title="Slider">
        <Section>
          <Switch
            checked={this.state.checked}
            onChange={(event, isChecked) => {

            }}
          />
        </Section>
        <ExampleBlock
          componentProps={switchProps}
          importStatement={{
            named: ["Slider"],
            source: "https://github.com/reactioncommerce/reaction/blob/master/imports/plugins/core/ui/client/components/slider/slider.js"
          }}
        >
          <Switch
            checked={this.state.checked}
            onChange={(event, isChecked) => {
              this.setState({
                checked: !this.state.checked
              })
            }}
          />
        </ExampleBlock>
      </Section>

    );
  }
}

export default SwitchScreen;
