import InfoIcon from '@assets/shared/icons/infoIcon.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

const SubscriptionMenTaxInfo = () => {
  return (
    <div className="w-full flex flex-row-reverse items-center gap-2 py-5">
      <InfoIcon className="w-5 h-auto fill-impo_Yellow" />

      <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        به مبالغ فوق 10% ارزش افزوده اضافه خواهد شد.
      </CustomTypography>
    </div>
  );
};

export default SubscriptionMenTaxInfo;
