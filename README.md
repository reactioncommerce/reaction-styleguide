# reaction-styleguide
A plugin for Reaction, transforming it into a style guide and UI component playground.

## Install

This plugin does a complete takeover of a reaction app, so be sure to install it into fresh master copy.

### Prereq

https://github.com/reactioncommerce/reaction-cli

Install or update `reaction-cli` if necessary

```sh
npm install -g reaction-cli
```

### Installing plugin

```sh
# Checkout a fresh copy of reaction as a different name.
reaction init my-styleguide

# Move into the app directory

# Clone this repo into that folder. Or you could download an unzip if you prefer
git submodule add -f https://github.com/reactioncommerce/reaction-styleguide.git imports/plugins/custom/styleguide

# Run reaction to build the app and install the styleguide plugin
reaction

# running on http://localhost:3000/
```
