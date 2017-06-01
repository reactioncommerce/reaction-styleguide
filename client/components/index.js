export * from "/imports/plugins/core/ui/client/components";

export { default as Section } from "./Section"
export { default as Highlight } from "./highlight"
export { default as Header } from "./header"
export { default as Sidebar } from "./sidebar"
export { default as PropTable } from "./propTable"
export { default as ExampleBlock } from "./ExampleBlock"
export { default as Text } from "./Text"


// Update display names for all reaction components
// TODO: Add display names to the action components in Reaction
import * as RUIComponents from "/imports/plugins/core/ui/client/components";

RUIComponents.Alerts.displayName = "Alerts";
RUIComponents.Alert.displayName = "Alert";
RUIComponents.Button.displayName = "Button"
RUIComponents.Card.displayName = "Card";
RUIComponents.CardTitle.displayName = "CardTitle";
RUIComponents.CardBody.displayName = "CardBody";
RUIComponents.CardHeader.displayName = "CardHeader";
RUIComponents.Checkbox.displayName = "Checkbox"
RUIComponents.Divider.displayName = "Divider";
RUIComponents.DropDownMenu.displayName = "DropDownMenu";
RUIComponents.IconButton.displayName = "IconButton";
RUIComponents.Icon.displayName = "Icon";
RUIComponents.List.displayName = "List";
RUIComponents.ListItem.displayName = "ListItem";
RUIComponents.MediaGallery.displayName = "MediaGallery";
RUIComponents.MediaItem.displayName = "MediaItem";
RUIComponents.Menu.displayName = "Menu";
RUIComponents.Metadata.displayName = "Metadata";
RUIComponents.Metafield.displayName = "Metafield";
RUIComponents.MultiSelect.displayName = "MultiSelect";
RUIComponents.Popover.displayName = "Popover";
RUIComponents.Slider.displayName = "Slider";
RUIComponents.Switch.displayName = "Switch";
RUIComponents.Tooltip.displayName = "Tooltip";
RUIComponents.Translation.displayName = "Translation";
