import { addCommas } from '../../../utils/numbers';

import { CustomTypography } from '../../ui/CustomTypography';
import { InfoPaymentProps } from './types';

export const InfoPayment = ({ currentValue, discountPrice, payPrice, price, priceUnit }: InfoPaymentProps) => {
  const pricesHandler = (script: string, value: number) => (
    <div className="w-full flex items-center justify-between">
      <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
        {`${addCommas(value)} ${priceUnit}`}
      </CustomTypography>

      <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        {script}
      </CustomTypography>
    </div>
  );

  return (
    <div className="w-full flex flex-col items-end gap-2">
      <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
        اطلاعات پرداخت
      </CustomTypography>

      <div className="w-full px-2 py-4 rounded-xl flex flex-col gap-2 border-[1px] border-impo_Neutral_Surface">
        {pricesHandler('هزینه مشاوره', price)}
        {pricesHandler('تخفیف', discountPrice)}
        {pricesHandler('اعتبار شما', currentValue)}

        <div className="w-full h-[1px] my-1 bg-impo_Neutral_Surface" />
        {pricesHandler('قابل پرداخت', payPrice)}
      </div>
    </div>
  );
};
