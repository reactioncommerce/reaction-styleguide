import React, { Component } from "react";
// import ButtonsScreen from "./ButtonsScreen";
// import CardScreen from "./CardScreen";
// import SwitchScreen from "./SwitchScreen";
// import ColorScreen from "./ColorScreen";
// import TypographyScreen from "./TypographyScreen";
import Helmet from "react-helmet";

import { Router } from "/client/api";
import { Header, Sidebar } from "../components";
import { Pages } from "../../lib/tocData";

import Radium from "radium"

const styles = {
  base: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    overflow: "hidden"
  }
}

class Playground extends Component {
  render() {

    const guidePageName = Router.getParam("guide");
    const pageComponent = Pages[guidePageName];

    let element

    if (pageComponent) {
      element = React.createElement(pageComponent)
    }

    return (
      <div style={styles.base}>
        <Helmet />
        <Header />

        <div
          style={{
            display: "flex",
            flex: "1 1 auto"
          }}
        >
          <Sidebar />
          <div
            style={{
              padding: 60,
              width: "100%",
              flex: "1 1 auto",
              overflow: "auto",
              backgroundColor: "#fff"
            }}
          >
            {element}
          </div>
        </div>
      </div>
    )
  }
}

export default Radium(Playground)
