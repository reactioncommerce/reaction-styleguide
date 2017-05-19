import { Reaction } from "/server/api";

Reaction.registerPackage({
  label: "RUI Playground",
  name: "reaction-ui-playground",
  icon: "fa fa-play",
  autoEnable: true,
  registry: [{
    route: "/guide/:guide",
    name: "guidePage",
    priority: 20,
    workflow: "reactionUIPlaygroundWorkflow"
  }],
  layout: [{
    workflow: "reactionUIPlaygroundWorkflow",
    layout: "reactionUIPlaygroundLayout",
    enabled: true,
    structure: {
      template: "reactionUIPlaygroundLayout"
    }
  }]
});
