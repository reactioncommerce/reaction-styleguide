import React, { Component } from "react";
import { Menu, MenuItem, Section } from "../components"

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
    )
  }
}

export default MediaScreen
