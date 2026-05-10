import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import { CardGeneratorTypes } from './types';

const CardGenerator = ({ script, backgroundColor, linkTo, Icon }: CardGeneratorTypes) => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const linkToEditProfileHandler = () => {
    pageNavigationHandler({ showProgressBar: true, linkTo: linkTo, id: linkTo });
  };

  return (
    <div
      style={{ backgroundColor }}
      onClick={linkToEditProfileHandler}
      className="w-full h-full px-1 flex flex-col items-center justify-center rounded-xl gap-2"
    >
      <div className="w-10 h-10 flex items-center justify-center">
        <>{Icon}</>
      </div>

      <CustomTypography fontSize="Lable_Small" className="!text-impo_Black text-center">
        {script}
      </CustomTypography>
    </div>
  );
};

export default CardGenerator;
