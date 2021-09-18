import React from 'react';
import MuiLink, { LinkProps } from '@mui/material/Link';

import { GatsbyLink } from './glink';

export const Link: any = React.forwardRef<
  HTMLAnchorElement,
  LinkProps & { to?: string }
>((props, ref) => {
  const { to } = props;
  return to ? (
    <MuiLink ref={ref} component={GatsbyLink} to={to} {...props} />
  ) : (
    <MuiLink ref={ref} {...props} />
  );
});
