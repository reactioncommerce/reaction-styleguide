import React, { Component } from "react";
import PropTypes from "prop-types";
import { MediaGallery, MediaItem as ActualMediaItem, Section, ExampleBlock } from "../components";
import { DragDropProvider } from "/imports/plugins/core/ui/client/providers";
import * as PTD from "../../lib/propTypeDefinitions";

const media = [
  "https://placehold.it/350x150"
];

// Mock the MediaItem component.
// As it is, the real MediaItem component does not product a good demo
// due to the SortableItem decorator
function MediaItem() {
  return (
    <div></div>
  )
}

const mediaGalleryProps = [
  PTD.featuredMedia,
  PTD.media
];

const mediaItemProps = [
  PTD.source
];


class MediaScreen extends Component {
  render() {
    return (
      <DragDropProvider>
        <Section title="Media">
          <ExampleBlock
            componentProps={mediaGalleryProps}
            importStatement={{
              named: ["MediaGallery"],
              source: "/imports/plugins/core/ui/client/components/media/mediaGallery.js"
            }}
            title="Media Gallery with two images"
          >
            <MediaGallery
              featuredMedia={"https://placehold.it/500x250"}
              media={["https://placehold.it/500x250", "https://placehold.it/500x250"]}
            />
          </ExampleBlock>

          <ExampleBlock
            componentProps={mediaItemProps}
            fakeComponent={<MediaItem />}
            importStatement={{
              named: ["Media Gallery"],
              source: "/imports/plugins/core/ui/client/components/media/media.js"
            }}
            title="Media Item"
          >
            <ActualMediaItem source={"https://placehold.it/350x150"} />
          </ExampleBlock>
        </Section>
      </DragDropProvider>
    )
  }
}

export default MediaScreen
