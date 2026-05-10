'use client';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { scrollToIdHandler } from '@utils/navigation';

import { DOWNLOAD_APP_SECTION_ID } from '@components/DownloadApp/DownloadAppWomen/constants';
import CustomButton from '@components/ui/CustomButton';
import { useSystem } from '@repo/core/hooks/useSystem';

const SympathyHeading2 = () => {
  const { breakPoint } = useSystem();

  return (
    <div className="w-full flex flex-col items-center py-5 px-4">
      <CustomTypography
        className="text-impo_Neutral_OnBackground"
        fontSize={`${breakPoint.laptop ? 'Title_Medium' : 'Title_Large'}`}
      >
        آگاهی همدلانه، همراهی بالغانه
      </CustomTypography>

      <CustomTypography
        className="text-impo_Neutral_OnBackground text-center pt-3 pb-6"
        fontSize={`${breakPoint.laptop ? 'Body_Medium' : 'Body_Large'}`}
      >
        با آگاهی پارتنر از چرخۀ قاعدگی، می‌تونید برای تصمیم‌هایی مثل بارداری یا پیشگیری، دونفره برنامه‌ریزی کنید.
      </CustomTypography>

      <CustomButton
        onClick={() => scrollToIdHandler(DOWNLOAD_APP_SECTION_ID)}
        fontSize={breakPoint.laptop ? 'Lable_Large' : 'Title_Small'}
        className="!w-[170px] h-[40px] lg:h-[48px] !bg-impo_Primary_Primary !border-impo_Primary_Primary !text-impo_Primary_OnPrimary"
      >
        دانلود ایمپو
      </CustomButton>
    </div>
  );
};

export default SympathyHeading2;
