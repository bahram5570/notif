import ArrowIcon from '@assets/shared/icons/calendarArrow.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import { SupportCardGeneratorTypes } from './types';

const SupportCardGenerator = ({ id, title, isFirstChild }: SupportCardGeneratorTypes) => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const selectHandler = () => {
    pageNavigationHandler({ showProgressBar: true, id, linkTo: `/protected/support/category/${id}` });
  };

  return (
    <div
      onClick={selectHandler}
      className={`
                    w-full 
                    flex
                    items-center
                    justify-between
                    py-4 
                    border-t-[1px] 
                    ${isFirstChild ? 'border-t-transparent' : 'border-t-impo_Surface_OutlineVariant'}
                `}
    >
      <ArrowIcon className="w-4 h-auto stroke-impo_Surface_Outline" />

      <CustomTypography fontSize="Lable_MediumProminet" className="text-impo_Neutral_OnBackground">
        {title}
      </CustomTypography>
    </div>
  );
};

export default SupportCardGenerator;
