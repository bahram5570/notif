import { useEffect, useRef } from 'react';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { ApprovedCodeToastPropsType } from './type';

const ApprovedCodeToast = ({ discountCodeHelper, callApi, onRestHandler }: ApprovedCodeToastPropsType) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, []);

  const onClickHandler = () => {
    callApi({});
    onRestHandler();
  };

  return (
    <div
      ref={ref}
      className="py-3 px-4 rounded-lg flex flex-row-reverse w-full justify-between items-center bg-impo_Success_SuccessContainer border border-impo_Success_Success"
    >
      <CustomTypography fontSize="Lable_SmallProminet" className="text-impo_Success_Success">
        {discountCodeHelper}
      </CustomTypography>

      <div onClick={onClickHandler}>
        <CustomTypography fontSize="Lable_Medium" className="text-impo_Error_Error">
          لغو کد تخفیف
        </CustomTypography>
      </div>
    </div>
  );
};

export default ApprovedCodeToast;
