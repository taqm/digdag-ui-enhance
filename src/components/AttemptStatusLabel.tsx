import styled from '@material-ui/styles/styled';
import * as React from 'react';
import { Colors } from '../core/colors';
import { View$AttemptStatus } from '../types/viewModel';

type Props = {
  status: View$AttemptStatus;
};

const elemMap = {
  success: styled('span')({ color: Colors.Success.text }),
  error: styled('span')({ color: Colors.Error.text }),
  running: styled('span')({ color: Colors.Running.text }),
  killed: styled('span')({ color: Colors.Killed.text }),
};

const AttemptStatus: React.VFC<Props> = ({ status }) => {
  const Elem = elemMap[status];
  return <Elem>{status.toUpperCase()}</Elem>;
};

AttemptStatus.displayName = 'AttemptStatus';

export default AttemptStatus;
