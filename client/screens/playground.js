import React, { Component } from "react";
import ButtonsScreen from "./ButtonsScreen";
import CardScreen from "./CardScreen";
import SwitchScreen from "./SwitchScreen";
import ColorScreen from "./ColorScreen";
import TypographyScreen from "./TypographyScreen";
import Helmet from "react-helmet";

const styles = {
  base: {
    padding: 60
  }
}

class Playground extends Component {
  render() {
    return (
      <div style={styles.base}>
        <Helmet
          link={[
            {rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/tomorrow-night-eighties.min.css"},
          ]}
          script={[
            {src: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/highlight.min.js", type: "text/javascript"},
            {src: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/languages/javascript.min.js", type: "text/javascript"}
          ]}
        />
        <TypographyScreen />
        <ColorScreen />
        <SwitchScreen />
        <CardScreen />
        <ButtonsScreen />
      </div>
    )
  }
}

export default Playground
