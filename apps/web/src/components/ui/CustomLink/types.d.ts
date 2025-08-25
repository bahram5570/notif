import { AnchorHTMLAttributes } from 'react';

import { COLORS_LIST } from '@theme/colors';
import { LinkProps } from 'next/link';

type RequiredTypes = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps;
export interface CustomLinkTypes extends RequiredTypes {
  children: React.ReactNode;
  color?: keyof typeof COLORS_LIST | { freeColor: string };
}
