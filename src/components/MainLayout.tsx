import Container from '@material-ui/core/Container';
import styled from '@material-ui/styles/styled';
import * as React from 'react';

import TheHeader from './TheHeader';

const MainContent = styled('div')({
  paddingTop: 16,
});

const MainLayout: React.FC = ({ children }) => (
  <>
    <TheHeader />
    <Container maxWidth="md" component="main">
      <MainContent>{children}</MainContent>
    </Container>
  </>
);

MainLayout.displayName = 'MainLayout';

export default MainLayout;
