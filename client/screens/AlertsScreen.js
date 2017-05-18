import React, { Component } from "react";
import { Alerts, Alert, Section, PropTable, ExampleBlock } from "../components"


const details = {
  flat: {
    title: "Flat Buttons",
    description: "Buttons with no background or border"
  },
  solid: {
    title: "Solid Buttons",
    description: "Buttons with a solid background color"
  },
  outline: {
    title: "Outline Buttons",
    description: "Buttons with an outline, for Admin primarily"
  }
}

const statusNames = [
  "primary",
  "default",
  "info",
  "warning",
  "danger",
]

const bezelStyles = [
  "flat",
  "solid",
  "outline"
]

const alertArray = [
  {
    message: "Something went really wrong",
    mode: "danger",
    options: {
      autoHide: 4000
    }
  },
  {
    message: "Something went wrong",
    mode: "warning",
    options: {
      autoHide: 4000
    }
  }
];

const componentProps = [
  { name: "alerts", type: "Array[Object]", description: "An array of alert objects" }
]

class AlertsScreen extends Component {
  render() {
    return (
      <Section title="Alerts">
        <Alerts alerts={alertArray} />

        <ExampleBlock componentProps={componentProps}>
          <Alerts alerts={alertArray} />
        </ExampleBlock>

      </Section>
    )
  }
}

export default AlertsScreen
