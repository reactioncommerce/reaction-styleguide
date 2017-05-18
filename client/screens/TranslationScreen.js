import React from "react";
import { Translation } from "/imports/plugins/core/ui/client/components";

const MyReactComponent = () => {
  return (
    <Translation defaultValue="Dashboard" i18nKey={"admin.shortcut.dashboardLabel"} />
  )
};

export default MyReactComponent;
