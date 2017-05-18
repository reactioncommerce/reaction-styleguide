import React, { Component } from "react";
import { MultiSelect, Section } from "../components"

class MultiSelectScreen extends Component {
  onChange = (values) => {
    console.log("Values are ", values);
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
          value={this.props.value}
          onChange={this.onChange}
        />
      </Section>
    );
  }
}

export default MultiSelectScreen
