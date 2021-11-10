import S from "@sanity/desk-tool/structure-builder";
import React from "react";

import resolveDocumentUrl from "../resolveDocumentUrl";

const WebPreview: React.FC<{
  document: { displayed: { _id: string } };
}> = ({ document }) => {
  return (
    <iframe
      allowFullScreen
      style={{ width: "100%", height: "100%" }}
      title="web"
      src={resolveDocumentUrl(document.displayed)}
      frameBorder={0}
    />
  );
};

export const getDefaultDocumentNode = ({ schemaType }) => {
  // Conditionally return a different configuration based on the schema type
  if (schemaType !== "settings") {
    return S.document().views([
      S.view.form(),
      // S.view.component(WebPreview).title('Web'),
    ]);
  }
};

export default S.defaults();
