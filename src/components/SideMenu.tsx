import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styled from '@material-ui/styles/styled';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {};

const StyledSideMenu = styled(List)({
  background: '#fff',
  minHeight: '100%',
});

const SideMenu: React.VFC<Props> = ({}) => (
  <StyledSideMenu>
    <ListItem
      button
      component={NavLink}
      to="/projects"
      activeClassName="Mui-selected"
    >
      <ListItemText primary="Projects" />
    </ListItem>
    <ListItem
      button
      component={NavLink}
      to="/sessions"
      activeClassName="Mui-selected"
    >
      <ListItemText primary="Sessions" />
    </ListItem>
    <ListItem
      button
      component={NavLink}
      to="/attempts"
      activeClassName="Mui-selected"
    >
      <ListItemText primary="Attempts" />
    </ListItem>
  </StyledSideMenu>
);

SideMenu.displayName = 'SideMenu';
export default SideMenu;
