import PlusIcon from '@assets/shared/icons/plus.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

const AddPartner = () => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const onClick = () => {
    pageNavigationHandler({ id: 'PartnerProfile', showProgressBar: true, linkTo: '/protected/startPartner' });
  };

  return (
    <>
      <CustomTypography fontSize="Body_Medium" className="w-full text-right text-impo_Neutral_OnBackground">
        شما پارتنر نداری از اینجا اضافش کن
      </CustomTypography>
      <div onClick={onClick} className="flex flex-row items-center justify-end w-full p-1">
        <div className="flex flex-row items-center gap-1 justify-end w-full  p-2 rounded-xl  bg-impo_Neutral_Background">
          <div className={`  p-2 w-full flex justify-end items-center`}>
            <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
              اضافه کردن پارتنر
            </CustomTypography>
          </div>
          <PlusIcon className="w-6 h-6 stroke-impo_Surface_Outline" />
        </div>
      </div>
    </>
  );
};

export default AddPartner;
