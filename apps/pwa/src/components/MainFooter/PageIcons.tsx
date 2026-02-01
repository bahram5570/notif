import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import { PageIconsProps } from './types';

const PageIcons = ({ icons, title, isSelected, url }: PageIconsProps) => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const navigateHandler = () => {
    pageNavigationHandler({
      showProgressBar: true,
      id: 'PageIcons',
      linkTo: url,
    });
  };

  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={navigateHandler}>
      <>
        {<icons.Light className={`w-7 h-auto block dark:hidden ${isSelected ? 'opacity-100' : 'opacity-40'}`} />}
        {<icons.Dark className={`w-7 h-auto hidden dark:block ${isSelected ? 'opacity-100' : 'opacity-40'}`} />}
      </>

      <CustomTypography
        fontSize="Body_Small"
        className={`${isSelected ? 'text-impo_Neutral_OnBackground opacity-100' : 'text-impo_Neutral_OnBackground opacity-40'}`}
      >
        {title}
      </CustomTypography>
    </div>
  );
};

export default PageIcons;
