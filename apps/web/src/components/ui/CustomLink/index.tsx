'use client';

import { useContext, useMemo } from 'react';

import { colorMaker } from '../CustomTypography/__utils__';

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

    const isDisable = location.pathname === props.href;

    if (!isDisable && linkProps.target !== '_blank') {
      pageNavigationHandler(true);
    }
  };

  const selectedColor = useMemo(() => {
    return colorMaker(color);
  }, [color]);

  return (
    <Link
      {...linkProps}
      onClick={selectHandler}
      aria-label={linkProps.href}
      style={{ ...style, color: selectedColor }}
      className={`hover:opacity-80 duration-200 ${className}`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
