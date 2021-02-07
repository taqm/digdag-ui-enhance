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

const listItemProps = {
  button: true,
  component: NavLink,
  style: { paddingLeft: 24 },
  activeClassName: 'Mui-selected',
} as const;

const SideMenu: React.VFC<Props> = ({}) => (
  <StyledSideMenu>
    <ListItem to="/projects" {...listItemProps}>
      <ListItemText primary="Projects" />
    </ListItem>
    <ListItem to="/sessions" {...listItemProps}>
      <ListItemText primary="Sessions" />
    </ListItem>
    <ListItem to="/attempts" {...listItemProps}>
      <ListItemText primary="Attempts" />
    </ListItem>
  </StyledSideMenu>
);

SideMenu.displayName = 'SideMenu';
export default SideMenu;
