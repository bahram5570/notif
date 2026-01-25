import { addCommas } from '@utils/numbers';

import Dark_Typography from '@components/ui/Dark_Typography';

import { InfoPaymentProps } from './types';

const InfoPayment = ({ currentValue, discountPrice, payPrice, price, priceUnit }: InfoPaymentProps) => {
  const pricesHandler = (script: string, value: number) => (
    <div className="w-full flex items-center justify-between">
      <Dark_Typography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
        {`${addCommas(value)} ${priceUnit}`}
      </Dark_Typography>

      <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        {script}
      </Dark_Typography>
    </div>
  );

  return (
    <div className="w-full flex flex-col items-end gap-2">
      <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
        اطلاعات پرداخت
      </Dark_Typography>

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

export default InfoPayment;
