import React, { Component } from "react";
import showdown from "showdown";

const converter = new showdown.Converter();

class Text extends Component {
  createMarkup(text) {
    return {
      __html: converter.makeHtml(text)
    }
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={this.createMarkup(this.props.children)} />
    )
  }
}

export default Text;
