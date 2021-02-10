import YAML from 'json-to-pretty-yaml';
import * as React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

type Props = {
  config: unknown;
};

const WorkflowConfigCode: React.VFC<Props> = ({ config }) => {
  const yaml = React.useMemo(() => YAML.stringify(config as object), [config]);
  return (
    <SyntaxHighlighter showLineNumbers language="yaml">
      {yaml}
    </SyntaxHighlighter>
  );
};

WorkflowConfigCode.displayName = 'WorkflowConfigCode';

export default WorkflowConfigCode;
