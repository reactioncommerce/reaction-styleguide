import React, { Component } from "react";
import { List, ListItem, Section } from "../components"


class ListsScreen extends Component {
  render() {
    return (
      <Section title="Checkbox">
        <List>
          <ListItem label="My List Item" />
        </List>
      </Section>
    )
  }
}

export default ListsScreen
