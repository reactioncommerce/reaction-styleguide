import React, { Component } from "react";
import { TextField } from "/imports/plugins/core/ui/client/components";

class TextfieldScreen extends Component {
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
      <TextField
        i18nKeyLabel={"translation.i18n.key"}
        label="Name"
        onChange={this.handleChange}
        value={this.state.value}
      />
    )
  }
};

export default TextfieldScreen;
