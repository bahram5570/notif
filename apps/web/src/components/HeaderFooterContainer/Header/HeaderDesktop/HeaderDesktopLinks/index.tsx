import { Fragment } from 'react';

import { HEADER_LINKS_LIST } from '@constants/links.constants';

import MultiLinkGenerator from './MultiLinkGenerator';
import SingleLinkGenerator from './SingleLinkGenerator';
import ThemeLinkGenerator from './ThemeLinkGenerator';

const HeaderDesktopLinks = () => {
  return (
    <>
      {HEADER_LINKS_LIST.map((item, index) => (
        <Fragment key={index}>
          {typeof item.linkTo === 'string' && <SingleLinkGenerator title={item.title} linkTo={item.linkTo} />}
          {typeof item.linkTo === 'object' && <MultiLinkGenerator title={item.title} linkTo={item.linkTo} />}
        </Fragment>
      ))}

      <ThemeLinkGenerator />
    </>
  );
};

export default HeaderDesktopLinks;
