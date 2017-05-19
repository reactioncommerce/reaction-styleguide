import React, { Component } from "react";
import { MediaGallery, Section } from "../components"

const media = [
  {
    url: "https://placehold.it/350x150"
  }
]

class MediaScreen extends Component {
  /*
  <MediaGallery
    editable={false}
    media={media}
  />
   */
  render() {
    return (
      <Section title="Checkbox">
        {"TODO"}
      </Section>
    )
  }
}

export default MediaScreen
