import React from "react";

export default function CustomizeIcon(props) {
  return (
    <img
      src={`data:image/svg+xml;utf8,<svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><g stroke="#052A4E" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="square"><path d="M15 4.223V1h-4v3.223c-.938.213-1.82.572-2.62 1.052L6.102 3 3 6.103 5.275 8.38c-.48.8-.84 1.682-1.052 2.62H1v4.39h3.32c.223.81.556 1.575.983 2.277L3 19.97l3.103 3.104 2.322-2.322c.79.467 1.655.816 2.575 1.025V25h4v-3.223c.938-.213 1.82-.572 2.62-1.052l2.35 2.35 3.104-3.104-2.35-2.35c.414-.687.738-1.437.956-2.23H25V11h-3.223c-.21-.92-.558-1.786-1.025-2.575l2.322-2.322L19.97 3l-2.303 2.303c-.813-.494-1.71-.863-2.667-1.08z"/><circle cx="4" cy="4" r="4" transform="translate(9 9)"/></g></svg>`}
      {...props}
    />
  );
}
