
import * as Screens from "../client/screens"
import ButtonsScreen from "../client/screens/ButtonsScreen"

export const Pages = {
  "index": Screens.TypographyScreen,
  "button": Screens.ButtonsScreen,
  "iconButton": Screens.IconButtonScreen,
  "cards": Screens.CardScreen,
  "colors": Screens.ColorScreen,
  "switch": Screens.SwitchScreen,
  "typography": Screens.TypographyScreen,
  "alerts": Screens.AlertsScreen,
  "checkbox": Screens.CheckboxScreen,
  "divider": Screens.DividerScreen,
  "dropdown": Screens.DropDownMenuScreen,
  "icon": Screens.IconScreen,
  "lists": Screens.ListsScreen,
  "media": Screens.MediaScreen,
  "menu": Screens.MenuScreen,
  "metadata": Screens.MetadataScreen,
  "multiselect": Screens.MultiSelectScreen,
  "popover": Screens.PopoverScreen,
  "textfield": Screens.TextfieldScreen,
  "tooltip": Screens.TooltipScreen,
  "translation": Screens.TranslationScreen,
  "slider": Screens.SliderScreen,
}


export default {
  groups: [
    {
      label: "Styles",
      items: [
        { label: "Typography", name: "typography" },
        { label: "Color", name: "colors" },
      ]
    },
    {
      label: "Components",
      items: [
        { label: "Alerts", name: "alerts" },
        {
          label: "Buttons",
          name: "buttons",
          "items": [
            { label: "Button", name: "button" },
            { label: "Icon Button", name: "iconButton" },
          ]
        },
        { label: "Cards", name: "cards" },
        { label: "Checkbox", name: "checkbox" },
        { label: "Divider", name: "divider" },
        {
          label: "Menus",
          name: "menus",
          "items": [
            { label: "Menu", name: "menu" },
            { label: "DropDown Menu", name: "dropdown" }
          ]
        },
        { label: "Icon",  name: "icon" },
        { label: "Lists", name: "lists" },
        { label: "Media Gallery", name: "media" },
        { label: "Metadata", name: "metadata" },
        { label: "MultiSelect", name: "multiselect" },
        { label: "Popover", name: "popover" },
        { label: "Slider", name: "slider" },
        { label: "Switch", name: "switch" },
        { label: "Textfield", name: "textfield" },
        { label: "Tooltip", name: "tooltip" },
        { label: "Translation", name: "translation" }
      ]
    }
  ]
}
