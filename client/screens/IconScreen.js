import React, { Component } from "react";
import { Icon, Section, ExampleBlock, Text } from "../components"
import * as PTD from "../../lib/propTypeDefinitions";

export const iconProps = [
  {
    ...PTD.icon,
    control: {
      type: "select",
      value: "fa fa-star",
      options: [
        { label: "fa fa-plus", value: "fa fa-plus" },
        { label: "fa fa-plus", value: "fa fa-star" },
        { label: "icon icon-reaction", value: "icon-reaction-logo" }
      ]
    }
  }
];

class IconScreen extends Component {
  createMarkup(text) {
    return {
      __html: converter.makeHtml(text)
    }
  }

  render() {
    return (
      <Section title="Icon">
        <Section>
          <Text>
            {`Icons from [font awesome](http://fontawesome.io/) and custom.`}
          </Text>

          <Icon icon="fa fa-star" />
        </Section>

        <ExampleBlock
          componentProps={iconProps}
          importStatement={{
            named: ["Icon"],
            path: "core/ui/client/components"
          }}
        >
          <Icon icon="fa fa-star" />
        </ExampleBlock>
      </Section>
    )
  }
}

export default IconScreen
