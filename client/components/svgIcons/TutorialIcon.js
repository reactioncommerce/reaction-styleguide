import React from "react";

export default function TutorialIcon(props) {
  return (
    <img
      src={`data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 1)" fill="none" fill-rule="evenodd"><circle stroke="#052A4E" stroke-width="2" stroke-linecap="square" cx="11" cy="11" r="11"/><path fill="#052A4E" d="M15 11l-6 3V8"/></g></svg>`}
      {...props}
    />
  );
}
