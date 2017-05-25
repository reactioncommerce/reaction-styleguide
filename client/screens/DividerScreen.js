import React, { Component } from "react";
import { Divider, Section, ExampleBlock } from "../components"
import * as PTD from "../../lib/propTypeDefinitions";

const componentProps = [
  PTD.i18nKeyLabel,
  PTD.label,
]

class DividerScreen extends Component {
  render() {
    return (
      <Section title="Divider">
        <Section>
          <Divider />
          <Divider label="Text In Middle" />
        </Section>


        <ExampleBlock componentProps={componentProps}>
          <Divider />
        </ExampleBlock>
      </Section>
    )
  }
}

export default DividerScreen
