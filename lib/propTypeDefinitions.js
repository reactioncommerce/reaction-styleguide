
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
  description: "On click `(event, value) => ()`"
};

export const onSwitchChange = {
  name: "onSwitchChange",
  type: "Function",
  description: "Switch change handler `(event, isChecked, name) => ()`"
};

export const switchOn = {
  name: "switchOn",
  type: "Boolean",
  description: "Switch on true / false",
  control: {
    type: "switch",
    value: false
  }
};

export const actionTypeForList = {
  name: "actionType",
  type: "String",
  description: "One of undefined | arrow |  switch",
  control: {
    type: "select",
    value: false,
    options: [
      { label: "none", value: false },
      { label: "arrow", value: "arrow" },
      { label: "switch", value: "switch" }
    ]
  }
};

export const switchName = {
  name: "switchName",
  type: "String",
  description: "Name of switch passed to callbacks",
  control: {
    type: "text",
    value: ""
  }
}


export const valueSBN = {
  name: "value",
  type: "String | Boolean | Number",
  description: "A String, Boolean, or Number value"
}

export const valueAny = {
  name: "value",
  type: "Any",
  description: "A value of any type",
  control: {
    type: "text",
    value: ""
  }
}

export const className = {
  name: "className",
  type: "String, Object ",
  description: "Custom class names, can be a string, or object `{\"class-name\": true}`"
}

export const source = {
  name: "source",
  type: "String, Object",
  description: "Source can be a string (url, base64) or CFS media object",
  control: {
    type: "select",
    value: "https://placehold.it/350x150",
    options: [
      { label: "External image 350x150", value: "https://placehold.it/350x150" },
      { label: "Public folder SVG image 350x150", value: "/resources/reaction-logo.svg" }
    ]
  }
}

export const media = {
  name: "media",
  type: "Array[String | Object]",
  description: "Media can be an array of strings (url, base64) or CFS media objects, or both",
  control: {
    type: "select",
    value: ["https://placehold.it/500x250", "https://placehold.it/500x250"],
    options: [
      { label: "2 External image 350x150", value: ["https://placehold.it/500x250", "https://placehold.it/500x250"] },
      { label: "2 Public folder SVG image 350x150", value: ["/resources/reaction-logo.svg", "/resources/reaction-logo.svg"]}
    ]
  }
}

export const featuredMedia = {
  name: "featuredMedia",
  type: "String, Object",
  description: "Source can be a string (url, base64) or CFS media object",
  control: {
    type: "select",
    value: "https://placehold.it/500x250",
    options: [
      { label: "External image 350x150", value: "https://placehold.it/500x250" },
      { label: "Public folder SVG image 350x150", value: "/resources/reaction-logo.svg" }
    ]
  }
}

export const editable = {
  name: "editable",
  type: "Boolean",
  description: "toggle between an editable and non editable states",
  control: {
    type: "switch",
    value: false
  }
}

export const index = {
  name: "index",
  type: "Number",
  descripton: "Index in array"
}
