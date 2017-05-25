import React, { Component } from "react";
import { Popover, Button, Section, ExampleBlock } from "../components"
import * as PTD from "../../lib/propTypeDefinitions";

export const popoverProps = [
  {
    name: "attachment",
    type: "String",
    description: "Default value: `\"bottom left\"`",
    control: {
      type: "text",
      value: ""
    }
  }, {
    name: "buttonElement",
    type: "Node",
    description: "Custom button element (optional). Default is a button with a down arrow. Best to use `<Button />` component."
  }, {
    name: "children",
    type: "Node",
    description: "Popover contents"
  }, {
    name: "onChange",
    type: "Function",
    description: "Show the arrow for the actual popover"
  }, {
    name: "showDropdownButton",
    type: "Boolean",
    description: "Shows a dropdown button adjacent the buttonElement as a button group",
    control: {
      type: "switch",
      value: true
    }
  }, {
    name: "targetAttachment",
    type: "String",
    description: "Default value `\"top left\"`",
    control: {
      type: "text",
      value: ""
    }
  }
];

class PopoverScreen extends Component {

  render() {
    return (
      <Section title="Popover">
        <section>
          <Popover
            buttonElement={<Button label="My Button"/>}
          >
            {"My Popover"}
          </Popover>

          <Popover
            buttonElement={<Button label="My Button"/>}
            showDropdownButton={true}
          >
            {"My Popover"}
          </Popover>
        </section>
        <ExampleBlock
          componentProps={popoverProps}
          importStatement={{
            named: ["Popover, Button"],
            source: "/imports/plugins/core/ui/client/components/popover/popover.js"
          }}
        >
          <Popover
            buttonElement={<Button label="My Button"/>}
          >
            {"My Popover"}
          </Popover>
        </ExampleBlock>
      </Section>
    )
  }
}

export default PopoverScreen
