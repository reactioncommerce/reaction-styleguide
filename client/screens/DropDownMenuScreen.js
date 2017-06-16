import React, { Component } from "react";
import { DropDownMenu, MenuItem, Section, ExampleBlock } from "../components"
import * as PTD from "../../lib/propTypeDefinitions";

const componentProps = [
  {
    name: "buttonElement",
    type: "node",
    description: "Custom button element (optional) Default is a button with a down arrow",
  },
  {
    name: "attachment",
    type: "String",
    description: "default value: `\"top\"`",
    control: {
      type: "text",
      value: ""
    }
  },
  {
    ...PTD.onChange,
    description: "Dropdown menu change. `(event, value, menuItem) => {}`"
  },
  PTD.valueSBN
];

class DividerScreen extends Component {
  state = {
    value: ""
  }

  handleChange = (event, value) => {
    this.setState({
      value: value
    });
  }

  render() {
    return (
      <Section title="Dropdown Menu">
        <Section>
          <DropDownMenu
            onChange={this.handleChange}
            value={this.state.value}
          >
            <MenuItem
              i18nKeyLabel="app.public"
              icon="fa fa-unlock"
              label="Public"
              selectLabel="Public"
              value="public"
            />
            <MenuItem
              i18nKeyLabel="app.private"
              label="Private"
              icon="fa fa-lock"
              selectLabel="Public"
              value="private"
            />
          </DropDownMenu>
        </Section>

        <ExampleBlock
          componentProps={componentProps}
          importStatement={{
            named: ["DropDownMenu", "MenuItem"],
            path: "core/ui/client/components",
            source: "/imports/plugins/core/ui/client/components/menu/dropDownMenu.js"
          }}
        >
          <DropDownMenu
            onChange={this.handleChange}
            value={this.state.value}
          >
            <MenuItem
              i18nKeyLabel="app.public"
              icon="fa fa-unlock"
              label="Public"
              selectLabel="Public"
              value="public"
            />
            <MenuItem
              i18nKeyLabel="app.private"
              label="Private"
              icon="fa fa-lock"
              selectLabel="Public"
              value="private"
            />
          </DropDownMenu>
        </ExampleBlock>

      </Section>
    )
  }
}

export default DividerScreen
