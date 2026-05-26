import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import { PageIconsProps } from './types';

const PageIcons = ({ icons, title, isSelected, url }: PageIconsProps) => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const navigateHandler = () => {
    pageNavigationHandler({
      navigationType: 'logo',
      id: 'PageIcons',
      linkTo: url,
    });
  };

  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={navigateHandler}>
      <>
        {isSelected && <icons.Active className={`w-7 h-auto`} />}
        {!isSelected && <icons.NotActive className={`w-7 h-auto `} />}
      </>

      <CustomTypography
        fontSize={`${isSelected ? 'Lable_Small' : 'Body_Small'}`}
        className={`${isSelected ? 'text-impo_PrimaryMan_PrimaryMan opacity-100' : 'text-impo_Surface_Outline'}`}
      >
        {title}
      </CustomTypography>
    </div>
  );
};

export default PageIcons;
