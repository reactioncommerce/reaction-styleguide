import React, { Component } from "react";
import {
  Button, FlatButton, IconButton, Divider, Card,
  CardBody, CardTitle, CardHeader, Section,
  ExampleBlock, Translation
} from "../components"



const componentProps = [
  {
    name: "expandable",
    type: "Boolean",
    description: "Card is expandable",
    control: {
      type: "switch",
      value: false
    }
  },
]

const cardHeaderProps = [
  {
    name: "actAsExpander",
    type: "Boolean",
    description: "When clicked should expand card elements that are `expandable={true}`",
    control: {
      type: "switch",
      value: false
    }
  },
  {
    name: "title",
    type: "text",
    description: "Card title",
    control: {
      type: "text",
      value: "Card Title"
    }
  },
]


class CardScreen extends Component {
  render() {
    return (
      <Section title="Cards">
        <ExampleBlock componentProps={componentProps}>
          <Card>
            <CardHeader title="Card Title" />
            <CardBody>
              {"Body of Card"}
            </CardBody>
          </Card>
        </ExampleBlock>

        <h3><Translation defaultValue="Card Header" i18nKey="styleguide.cardHeader" /></h3>
        <ExampleBlock
          componentProps={cardHeaderProps}
          wrapperComponent={<Card />}
        >
          <CardHeader title="Card Title" />
        </ExampleBlock>

        <ExampleBlock
          componentProps={componentProps}
          wrapperComponent={<Card />}
        >
          <CardTitle title="Card Title" />
        </ExampleBlock>

        <ExampleBlock
          componentProps={componentProps}
          wrapperComponent={<Card />}
        >
          <CardBody>
            {"Body of Card"}
          </CardBody>
        </ExampleBlock>
      </Section>
    )
  }
}

export default CardScreen
