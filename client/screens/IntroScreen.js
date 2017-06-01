import React, { Component } from "react";
import Radium from "radium"
import { Divider, Section } from "../components"
import showdown from "showdown";

const converter = new showdown.Converter();

const styles = {
  colors: {
    display: "flex",
    flexWrap: "wrap"
  },
  colorGroup: {
    flex: "1 1 auto",
    minWidth: "33%",
  },
  colorCircles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1rem"
  },
  colorValues: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  circleSM: {
    width: 30,
    height: 30,
    borderRadius: 15,
    zIndex: 1
  },
  input: {
    border: "none",
    backgroundColor: "transparent",
    textAlign: "center",
    width: "90px"
  }
}

const introCopy = `
The Reaction Style Guide and component library is a documentation of the components we’ve used to build Reaction. Along with a component library, we will be including design guidelines and examples for how we use styles, components, and patterns.

Our goals with the style guide are threefold:

1. To document our components, patterns, and design guidelines, all in in one place.
2. Expose where we are currently being inconsistent.
3. Enable more consistency in our code and design as we move forward.

Our style guide is very much a living and evolving document—this is only the beginning. Transparency and constant iteration are core principles of Reaction Commerce, and in that spirit, we wanted to share our style guide as soon as possible.  Check back often as we continue to iterate and evolve the Reaction Style Guide. Please feel free to hop into our [Design Gitter Room](https://gitter.im/reactioncommerce/design) with any questions or suggestions you may have.
`

class IntroScreen extends Component {
  state = {
    checked: true
  }

  createMarkup() {
    return {
      __html: converter.makeHtml(introCopy)
    }
  }

  render() {
    return (
      <Section title="Intro">
        <div dangerouslySetInnerHTML={this.createMarkup()} />
      </Section>
    )
  }
}

export default Radium(IntroScreen)
