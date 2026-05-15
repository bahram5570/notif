import { FOOTER_HEIGHT, MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';

import PageIcons from './PageIcons';
import { FOOTER_PAGES_LIST } from './constants';
import { MainFooterContainerProps } from './types';

const MainFooterContainer = ({ pathName }: MainFooterContainerProps) => {
  return (
    <div
      style={{ maxWidth: MAX_SCREEN_WIDTH, height: FOOTER_HEIGHT }}
      className="fixed left-0 right-0 bottom-0 mx-auto px-4 pt-2 grid grid-flow-col bg-impo_Neutral_Background z-10"
    >
      {FOOTER_PAGES_LIST.map((item, index) => (
        <PageIcons
          key={index}
          url={item.url}
          title={item.title}
          icons={item.icons}
          isSelected={item.url === pathName}
        />
      ))}
    </div>
  );
};

export default MainFooterContainer;
