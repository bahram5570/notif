import { useEffect, useRef } from 'react';

import Dark_Typography from '@components/ui/Dark_Typography';

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
      <Dark_Typography fontSize="Lable_SmallProminet" className="text-impo_Success_Success">
        {discountCodeHelper}
      </Dark_Typography>

      <div onClick={onClickHandler}>
        <Dark_Typography fontSize="Lable_Medium" className="text-impo_Error_Error">
          لغو کد تخفیف
        </Dark_Typography>
      </div>
    </div>
  );
};

export default ApprovedCodeToast;
