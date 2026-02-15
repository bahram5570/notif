import { CustomBackButton } from '@repo/core/components/ui/CustomBackButton';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';

const ShareExperienceAssociationItemHeader = () => {
  return (
    <div
      className=" fixed left-0 right-0 bg-impo_Neutral_Surface mx-auto top-0 w-full flex flex-col gap-1 p-4"
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
    >
      <div className="flex flex-row-reverse justify-between items-center">
        <CustomBackButton />
        <CustomButton
          className=" !bg-impo_Primary_Primary !border-impo_Primary_Primary !w-fit p-3 "
          onClick={() => {}}
          // isLoading={isLoading}
        >
          <CustomTypography fontSize="Lable_Medium" className="text-impo_White ">
            دنبال کردن
          </CustomTypography>
        </CustomButton>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row-reverse items-center gap-3">
          <CustomImage src="/assets/images/3.webp" width={72} height={72} />
          <div className="flex flex-col items-end gap-1">
            <CustomTypography className="text-impo_Neutral_OnBackground " fontSize="Title_Small">
              مامان اولی‌ها
            </CustomTypography>
            <div className="flex flex-row-reverse gap-2">
              <CustomTypography className="text-impo_Surface_OnSurfaceVariant " fontSize="Body_Small">
                4 تجربه
              </CustomTypography>

              <CustomTypography className="text-impo_Surface_OnSurfaceVariant " fontSize="Body_Small">
                1200 دنبال کننده
              </CustomTypography>
            </div>
          </div>
        </div>
        <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
          اینجا یه اتاق گفتگو مربوط به مامان اولی‌هاست، اگه توام یه مامان اولی هستی پس تجربه‌ت رو با بقیه به اشتراک بذار
        </CustomTypography>
      </div>
    </div>
  );
};

export default ShareExperienceAssociationItemHeader;
