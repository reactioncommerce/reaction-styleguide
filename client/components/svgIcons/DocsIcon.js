import React from "react";

export default function DocsIcon(props) {
  return (
    <img
      src={`data:image/svg+xml;utf8,<svg width="19" height="22" viewBox="0 0 19 22" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M0 0h19v22H0z"/><mask id="b" x="0" y="0" width="19" height="22" fill="#fff"><use xlink:href="#a"/></mask></defs><g stroke="#052A4E" fill="none" fill-rule="evenodd" stroke-linecap="square"><use mask="url(#b)" stroke-width="4" xlink:href="#a"/><path d="M4.5 5h10m-10 4h10m-10 4h10m-10 4h10" stroke-width="2"/></g></svg>`}
      {...props}
    />
  );
}
