import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { SubscriptionMenPaymentInfoTypes } from './types';

const SubscriptionMenPaymentInfo = (props: SubscriptionMenPaymentInfoTypes) => {
  const unitText = props.isFree ? '' : props.unit;

  return (
    <div className="w-full" dir="rtl">
      <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground mb-3">
        اطلاعات پرداخت
      </CustomTypography>

      <div className="w-full p-5 rounded-xl bg-impo_Neutral_Surface">
        <div className="w-full flex items-center justify-between pb-4">
          <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
            {props.text}
          </CustomTypography>

          <CustomTypography
            fontSize="Body_Small"
            className="text-impo_Neutral_OnBackground"
          >{`${props.realValueText} ${unitText}`}</CustomTypography>
        </div>

        <div className="w-full flex items-center justify-between pb-4">
          <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
            مقدار تخفیف
          </CustomTypography>

          <CustomTypography
            fontSize="Body_Small"
            className="text-impo_Neutral_OnBackground"
          >{`${props.discountText} ${unitText}`}</CustomTypography>
        </div>

        <div className="w-full flex items-center justify-between">
          <CustomTypography fontSize="Body_Small" className="text-impo_Surface_Outline">
            10% مالیات بر ارزش افزوده
          </CustomTypography>

          <CustomTypography
            fontSize="Body_Small"
            className="text-impo_Surface_Outline"
          >{`${props.valueText} ${unitText}`}</CustomTypography>
        </div>

        <div className='w-full h-[1px] bg-impo_Grey_50 my-3' />

        <div className="w-full flex items-center justify-between">
          <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            مبلغ قابل پرداخت
          </CustomTypography>

          <CustomTypography
            fontSize="Body_Medium"
            className="text-impo_Neutral_OnBackground"
          >{`${props.totalPayText} ${unitText}`}</CustomTypography>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionMenPaymentInfo;
