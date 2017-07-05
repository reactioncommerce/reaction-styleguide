import React, { Component } from "react";
import { List, ListItem, Section, ExampleBlock, Text  } from "../components"
import * as PTD from "../../lib/propTypeDefinitions";

const listItemProps = [
  PTD.actionTypeForList,
  PTD.i18nKeyLabel,
  // PTD.icon,
  PTD.label,
  PTD.onSwitchChange,
  PTD.switchName,
  PTD.switchOn,
  PTD.valueAny
]

class ListsScreen extends Component {
  state ={
    on: false
  }

  handleSwitchChange = (event, isChecked) => {
    this.setState({
      on: isChecked
    });
  }

  render() {
    return (
      <Section title="Lists">
        <List>
          <ListItem label="My List Item 1" />
          <ListItem label="My List Item 2" actionType="arrow"/>
          <ListItem
            label="My List Item 3"
            actionType="switch"
            onSwitchChange={this.handleSwitchChange}
            switchOn={this.state.on}
          />
        </List>

        <ExampleBlock
          title="List with different action types"
          importStatement={{
            named: ["List, ListItem"],
            path: "core/ui/client/components",
            source: "/imports/plugins/core/ui/client/components/list/list.js"
          }}
        >
          <List>
            <ListItem label="My List Item 1" />
            <ListItem label="My List Item 2" actionType="arrow"/>
            <ListItem
              label="My List Item 3"
              actionType="switch"
              onSwitchChange={this.handleSwitchChange}
              switchOn={this.state.on}
            />
          </List>
        </ExampleBlock>

        <ExampleBlock
          title="List Item"
          componentProps={listItemProps}
          importStatement={{
            named: ["List, ListItem"],
            path: "core/ui/client/components",
            source: "/imports/plugins/core/ui/client/components/list/listItem.js"
          }}
          wrapperComponent={<List />}
        >
            <ListItem label="My List Item 1" />
        </ExampleBlock>
      </Section>
    )
  }
}

export default ListsScreen
