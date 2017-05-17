import React from 'react';

export default function AnnouncementClose(props) {
  return (
    <img
      src={`data:image/svg+xml;utf8,<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><circle id="a" cx="20" cy="20" r="20"/><mask id="b" x="0" y="0" width="40" height="40" fill="#fff"><use xlink:href="#a"/></mask></defs><g transform="matrix(1 0 0 -1 0 40)" stroke="#052A4E" fill="none" fill-rule="evenodd" stroke-linecap="square"><path d="M25.005 15.585l-10.51 10.51m.077-10.51l10.51 10.51" stroke-width="2"/><use mask="url(#b)" stroke-width="4" xlink:href="#a"/></g></svg>`}
      {...props}
    />
  );
}
