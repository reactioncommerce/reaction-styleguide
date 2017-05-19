import { Router } from "/client/api";
import { ReactionLayout } from "/client/modules/router/main.js";
import { registerComponent } from "/imports/plugins/core/layout/lib/components";
import playground from "./screens/playground";


import { Session } from "meteor/session";

registerComponent({
  name: "reactionUIPlaygroundLayout",
  component: playground
})

/**
 * Misc. App. Configuration
 *
 * A place to put misc. package configurations
 */

// override/set layout
export const DEFAULT_LAYOUT = "reactionUIPlaygroundLayout";

// override/set workflow
export const DEFAULT_WORKFLOW = "coreWorkflow";

// Use this to override just the home Package
// ie: {template: "products"}
export const INDEX_OPTIONS = {
  workflow: "reactionUIPlaygroundWorkflow",
  layout: "reactionUIPlaygroundLayout",
  template: "reactionUIPlaygroundLayout"
};

// default load qty for product grid
export const ITEMS_INCREMENT = 24;

Session.set("DEFAULT_LAYOUT", DEFAULT_LAYOUT);
Session.setDefault("DEFAULT_WORKFLOW", DEFAULT_WORKFLOW);

Session.set("INDEX_OPTIONS", INDEX_OPTIONS);
Session.setDefault("productScrollLimit", ITEMS_INCREMENT);

// autoform default template
AutoForm.setDefaultTemplate("bootstrap3");
