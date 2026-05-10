'use client';

import { scrollToIdHandler } from '@utils/navigation';

import { DOWNLOAD_APP_SECTION_ID } from '@components/DownloadApp/DownloadAppWomen/constants';
import CustomButton from '@components/ui/CustomButton';
import { FOOTER_HEIGHT, MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';

const MenShareExperienceFooter = () => {
  return (
    <div
      className="fixed flex right-0 lg:hidden left-0 h-20 mx-auto bg-impo_Neutral_Background justify-center items-center z-50"
      style={{ maxWidth: MAX_SCREEN_WIDTH, bottom: FOOTER_HEIGHT }}
    >
      <CustomButton
        onClick={() => scrollToIdHandler(DOWNLOAD_APP_SECTION_ID)}
        fontSize="Title_Small"
        className="
                     w-full
                    h-[40px] 
                    lg:h-[60px]  
                    !bg-impo_PrimaryMan_PrimaryMan
                    !border-impo_PrimaryMan_PrimaryMan 
                    !text-impo_Primary_OnPrimary
                    mx-4
                    lg:flex
                  "
      >
        دانلود ایمپو آقایان
      </CustomButton>
    </div>
  );
};

export default MenShareExperienceFooter;
