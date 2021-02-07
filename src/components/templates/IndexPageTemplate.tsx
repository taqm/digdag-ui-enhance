import * as React from 'react';

type Props = {
  projects: ApiResponse<View$Project[]>;
};

const IndexPageTemplate: React.VFC<Props> = ({ projects }) => {
  if (projects.data) {
    return null;
  }
  return null;
};

IndexPageTemplate.displayName = 'IndexPageTemplate';

export default IndexPageTemplate;
