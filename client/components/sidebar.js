import React, { Component } from "react";
import classnames from "classnames";
import "underscore";
// import s from "underscore.string";
import tocData from "../../lib/tocData"
import { Reaction, Router } from "/client/api"



class TOCLink extends Component {
  handleClick = (event) => {
    event.preventDefault();

    Router.go("guidePage", {
      guide: this.props.item.name
    })
  }
  render() {
    const url = Router.pathFor("guidePage", {
      hash: {
        guide: this.props.item.name
      }
    });

    return (
      <a href={url} onClick={this.handleClick}>
        {this.props.item.label}
      </a>
    )
  }
}


export default class TableOfContents extends React.Component {

  handleDocNavigation(name) {
    event.preventDefault();
    console.log(event.currentTarget.href);
    Router.go(event.currentTarget.href);
  }

  render() {
    const classes = classnames({
      redoc: true,
      sidebar: true,
      visible: this.props.isMenuVisible
    });
    const prefix = Reaction.getShopPrefix()

    const menu = tocData.groups.map((group) => {
      const items = group.items.map((item) => {




        return (
          <li key={item.name}>
            <TOCLink item={item} />
          </li>
        )
      })

      return (
        <div>
          <h4>{group.label}</h4>
          <ul>
            {items}
          </ul>
        </div>
      )
    })

    return (
      <div className={classes}>
        <div className="menu">
          {menu}
        </div>
      </div>
    );
  }
}
