import { CodeRef } from "@/components/CodeRef"
import { QuickLink, QuickLinks } from "@/components/QuickLinks"
import { comment, head, link, script } from "@markdoc/next.js/tags"

const tags = {
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = "", caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  "quick-links": {
    render: QuickLinks,
  },
  "quick-link": {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
  link: link,
  code: {
    render: CodeRef,
    description: "Import lines of code from a separate file.",
    attributes: {
      language: {
        type: String,
        required: true,
        description: "A language must be specified for the ref block.",
      },
    },
  },
}

export default tags
