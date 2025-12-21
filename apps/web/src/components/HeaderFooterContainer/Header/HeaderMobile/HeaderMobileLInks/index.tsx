import { useState } from 'react';

import { HEADER_LINKS_LIST } from '@constants/links.constants';

import usePageHeight from '../__hooks__/usePageHeight';
import MultiLinkGenerator from './MultiLinkGenerator';
import SingleLinkGenerator from './SingleLinkGenerator';
import ThemeLinkGenerator from './ThemeLinkGenerator';
import { HeaderMobileLInksTypes } from './types';

const THEME_INDEX = HEADER_LINKS_LIST.length;

const HeaderMobileLInks = ({ isOpen, isOpenHandler }: HeaderMobileLInksTypes) => {
  const { pageHeight } = usePageHeight();
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const closeHandler = () => {
    isOpenHandler(false);
    setSelectedIndex(-1);
  };

  const selectHandler = (i: number) => {
    if (selectedIndex === i) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(i);
    }
  };

  return (
    <div
      style={{ height: isOpen ? pageHeight : 0 }}
      className="w-full px-6 duration-300 bg-impo_Header overflow-hidden"
    >
      {HEADER_LINKS_LIST.map((item, index) => (
        <div
          key={index}
          className={`
                      border-b-[1px]
                      ${index < HEADER_LINKS_LIST.length ? 'border-b-impo_Surface_SurfaceVariant' : 'border-b-impo_Transparent'}
                    `}
        >
          {typeof item.linkTo === 'string' && (
            <SingleLinkGenerator title={item.title} linkTo={item.linkTo} closeHandler={closeHandler} />
          )}

          {typeof item.linkTo === 'object' && (
            <MultiLinkGenerator
              title={item.title}
              linkTo={item.linkTo}
              closeHandler={closeHandler}
              isSelected={selectedIndex === index}
              selectHandler={() => selectHandler(index)}
            />
          )}
        </div>
      ))}

      <ThemeLinkGenerator
        closeHandler={closeHandler}
        isSelected={selectedIndex === THEME_INDEX}
        selectHandler={() => selectHandler(THEME_INDEX)}
      />
    </div>
  );
};

export default HeaderMobileLInks;
