import { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";

// defaultMarkdown contains valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text
const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

![React Logo w/ Text](https://camo.githubusercontent.com/f07c971b92c697d554e515536f0dfe795008721197911e80728992ef980d499b/68747470733a2f2f64657369676e2d7374796c652d67756964652e66726565636f646563616d702e6f72672f646f776e6c6f6164732f6663635f7072696d6172795f6c617267652e6a7067)

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
`;

function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown);

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Markdown Previewer</h1>
        <div className="boxes-container">
          <textarea
            name="editor"
            id="editor"
            value={markdownText}
            onChange={(e) => setMarkdownText(e.target.value)}
          ></textarea>
          <div id="preview">
            <ReactMarkdown remarkPlugins={[remarkBreaks]}>
              {markdownText}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
