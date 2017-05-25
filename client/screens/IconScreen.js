import React, { Component } from "react";
import { Icon, Section, ExampleBlock, Text } from "../components"
import * as PTD from "../../lib/propTypeDefinitions";
import { composeWithTracker } from "/lib/api/compose"
import { Packages } from "/lib/collections"
import { uniq } from "lodash"

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

          <div>
            {this.props.icons.map((icon, index) => {
              return (
                <span style={{padding: 5}} key={index}>
                  <Icon icon={icon} />
                </span>
              )
            })}
          </div>
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


function composer(props, onData) {
  const icons = Packages.find({}).map((packageData) => {
    if (typeof packageData.icon === "string" && packageData.icon.length) {
      return packageData.icon;
    }
  });

  onData(null, {
    icons: uniq(icons)
  });
}

export default composeWithTracker(composer)(IconScreen)
