// CodeRef.component.tsx
import { Fragment, useEffect, useState } from "react"
import { Prism as ReactSyntaxHighlighter } from "react-syntax-highlighter"

export function CodeRef({ children, language }) {
  const [style, setStyle] = useState({})

  useEffect(() => {
    import("react-syntax-highlighter/dist/esm/styles/prism/night-owl").then((mod) =>
      setStyle(mod.default)
    )
  })

  // Turn React element children into string
  let code = ""
  if (children) {
    if (typeof children === "string") {
      code = children
    } else if (Array.isArray(children)) {
      code = children.map((child) => child.props.children).join("\n")
    } else {
      code = children.props.children
    }
  }

  // remove trailing newline
  code = code.replace(/\n$/, "")

  return (
    <ReactSyntaxHighlighter language={language} style={style} showLineNumbers="true">
      {code}
    </ReactSyntaxHighlighter>
  )
}

export default CodeRef
