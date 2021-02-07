import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styled from '@material-ui/styles/styled';
import * as React from 'react';

type Props = {
  title: string;
};

const Root = styled('section')({
  '& + &': {
    marginTop: 32,
  },
});

const Content = styled('div')({
  margin: 0,
  marginTop: 8,
});

const PageSection: React.FC<Props> = ({ title, children }) => (
  <Root>
    <Typography variant="h5">{title}</Typography>
    <Paper>
      <Content>{children}</Content>
    </Paper>
  </Root>
);

PageSection.displayName = 'PageSection';

export default PageSection;
