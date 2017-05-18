import React, { Component } from "react";
import { Metadata, Metafield, Section } from "../components"

const metafields = [
  { key: "Material", value: "Cotton" },
  { key: "Condition", value: "New" },
]

class MetadataScreen extends Component {
  render() {
    return (
      <Metadata
        editable={false}
        metafields={metafields}
      />
    )
  }
}

export default MetadataScreen
