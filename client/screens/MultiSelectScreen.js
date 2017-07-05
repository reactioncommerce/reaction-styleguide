import React, { Component } from "react";
import { MultiSelect, Section, ExampleBlock } from "../components"
import * as PTD from "../../lib/propTypeDefinitions";

export const multiSelectProps = [
  {
    name: "multi",
    type: "Boolean",
    descripton: "Enable multiple select",
    control: {
      type: "switch",
      value: false
    }
  },
  PTD.onChange,
  {
    name: "options",
    type: "Array[Object]",
    description: "Array of objects: `[{label: \"\", value: \"\"}]`"
  },
  {
    name: "value",
    type: "String | Araay[String]",
    description: "Selected value can be a string, for single select, an array of strings for multi"
  }
];
class MultiSelectScreen extends Component {

  state = {
    values: ["one"]
  }

  onChange = (values) => {
    this.setState({
      values
    });
  }

  render() {
    return (
      <Section title="MultiSelect">
        <MultiSelect
          options={[
            {value: "one", label: "One"},
            {value: "two", label: "Two"},
            {value: "three", label: "Three"}
          ]}
          placeholder={"Please choose"}
          value={this.state.values}
          onChange={this.onChange}
        />

        <ExampleBlock
          componentProps={multiSelectProps}
          importStatement={{
            named: ["MultiSelect"],
            source: "/imports/plugins/core/ui/client/components/multiselect/multiselect.js"
          }}
          title="MultiSelect"
        >
          <MultiSelect
            options={[
              {value: "one", label: "One"},
              {value: "two", label: "Two"},
              {value: "three", label: "Three"}
            ]}
            placeholder={"Please choose"}
            value={this.state.values}
            onChange={this.onChange}
          />
        </ExampleBlock>
      </Section>
    );
  }
}

export default MultiSelectScreen
