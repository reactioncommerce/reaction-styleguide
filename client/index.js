import "./templates/home.html";
import "./templates/home.js";
import { Router } from "/client/api";
import { ReactionLayout } from "/client/modules/router/main.js";

// Session.setDefault("DEFAULT_LAYOUT", "reactionUIPlaygroundHome");
// Session.setDefault("DEFAULT_WORKFLOW", "reactionUIPlaygroundHome");


// Router.route('/', {
//     // do some action for this route
//     action: function(params, queryParams) {
//         console.log("Params:", params);
//         console.log("Query Params:", queryParams);
//         ReactionLayout({
//           template: "reactionUIPlayground"
//       });
//     },
//
//     // name: "<name for the route>" // optional
// });
//
// Router._routes = []

import { Session } from "meteor/session";

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
  workflow: "reactionUIPlaygroundWorkflow"
};

// default load qty for product grid
export const ITEMS_INCREMENT = 24;

Session.set("DEFAULT_LAYOUT", DEFAULT_LAYOUT);
Session.setDefault("DEFAULT_WORKFLOW", DEFAULT_WORKFLOW);
console.log("set");
Session.set("INDEX_OPTIONS", INDEX_OPTIONS);
Session.setDefault("productScrollLimit", ITEMS_INCREMENT);

// autoform default template
AutoForm.setDefaultTemplate("bootstrap3");
