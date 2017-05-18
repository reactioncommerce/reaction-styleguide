import React, { Component } from "react";
import { Button, FlatButton, IconButton, Divider, Highlight, Section } from "../components"
import Radium from "radium"

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

class ButtonsScreen extends Component {

  renderIconButtons() {
    return bezelStyles.map((bezelStyle) => {
      const detail = details[bezelStyle];

      const family = statusNames.map((statusName) => {
        return (
          <div style={{display: "flex", padding: 5}}>
            <IconButton
              icon={"fa fa-star"}
              bezelStyle={bezelStyle}
              status={statusName}
            />
          </div>
        )
      })

      return (
        <div>
          <h3>{detail.title}</h3>
          <p>{detail.description}</p>
          <div style={{display: "flex"}}>
            {family}
          </div>
          <Divider />
        </div>
      )
    })
  }

  render() {
    return (
      <Section title="Buttons">
        {this.renderIconButtons()}
      </Section>
    )
  }
}

export default ButtonsScreen
