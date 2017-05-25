import React, { Component, PropTypes } from "react";
import { Slider, Section, ExampleBlock } from "../components";

export const sliderProps = [
  {
    name: "range",
    type: "Object",
    description: "`{ min: Number, max: Number }`"
  }, {
    name: "start",
    type: "Array",
    description: "Start point for handles"
  }, {
    name: "margin",
    type: "Number",
    description: "Margin between handles"
  }, {
    name: "connect",
    type: "Boolean",
    description: "Display a colored bar between the handles"
  }, {
    name: "step",
    type: "Number",
    description: "Amount to move handles when dragging"
  }, {
    name: "onChange",
    type: "Function",
    description: "Callback when slider changed<br>`(values, handle, unencoded, tap, positions) => {}`"
  }, {
    name: "onSlide",
    type: "Function",
    description: "Callback when slider is changing<br>`(values, handle, unencoded, tap, positions) => {}`"
  }
]

class SliderScreen extends Component {
  handleChange = (values, handle, unencoded, tap, positions) => {
    console.log("slider changed", values);
  }

  handleSlide = (values, handle, unencoded, tap, positions) => {
    console.log("slider is being changed", values);
  }

  render() {
    return (
      <Section title="Slider">
        <Section>
          <Slider
            range={{ min: 0, max: 5000 }}
            start={[1000, 2000]}
            margin={50}
            connect={true}
            step={50}
            onChange={this.handleChange}
            onSlide={this.handleSlide}
          />
        </Section>
        <ExampleBlock
          componentProps={sliderProps}
          importStatement={{
            named: ["Slider"],
            source: "https://github.com/reactioncommerce/reaction/blob/master/imports/plugins/core/ui/client/components/slider/slider.js"
          }}
        >
          <Slider
            range={{ min: 0, max: 5000 }}
            start={[0, 2000]}
            margin={50}
            connect={true}
            step={50}
            onChange={this.handleChange}
            onSlide={this.handleSlide}
          />
        </ExampleBlock>
      </Section>

    );
  }
}

export default SliderScreen;
