
export const i18nKeyLabel = {
  name: "i18nKeyLabel",
  type: "String",
  description: "Key for i18n translation",
  control: {
    type: "text",
    value: ""
  }
};

export const i18nKeySelectedLabel = {
  name: "i18nKeySelectedLabel",
  type: "String",
  description: "Key for i18n translation for selected label (implementation required)",
  control: {
    type: "text",
    value: ""
  }
};

export const label = {
  name: "label",
  type: "String",
  description: "Text label",
  control: {
    type: "text",
    value: ""
  }
};

export const icon = {
  name: "icon",
  type: "String",
  description: "Name of [font awesome](https://fortawesome.github.io/Font-Awesome/) icon"
}

export const checked = {
  name: "checked",
  type: "Boolean",
  description: "Checked true / false",
  control: {
    type: "switch",
    value: false
  }
};

export const disabled = {
  name: "disabled",
  type: "Boolean",
  description: "Disabled true / false",
  control: {
    type: "switch",
    value: false
  }
};

export const active = {
  name: "disabled",
  type: "Boolean",
  description: "Active true / false",
  control: {
    type: "switch",
    value: false
  }
};

export const eventAction = {
  name: "eventAction",
  type: "String",
  description: "Adds `data-event-action=\"yourAction\"` attribute to the component, where `yourAction` is the value you set."
}

export const onChange = {
  name: "onChange",
  type: "Function",
  description: "Callback on chnage event"
};

export const onClick = {
  name: "onClick",
  type: "Function",
  description: "On click"
};

export const valueSBN = {
  name: "value",
  type: "String | Boolean | Number",
  description: "A String, Boolean, or Number value"
}

export const valueAny = {
  name: "value",
  type: "Any",
  description: "A value of any type"
}

export const className = {
  name: "className",
  type: "String, Object ",
  description: "Custom class names, can be a string, or object `{\"class-name\": true}`"
}
