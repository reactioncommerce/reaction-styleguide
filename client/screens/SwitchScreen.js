import React, { Component } from "react";
import { Switch, FlatButton, IconButton, Divider, Card, CardBody, CardHeader, Section } from "../components"


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

class SwitchScreen extends Component {
  state = {
    checked: true
  }

  render() {
    return (
      <Section title="Switch">
        <Switch
          checked={this.state.checked}
          onChange={(event, isChecked) => {
            this.setState({
              checked: !this.state.checked
            })
          }}
        />
      </Section>
    )
  }
}

export default SwitchScreen
