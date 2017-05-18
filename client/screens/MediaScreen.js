import React, { Component } from "react";
import { MediaGallery, Section } from "../components"

const media = [
  {
    url: "https://placehold.it/350x150"
  }
]

class MediaScreen extends Component {
  render() {
    return (
      <Section title="Checkbox">
        <MediaGallery
          editable={false}
          media={media}
        />
      </Section>
    )
  }
}

export default MediaScreen
