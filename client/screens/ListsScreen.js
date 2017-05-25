import React, { Component } from "react";
import { List, ListItem, Section, ExampleBlock, Text  } from "../components"
import * as PTD from "../../lib/propTypeDefinitions";


class ListsScreen extends Component {
  render() {
    return (
      <Section title="Lists">
        <List>
          <ListItem label="My List Item 1" />
          <ListItem label="My List Item 2" />
          <ListItem label="My List Item 3" />
        </List>
      </Section>
    )
  }
}

export default ListsScreen
