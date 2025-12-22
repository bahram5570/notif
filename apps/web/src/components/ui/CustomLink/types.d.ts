import { AnchorHTMLAttributes } from 'react';

import { LinkProps } from 'next/link';

type RequiredTypes = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps;
export interface CustomLinkTypes extends RequiredTypes {
  children: React.ReactNode;
}
