import React, { Component } from "react";
import { Button, FlatButton, IconButton, Divider } from "../components"
import ReactDOM from "react-dom"
import ReactDOMServer from "react-dom/server"
import hljs from "highlight.js"

class Highlight extends Component {
  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    var domNode = ReactDOM.findDOMNode(this);
    var nodes = domNode.querySelectorAll('pre code');
    if (nodes.length > 0) {
      for (var i = 0; i < nodes.length; i=i+1) {
        window.hljs && window.hljs.highlightBlock(nodes[i]);
      }
    }
  }

  render() {
    return (
      <pre>
        <code className={this.props.className}>
          {ReactDOMServer.renderToString(this.props.children)}
        </code>
      </pre>
    )
  }
}

export default Highlight
