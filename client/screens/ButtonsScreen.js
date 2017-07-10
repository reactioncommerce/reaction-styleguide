import React, { Component } from "react";
import { Button, Section, ExampleBlock } from "../components";
import Radium from "radium";

const statusNames = [
  "primary",
  "default",
  "info",
  "warning",
  "danger"
];

const bezelStyles = [
  "flat",
  "solid"
];

const componentProps = [
  {
    name: "active",
    type: "Boolean",
    description: "Active state. true / false",
    control: {
      type: "switch",
      value: false
    }
  },
  {
    name: "bezelStyle",
    type: "String",
    description: "flat | solid",
    control: {
      type: "select",
      value: "solid",
      options: [
        { label: "flat", value: "flat" },
        { label: "solid", value: "solid" }
      ]
    }
  },
  {
    name: "className",
    type: "String | Object",
    description: "“class-name”, or { “class-name”: true }",
    control: {
      type: "text",
      value: ""
    }
  },
  {
    name: "containerStyle",
    type: "Object",
    description: "Style object to apply to Button container"
  },
  {
    name: "disabled",
    type: "Boolean",
    description: "Disabled state. true / false",
    control: {
      type: "switch",
      value: false
    }
  },
  {
    name: "eventAction",
    type: "String",
    description: "adds HTML attribute `data-event-action=\"\"` to button element",
    control: {
      type: "text",
      value: ""
    }
  },
  {
    name: "i18nKeyLabel",
    type: "String",
    description: "i18n key for button label (shows in button)",
    control: {
      type: "text",
      value: ""
    }
  },
  {
    name: "i18nKeyTitle",
    type: "String",
    description: "	i18n key for button title attribute",
    control: {
      type: "text",
      value: ""
    }
  },
  {
    name: "i18nKeyToggleOnLabel",
    type: "String",
    description: "i18n key `on` label for a toggle button",
    control: {
      type: "text",
      value: ""
    }
  },
  {
    name: "i18nKeyTooltip",
    type: "String",
    description: "i18n key for button tooltip",
    control: {
      type: "text",
      value: ""
    }
  },
  {
    name: "icon",
    type: "String",
    description: "Font awesome icon name. e.g. fa fa-star",
    control: {
      type: "text",
      value: ""
    }
  },
  {
    name: "iconAfter",
    type: "Boolean",
    description: "Moves icon behind button label if `true`. default: `false`",
    control: {
      type: "switch",
      value: false
    }
  },
  {
    name: "label",
    type: "Boolean",
    description: "Button label",
    control: {
      type: "text",
      value: "Button"
    }
  },
  {
    name: "onClick",
    type: "Function",
    description: "Callback on click. `(event, value) => {}`"
  },
  {
    name: "onIcon",
    type: "String",
    description: "Icon for the toggle button `on` state",
    control: {
      type: "text",
      value: ""
    }
  },
  {
    name: "onToggle",
    type: "Function",
    description: "Callback when button is toggles. `(event, value) => {}` if value is not set as a prop, true/false is returned instead"
  },
  {
    name: "onValue",
    type: "Any",
    description: "Value for button toggle on state. Passed to the onToggle callback."
  },
  {
    name: "primary",
    type: "Boolean",
    description: "Primary state. true / false",
    control: {
      type: "switch",
      value: false
    }
  },
  {
    name: "status",
    type: "String",
    description: "Sets button state with a string. `primary | success | info | warning | danger | link | cta | default`",
    control: {
      type: "select",
      value: "default",
      options: [
        { label: "primary", value: "primary" },
        { label: "success", value: "success" },
        { label: "info", value: "info" },
        { label: "warning", value: "warning" },
        { label: "danger", value: "danger" },
        { label: "link", value: "link" },
        { label: "cta", value: "cta" },
        { label: "default", value: "default" }
      ]
    }
  },
  {
    name: "tagName",
    type: "String",
    description: "Specify the name of the HTML tag. Default: button. A tag name of a will also set the href=# by default",
    control: {
      type: "text",
      value: ""
    }
  },
  {
    name: "title",
    type: "String",
    description: "Title attribute, use label for actual button text",
    control: {
      type: "text",
      value: ""
    }
  },
  {
    name: "toggle",
    type: "Boolean",
    description: "Allow button to be toggled",
    control: {
      type: "switch",
      value: false
    }
  },
  {
    name: "toggleOn",
    type: "Boolean",
    description: "Button is toggled on",
    control: {
      type: "switch",
      value: false
    }
  },
  {
    name: "toggleOnLabel",
    type: "String",
    description: "Label when button is toggled on",
    control: {
      type: "text",
      value: ""
    }
  },
  {
    name: "tooltip",
    type: "String | Object | Component",
    description: "Button tooltip",
    control: {
      type: "text",
      value: ""
    }
  },
  {
    name: "tooltipPosition",
    type: "String",
    description: "Tooltip position. Default `bottom center`",
    control: {
      type: "text",
      value: ""
    }
  },
  {
    name: "value",
    type: "Any",
    description: "Value to use for `onClick` and `onToggle` callbacks. Value is used for the `off` state when toggling a button",
    control: {
      type: "text",
      value: ""
    }
  }
];

class ButtonsScreen extends Component {

  renderButtons() {
    return bezelStyles.map((bezelStyle) => {
      const family = statusNames.map((statusName) => {
        return (
          <div style={{ display: "flex", padding: 5 }}>
            <Button
              label="Button"
              bezelStyle={bezelStyle}
              status={statusName}
            />
          </div>
        );
      });

      return (
        <div style={{ display: "flex" }}>
          {family}
        </div>
      );
    });
  }

  render() {
    return (
      <Section title="Buttons">
        <Section>
          {this.renderButtons()}
        </Section>

        <ExampleBlock
          componentProps={componentProps}
          importStatement={{
            named: ["Button"],
            source: "/imports/plugins/core/ui/client/components/button/button.jsx"
          }}
        >
          <Button />
        </ExampleBlock>
      </Section>
    );
  }
}

export default Radium(ButtonsScreen);
