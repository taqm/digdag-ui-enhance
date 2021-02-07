import * as React from 'react';
import { Link } from 'react-router-dom';
import MuiLink from '@material-ui/core/Link';

type Props = {
  className?: string;
  to: string;
};

const MyLink: React.FC<Props> = ({ className, to, children }) => (
  <MuiLink className={className} component={Link} to={to}>
    {children}
  </MuiLink>
);

MyLink.displayName = 'MyLink';

export default MyLink;
