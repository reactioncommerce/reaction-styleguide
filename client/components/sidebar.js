import React from "react";
import classnames from "classnames";
import "underscore";
// import s from "underscore.string";
import tocData from "../../lib/tocData"
import { Reaction, Router } from "/client/api"

export default class TableOfContents extends React.Component {

  handleDocNavigation(event) {
    event.preventDefault();

    if (this.props.onDocNavigation) {
      this.props.onDocNavigation(event.currentTarget.href);
    }
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
        const url = Router.pathFor("guidePage", {
          hash: {
            guide: item.name
          }
        });

        return (
          <li key={item.name}>
            <a href={url}>
              {item.label}
            </a>
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
