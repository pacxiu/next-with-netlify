import Link from 'next/link';
import { ReactNode } from 'react';
import { Link as ThemeLink, SxProp } from 'theme-ui';

interface AppLinkProps extends SxProp {
  href: string;
  as?: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  target?: string;
  variant?: string;
}

export function AppLink({ href, as, children, sx, ...rest }: AppLinkProps) {
  const isInternalLink = href.startsWith('/') || href.startsWith('#');

  return isInternalLink ? (
    <Link {...{ href, as }} passHref>
      <ThemeLink sx={{ textDecoration: 'none', color: 'inherit', ...sx }} {...rest}>
        {children}
      </ThemeLink>
    </Link>
  ) : (
    <ThemeLink
      {...{
        href,
        target: '_blank',
        rel: 'noopener noreferrer',
        sx: { textDecoration: 'none', color: 'inherit', ...sx },
        ...rest,
      }}
    >
      {children}
    </ThemeLink>
  );
}
