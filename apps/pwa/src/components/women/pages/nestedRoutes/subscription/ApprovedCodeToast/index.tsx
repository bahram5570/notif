import { useEffect, useRef } from 'react';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { ApprovedCodeToastPropsType } from './type';

const ApprovedCodeToast = ({ discountCodeHelper, callApi, onRestHandler }: ApprovedCodeToastPropsType) => {
  const { colors } = useTheme();
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
    onRestHandler('newKey');
  };

  return (
    <div
      ref={ref}
      className="py-3 px-4 rounded-lg flex flex-row-reverse w-full justify-between items-center"
      style={{ border: `1px solid ${colors.Success_Success}`, background: colors.Success_SuccessContainer }}
    >
      <Typography scale="Lable" size="SmallProminet" color="Success_Success">
        {discountCodeHelper}
      </Typography>

      <div onClick={onClickHandler}>
        <Typography scale="Lable" size="Medium" color="Error_Error">
          لغو کد تخفیف
        </Typography>
      </div>
    </div>
  );
};

export default ApprovedCodeToast;
