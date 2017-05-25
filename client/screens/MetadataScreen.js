import React, { Component } from "react";
import { Metadata, Metafield, Section, ExampleBlock } from "../components"
import * as PTD from "../../lib/propTypeDefinitions";

const metafields = [
  { key: "Material", value: "Cotton" },
  { key: "Condition", value: "New" },
]

export const metaDataProps = [
  PTD.editable,
  {
    name: "metafields",
    type: "Array[Object]",
    description: "Array of meta field objects: `[{key: \"\", value: \"\"}]`"
  }, {
    name: "newMetafield",
    type: "Object",
    description: "Meta field object for the new meta field form. `{key: \"\", value: \"\"}`"
  }, {
    name: "onMetaChange",
    type: "Function",
    description: "On metafield change via input. callback signature `(event, metafield, index) => {}`"
  }, {
    name: "onMetaRemove",
    type: "Function",
    description: "Metafield remove callback. callback signature `(event, metafield, index) => {}`"
  }, {
    name: "onMetaSave",
    type: "Function",
    description: "Metafield save callback. callback signature `(event, metafield, index) => {}` index may be `undefined` if its is new."
  }
];

export const metaItemProps = [
  {
    name: "blank",
    type: "Boolean",
    description: "Shows submit buttons if `true`, shows delete button when `false`"
  }, {
    name: "detailInfoPlaceholder",
    type: "Function",
    description: "Detail info input placeholder (value)"
  }, {
    name: "detailNamePlaceholder",
    type: "Function",
    description: "Detail name input placeholder (key)"
  }, {
    name: "i18nKeyDetailInfo",
    type: "Function",
    description: "Detail info i18n placeholder (value)"
  }, {
    name: "i18nKeyDetailName",
    type: "Function",
    description: "Detail name i18n placeholder (value)"
  },
  PTD.index,
  {
    name: "metafield",
    type: "Object",
    description: "`{key: \"\", value: \"\"}`"
  }, {
    name: "onBlur",
    type: "Function",
    description: "On input blur. callback signature `(event, metafield, index) => {}`"
  }, {
    name: "onChange",
    type: "Function",
    description: "On input change. callback signature `(event, metafield, index) => {}`"
  }, {
    name: "onRemove",
    type: "Function",
    description: "On remove metafield. callback signature `(event, metafield, index) => {}`"
  }
]

class MetadataScreen extends Component {
  render() {
    return (
      <Section title="Metadata">
        <Section>
          <Metadata
            editable={false}
            metafields={metafields}
          />
        </Section>

        <ExampleBlock
          componentProps={metaDataProps}
          importStatement={{
            named: ["Metadata"],
            soruce: "/imports/plugins/core/ui/client/components/metadata/metadata.js"
          }}
          title="Metadata, key / value table"
        >
          <Metadata
            editable={false}
            metafields={metafields}
          />
        </ExampleBlock>

        <ExampleBlock
          componentProps={metaItemProps}
          importStatement={{
            named: ["Metafield"],
            soruce: "/imports/plugins/core/ui/client/components/metadata/metafield.js"
          }}
          title="Metafield"
        >
          <Metafield
            editable={false}
            metafield={metafields[0]}
          />
        </ExampleBlock>
      </Section>

    )
  }
}

export default MetadataScreen
