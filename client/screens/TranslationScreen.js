import React from "react";
import { Translation, ExampleBlock, Section } from "/imports/plugins/core/ui/client/components";

export const translationProps = [
  {
    name: "defaultValue",
    type: "String",
    description: "Text value if translation does not exist.",
    control: {
      type: "text",
      value: ""
    }
  },
  {
    name: "i18nKey",
    type: "String",
    description: "Key for i18n translation",
    control: {
      type: "text",
      value: ""
    }
  }
];


const TranslationScreen = () => {
  return (
    <Section title="Slider">
      <Section>
        <Translation defaultValue="Dashboard" i18nKey={"admin.shortcut.dashboardLabel"} />
      </Section>
      <ExampleBlock
        componentProps={translationProps}
        importStatement={{
          named: ["Translation"],
          source: "/imports/plugins/core/ui/client/components/translation/translation.js"
        }}
      >
        <Translation defaultValue="Dashboard" i18nKey={"admin.shortcut.dashboardLabel"} />
      </ExampleBlock>
    </Section>
  )
};

export default TranslationScreen;
