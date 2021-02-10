import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

type Props = {
  taskName: string;
  text: string;
};

const LogPageContentt: React.VFC<Props> = ({ taskName, text }) => (
  <div>
    <h3 style={{ wordBreak: 'break-all' }}>{taskName}</h3>
    <div>
      src page =
      <a href={location.href} target="_blank">
        {location.href}
      </a>
    </div>
    <main>
      <SyntaxHighlighter showLineNumbers>{text}</SyntaxHighlighter>
    </main>
  </div>
);

LogPageContentt.displayName = 'LogPageContent';
export default LogPageContentt;
