'use client';

import { useContext } from 'react';

import { PageNavigationLoadingContext } from '@providers/PageNavigationProvider';
import Link from 'next/link';

import { CustomLinkTypes } from './types';

const CustomLink = (props: CustomLinkTypes) => {
  const { children, className, style, color, ...linkProps } = props;

  const { pageNavigationHandler } = useContext(PageNavigationLoadingContext);

  const selectHandler = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (linkProps.onClick) {
      linkProps.onClick(event);
    }

    if (location.pathname !== props.href && linkProps.target !== '_blank') {
      pageNavigationHandler(true);
    }
  };

  return (
    <Link
      {...linkProps}
      style={{ ...style }}
      onClick={selectHandler}
      aria-label={linkProps.href}
      className={`hover:opacity-80 duration-200 ${className}`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
