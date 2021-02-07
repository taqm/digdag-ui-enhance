import * as React from 'react';
import { View$SessionAttempt } from '../../types/viewModel';
import AttemptsTable from '../AttemptsTable';

import PageSection from '../PageSection';

type Props = {
  attempts: ApiResponse<View$SessionAttempt[]>;
};

const AttemptsPageTemplate: React.VFC<Props> = ({ attempts }) => {
  if (!attempts.data) {
    return null;
  }

  return (
    <PageSection title="Attempts">
      <AttemptsTable attempts={attempts.data} />
    </PageSection>
  );
};

AttemptsPageTemplate.displayName = 'AttemptsPageTemplate';

export default AttemptsPageTemplate;
