'use client';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { scrollToIdHandler } from '@utils/navigation';

import { DOWNLOAD_APP_SECTION_ID } from '@components/DownloadApp/DownloadAppWomen/constants';
import CustomButton from '@components/ui/CustomButton';
import CustomImage from '@components/ui/CustomImage';
import { useSystem } from '@repo/core/hooks/useSystem';

const SympathyBanner = () => {
  const { breakPoint } = useSystem();

  return (
    <div className="w-full md:w-11/12 lg:w-10/12 px-4 md:px-0 mx-auto">
      <div className="w-full rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6 bg-impo_Neutral_Surface px-4 md:px-16 py-8">
        <div className="flex flex-col items-center md:items-start md:py-8">
          <CustomTypography
            className="text-impo_Neutral_OnBackground"
            fontSize={`${breakPoint.laptop ? 'Title_Medium' : 'Title_Large'}`}
          >
            مراقبت در تمام فصل‌های زندگی
          </CustomTypography>

          <CustomTypography
            className="text-impo_Neutral_OnBackground pt-3 pb-4 text-center md:text-start"
            fontSize={`${breakPoint.laptop ? 'Body_Medium' : 'Body_Large'}`}
          >
            چه دونفره باشید و چه در مسیر بارداری یا تولد، ایمپو مراقبتونه. برنامه پریودی برای پارتنر ایمپو تمام اطلاعات
            مهم چرخۀ قاعدگی و یا اطلاعات نوزاد رو با پارتنرتون هم به اشتراک می‌گذاره. چون قرار نیست در هیچ مسیری تنها
            باشید.
          </CustomTypography>

          <CustomButton
            onClick={() => scrollToIdHandler(DOWNLOAD_APP_SECTION_ID)}
            fontSize={breakPoint.laptop ? 'Lable_Large' : 'Title_Small'}
            className="!w-[170px] lg:!w-[206px] h-[40px] lg:h-[48px] !bg-impo_Primary_Primary !border-impo_Primary_Primary !text-impo_Primary_OnPrimary"
          >
            دانلود ایمپو
          </CustomButton>
        </div>

        <CustomImage
          alt=""
          fill={true}
          src="/assets/images/sympathyBanner.webp"
          className="!relative object-contain object-left w-full h-auto max-h-[300px]"
        />
      </div>
    </div>
  );
};

export default SympathyBanner;
