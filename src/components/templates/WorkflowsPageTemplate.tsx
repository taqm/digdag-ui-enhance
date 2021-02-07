import * as React from 'react';

import PageSection from '../PageSection';
import { View$Workflow } from '../../types/viewModel';
import WorkflowsTable from '../WorkflowsTable';

type Props = {
  workflows: ApiResponse<View$Workflow[]>;
};

const WorkflowsPageTemplate: React.VFC<Props> = ({ workflows }) => {
  if (!workflows.data) {
    return null;
  }

  return (
    <PageSection title="ワークフロー">
      {workflows.data && <WorkflowsTable workflows={workflows.data} />}
    </PageSection>
  );
};

WorkflowsPageTemplate.displayName = 'WorkflowsPageTemplate';

export default WorkflowsPageTemplate;
