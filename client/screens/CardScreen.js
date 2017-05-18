import React, { Component } from "react";
import { Button, FlatButton, IconButton, Divider, Card, CardBody, CardHeader, Section } from "../components"


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

class CardScreen extends Component {


  renderButtons() {
    return bezelStyles.map((bezelStyle) => {
      const detail = details[bezelStyle];

      const family = statusNames.map((statusName) => {
        return (
          <div style={{display: "flex", padding: 5}}>
            <Button
              label="Button"
              bezelStyle={bezelStyle}
              status={statusName}
            />
          </div>
        )
      })

      return (
        <div>
          <h2>{detail.title}</h2>
          <p>{detail.description}</p>
          <div style={{display: "flex"}}>
            {family}
          </div>
          <Divider />
        </div>
      )
    })
  }

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
          <h2>{detail.title}</h2>
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
      <Section title="Cards">
        <Card>
          <CardHeader title="Card Title" />
          <CardBody>

          </CardBody>
        </Card>
      </Section>
    )
  }
}

export default CardScreen
