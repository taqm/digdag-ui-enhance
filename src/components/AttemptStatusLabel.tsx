import styled from '@material-ui/styles/styled';
import * as React from 'react';
import { View$AttemptStatus } from '../types/viewModel';

type Props = {
  status: View$AttemptStatus;
};

const elemMap = {
  success: styled('span')({ color: 'green' }),
  error: styled('span')({ color: 'red' }),
  running: styled('span')({ color: 'blue' }),
  killed: styled('span')({ color: 'pink' }),
};

const AttemptStatus: React.VFC<Props> = ({ status }) => {
  const Elem = elemMap[status];
  return <Elem>{status.toUpperCase()}</Elem>;
};

AttemptStatus.displayName = 'AttemptStatus';

export default AttemptStatus;
