import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "quf17mu9",
  dataset: "production",
  apiVersion: "2019-01-29", // use current UTC date - see "specifying API version"!
  withCredentials: true,
  useCdn: false,
});

type Document = {
  _id?: string | number;
  parentPage?: { _ref: string };
  seo?: { slug?: { current?: string } };
};

const slugs: Record<string, string> = {};

const buildUrlParts = (doc: Document, allDocument: Document[]): string[] => {
  if (!doc.parentPage) {
    return doc?.seo?.slug?.current ? [doc?.seo?.slug?.current] : [];
  }

  const parent = allDocument.find((d) => d._id === doc?.parentPage?._ref);
  return [
    ...(parent ? buildUrlParts(parent, allDocument) : []),
    ...(doc?.seo?.slug?.current ? [doc?.seo?.slug?.current] : []),
  ];
};

client
  .fetch(
    '*[_type != "sanity.imageAsset" && _type != "sanity.fileAsset" && !(_type match "system.*") && !(_type match "sanity.*")]'
  )
  .then((docs) => {
    docs.forEach((doc: { _id: string | number; _type: string }) => {
      console.log(doc);
      switch (doc._type) {
        case "post":
          console.log("JOIN", buildUrlParts(doc, docs).join("/"));
          slugs[doc._id] = `/blog/${buildUrlParts(doc, docs).join("/")}`;
          break;
        default:
          slugs[doc._id] = `/${buildUrlParts(doc, docs).join("/")}`;
          break;
      }
    });
    console.log(slugs);
  });

const baseUrl =
  window.location.hostname !== "localhost"
    ? `https://gian-marconucara1.vercel.app`
    : `http://localhost:3000`;

const resolveDocumentUrl = (document: { _id: string }) => {
  const path = slugs[document._id];
  return path ? `${baseUrl}${path}` : undefined;
};

export default resolveDocumentUrl;
