import React from "react";

export default function ChatIcon(props) {
  return (
    <img
      src={`data:image/svg+xml;utf8,<svg width="26" height="22" viewBox="0 0 26 22" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M12 17h14V0H0v17h7v5l5-5z" id="a"/><mask id="b" x="0" y="0" width="26" height="22" fill="#fff"><use xlink:href="#a"/></mask></defs><g fill="none" fill-rule="evenodd"><use stroke="#052A4E" mask="url(#b)" stroke-width="4" stroke-linecap="square" xlink:href="#a"/><rect fill="#052A4E" x="5" y="7" width="3" height="3" rx="1.5"/><rect fill="#052A4E" x="11" y="7" width="3" height="3" rx="1.5"/><rect fill="#052A4E" x="17" y="7" width="3" height="3" rx="1.5"/></g></svg>`}
      {...props}
    />
  );
}
