'use client';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { externalLink } from '@utils/navigation';

import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';
import { useSystem } from '@repo/core/hooks/useSystem';

const Hamranj2PageLinkTo = () => {
  const { breakPoint } = useSystem();

  const clickHandler = () => {
    externalLink('https://weareimpo.ir/referal?type=10');
  };

  return (
    <div
      className={`
                    w-full 
                    flex 
                    justify-center 
                    px-6 
                    z-30
                    bg-impo_Neutral_Background
                    ${breakPoint.tablet ? 'fixed bottom-20 left-0 right-0 pt-2 pb-4' : 'mb-10'}
                `}
    >
      <div
        style={{ maxWidth: MAX_SCREEN_WIDTH }}
        className="w-full h-fit p-3 rounded-full bg-impo_Primary_Primary flex justify-center"
        onClick={clickHandler}
      >
        <CustomTypography fontSize="Body_Large" className="text-impo_White">
          شروع دریافت اشتراک
        </CustomTypography>
      </div>
    </div>
  );
};

export default Hamranj2PageLinkTo;
