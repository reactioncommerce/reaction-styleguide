
import * as Screens from "../client/screens"

export const Pages = {
  "index": Screens.TypographyScreen,
  "buttons": Screens.ButtonsScreen,
  "cards": Screens.CardScreen,
  "colors": Screens.ColorScreen,
  "switch": Screens.SwitchScreen,
  "typography": Screens.TypographyScreen,
}

export default {
  groups: [
    {
      label: "Components",
      items: [
        { label: "Buttons", name: "buttons" },
        { label: "Cards", name: "cards" },
        { label: "Colors", name: "colors" },
        { label: "Switch", name: "switch" },
        { label: "Typography", name: "typography" },
      ]
    }
  ]
}
