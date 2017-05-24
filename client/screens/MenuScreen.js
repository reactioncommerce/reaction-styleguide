import React, { Component } from "react";
import { Menu, MenuItem, Section, ExampleBlock } from "../components"
import * as PTD from "../../lib/propTypeDefinitions";

export const menuProps = [
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

export const menuItemProps = [
    {
      ...PTD.acive,
      description: "Is active. Automatic if using as child of `Menu` component with `value`"
    },
    PTD.className,
    PTD.disabled,
    PTD.eventAction,
    PTD.i18nKeyLabel,
    PTD.i18nKeySelectedLabel,
    PTD.icon,
    PTD.label,
    {
      ...PTD.onClick,
      description: "On menu item click. `(event, value, menuItem) => {}`"
    },
    {
      name: "selectionLabel",
      type: "String",
      description: "Selected label for menu button (implementation required)"
    },
    PTD.valueAny
];


class MediaScreen extends Component {
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
      <Section title="Menu">
        <Section>
          <Menu
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
          </Menu>
        </Section>

        <ExampleBlock
          title="Menu with items"
          componentProps={menuProps}>
          <Menu
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
          </Menu>
        </ExampleBlock>

        <ExampleBlock
          title="Menu Item"
          componentProps={menuItemProps}
          wrapperComponent={<Menu />}
        >
          <MenuItem
            i18nKeyLabel="app.public"
            icon="fa fa-unlock"
            label="Public"
            selectLabel="Public"
            value="public"
          />
        </ExampleBlock>

      </Section>
    )
  }
}

export default MediaScreen
