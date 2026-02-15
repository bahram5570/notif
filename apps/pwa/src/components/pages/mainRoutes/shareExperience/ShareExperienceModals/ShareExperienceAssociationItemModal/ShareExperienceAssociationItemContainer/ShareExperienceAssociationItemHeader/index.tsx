import { useRef } from 'react';

import { CustomBackButton } from '@repo/core/components/ui/CustomBackButton';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';

import AssociationItemHeaderInfo from './AssociationItemHeaderInfo';

type Props = {
  isScrolled: boolean;
};

const ShareExperienceAssociationItemHeader = ({ isScrolled }: Props) => {
  const scrossllRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className=" fixed left-0 right-0 mx-auto top-0 w-full z-30 transition-all duration-300 p-4 bg-impo_Neutral_Surface"
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
      ref={scrossllRef}
    >
      <div className="flex flex-row-reverse justify-between items-center">
        <div className="flex flex-row-reverse items-center gap-2">
          <CustomBackButton />
          {isScrolled && <AssociationItemHeaderInfo />}
        </div>

        <CustomButton className=" !bg-impo_Primary_Primary !border-impo_Primary_Primary !w-fit p-3 " onClick={() => {}}>
          <CustomTypography fontSize="Lable_Medium" className="text-impo_White ">
            دنبال کردن
          </CustomTypography>
        </CustomButton>
      </div>

      <div
        className={` transition-all duration-600 ease-in-out ${isScrolled ? 'opacity-0 -translate-y-2 scale-y-95 max-h-0' : 'opacity-100 translate-y-0 scale-y-100 max-h-[300px]'}`}
        style={{
          overflow: 'hidden',
        }}
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-row-reverse items-center gap-3">
            <CustomImage src="/assets/images/3.webp" width={72} height={72} />
            <AssociationItemHeaderInfo />
          </div>

          <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            اینجا یه اتاق گفتگو مربوط به مامان اولی‌هاست، اگه توام یه مامان اولی هستی پس تجربه‌ت رو با بقیه به اشتراک
            بذار
          </CustomTypography>
        </div>
      </div>
    </div>
  );
};

export default ShareExperienceAssociationItemHeader;
