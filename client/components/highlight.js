import React, { Component } from "react";
import { Button, FlatButton, IconButton, Divider } from "../components"
import ReactDOM from "react-dom"
import ReactDOMServer from "react-dom/server"
import hljs from "highlight.js"
import reactElementToJSXString from '../../lib/react-element-to-jsx-string';

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
        hljs.highlightBlock(nodes[i]);
      }
    }
  }

  render() {
    if (this.props.type === "text") {
      return (
        <pre className="sg-example-code inverted">
          <code className={this.props.className}>
            {this.props.children}
          </code>
        </pre>
      )
    }

    return (
      <pre className="sg-example-code">
        <code className={this.props.className}>
          {reactElementToJSXString(this.props.children, {
            displayName: (element) => {
              return element.type.displayName
            }
          })}
        </code>
      </pre>
    )
  }
}

export default Highlight
