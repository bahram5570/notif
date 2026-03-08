import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { SubscriptionMenPaymentInfoTypes } from './types';

const SubscriptionMenPaymentInfo = (props: SubscriptionMenPaymentInfoTypes) => {
  return (
    <div className="w-full">
      <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground ml-auto mb-2">
        اطلاعات پرداخت
      </CustomTypography>

      <div className="w-full p-5 rounded-xl bg-impo_Neutral_Surface"></div>
    </div>
  );
};

export default SubscriptionMenPaymentInfo;
