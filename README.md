# reaction-styleguide
A plugin for Reaction, transforming it into a style guide and UI component playground.

## Install

This plugin does a complete takeover of a reaction app, so be sure to install it into fresh master copy.

### Prereq

https://github.com/reactioncommerce/reaction-cli

```sh
npm install -g reaction-cli
```

### Installing plugin

```sh
# Checkout a fresh copy of reaction as a different name.
reaction init reaction-sg

# Change directory to the custom folder
cd reaction-sg/imports/plugins/custom/

# Clone this repo into that folder. Or you could download an unzip if you prefer
git clone https://github.com/reactioncommerce/reaction-styleguide.git

# CD into the plugin directory
cd reaction-styleguide

# Install dependencies
npm install

# Go back to the root of `reaction-sg`
cd ../../../../

# Run reaction
reaction
```
