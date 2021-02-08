import Container from '@material-ui/core/Container';
import styled from '@material-ui/styles/styled';
import * as React from 'react';
import SideMenu from './SideMenu';

import TheHeader from './TheHeader';

const LayoutRoot = styled('div')({
  height: '100vh',
});

const PageBody = styled('div')({
  display: 'flex',
  height: 'calc(100vh - 64px)',
  overflowY: 'auto',
  position: 'relative',
  paddingLeft: 200,
});

const SideMenuWrapper = styled('div')({
  width: 200,
  top: 64,
  bottom: 0,
  left: 0,
  borderRight: '1px solid rgba(0, 0, 0, 0.12)',
  position: 'fixed',
});

const MainContent = styled('div')({
  paddingTop: 16,
  paddingBottom: 64,
});

const MainLayout: React.FC = ({ children }) => (
  <LayoutRoot>
    <TheHeader />
    <PageBody>
      <SideMenuWrapper>
        <SideMenu />
      </SideMenuWrapper>
      <Container maxWidth="lg">
        <MainContent>{children}</MainContent>
      </Container>
    </PageBody>
  </LayoutRoot>
);

MainLayout.displayName = 'MainLayout';

export default MainLayout;
