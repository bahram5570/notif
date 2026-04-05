import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { SubscriptionMenSupportTypes } from './types';

const SubscriptionMenSupport = ({ supportText }: SubscriptionMenSupportTypes) => {
  return (
    <div className="w-full flex flex-col items-center py-6">
      <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground text-center">
        {supportText}
      </CustomTypography>
    </div>
  );
};

export default SubscriptionMenSupport;
