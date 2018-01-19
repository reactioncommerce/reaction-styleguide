---
 ** NOTICE:** ⚠ This repository is archived for read-only reference purposes. Check out the [Reaction Component Library](https://github.com/reactioncommerce/reaction-component-library) for the replacement.
---

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
cd my-styleguide

# Clone this repo into the plugins folder. Or you could download it and unzip there if you prefer
git submodule add -f https://github.com/reactioncommerce/reaction-styleguide.git imports/plugins/custom/styleguide

# Run reaction to build the app and install the styleguide plugin
reaction

# running on http://localhost:3000/
```
