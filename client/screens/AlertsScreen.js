import React, { Component } from "react";
import { Alerts, Alert, Section } from "../components"


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
    mode: "error",
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

class AlertsScreen extends Component {
  render() {
    return (
      <Section title="Switch">
        <Alerts alerts={alertArray} />
      </Section>
    )
  }
}

export default AlertsScreen
