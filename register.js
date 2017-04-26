import { Reaction } from "/server/api";

Reaction.registerPackage({
  label: "RUI Playground",
  name: "reaction-ui-playground",
  icon: "fa fa-play",
  autoEnable: true,
  layout: [{
    workflow: "reactionUIPlaygroundWorkflow",
    layout: "reactionUIPlaygroundLayout",
    enabled: true
  }]
});
