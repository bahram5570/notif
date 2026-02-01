import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomModal from '@components/ui/CustomModal';
import Dark_Button from '@components/ui/Dark_Button';

import useSubmit from './__hooks__/useSubmit';
import { RateModalPropsType } from './type';

const RateModal = ({ rate, rateDescription }: RateModalPropsType) => {
  const { isLoading, submitHandler } = useSubmit();

  const onClickHandler = () => {
    submitHandler({ rate, rateDescription });
  };
  return (
    <CustomModal>
      <div className="flex flex-col gap-4 p-4 justify-center items-center max-w-sm">
        <CustomTypography fontSize="Title_Medium" className="text-impo_Success_Success">
          نظر شما ثبت شد
        </CustomTypography>
        <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnSurface text-center">
          بابت ثبت نظرت ازت ممنونیم، کمک بزرگی به تیم ایمپو برای بهبود اپلیکیشن کردی
        </CustomTypography>
        <Dark_Button className="mt-auto" onClick={onClickHandler} isLoading={isLoading} fontSize="Lable_Large">
          ثبت نظر
        </Dark_Button>
      </div>
    </CustomModal>
  );
};

export default RateModal;
