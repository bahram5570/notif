import { FOOTER_HEIGHT, MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import MainFooterLinks from './MainFooterLinks';
import { FOOTER_PAGES_LIST } from './constants';
import { MainFooterContainerProps } from './types';

const MainFooterContainer = ({ pathName }: MainFooterContainerProps) => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const navigateHandler = (url: string) => {
    const isCurrentPage = url.toLowerCase() === pathName;

    if (isCurrentPage) {
      return;
    }

    pageNavigationHandler({ linkTo: url, id: 'PageIcons', showProgressBar: true });
  };

  return (
    <div
      style={{ maxWidth: MAX_SCREEN_WIDTH, height: FOOTER_HEIGHT }}
      className="
                  fixed 
                  left-0 
                  right-0 
                  bottom-0 
                  mx-auto 
                  px-4 
                  pt-2 
                  grid 
                  grid-flow-col 
                  bg-impo_Neutral_Background 
                  border-t-[1px] 
                  border-t-impo_Surface_SurfaceVariant 
                  z-10
                "
    >
      {FOOTER_PAGES_LIST.map((item, index) => (
        <MainFooterLinks
          key={index}
          title={item.title}
          icons={item.icons}
          onSelect={() => navigateHandler(item.url)}
          isSelected={item.url.toLowerCase() === pathName}
        />
      ))}
    </div>
  );
};

export default MainFooterContainer;
