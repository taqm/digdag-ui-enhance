import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styled from '@material-ui/styles/styled';

import MyLink from './MyLink';

type Props = {};

const BrandLogo = styled('img')({
  marginRight: 4,
});

const BrandText = styled(Typography)({
  color: '#fff',
});

const TheHeader: React.VFC<Props> = () => (
  <>
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar color="inherit" disableGutters>
          <MyLink to="/">
            <Button>
              <BrandLogo src="/images/logo.png" width="32" />
              <BrandText variant="h5" color="inherit">
                Digdag
              </BrandText>
            </Button>
          </MyLink>
        </Toolbar>
      </Container>
    </AppBar>
    <Toolbar />
  </>
);

TheHeader.displayName = 'TheHeader';

export default TheHeader;
