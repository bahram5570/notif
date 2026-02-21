'use client';

// import ImpoIcon from '@assets/icons/impoNameSympathy.svg';
import { scrollToIdHandler } from '@utils/navigation';

import { DOWNLOAD_APP_SECTION_ID } from '@components/DownloadApp/DownloadAppWomen/constants';
import CustomButton from '@components/ui/CustomButton';
import CustomTypography from '@components/ui/CustomTypography';
import { useSystem } from '@repo/core/hooks/useSystem';

const SympathyHeadingContents = () => {
  const { breakPoint } = useSystem();

  return (
    <div className="flex flex-col items-center md:items-start">
      {/* <ImpoIcon className="w-[270px] lg:w-[370px] h-auto" /> */}
      <CustomTypography
        tagType="h1"
        className="py-2 lg:pt-2 lg:pb-1 text-center md:text-right !text-impo_Primary_Primary mb-3"
        fontSize={breakPoint.tablet ? 'Headline_Medium' : 'Headline_Large'}
      >
        همدلی و شناخت بیشتر با برنامه پریودی برای پارتنر
      </CustomTypography>
      <CustomTypography
        tagType="p"
        fontSize="Headline_Medium"
        className="py-2 lg:pt-2 lg:pb-1 text-center md:text-right !text-impo_Neutral_OnBackground mb-2"
      >
        لذت و آرامش در رابطه
      </CustomTypography>

      <CustomButton
        className="!w-[120px] lg:!w-[182px] h-[40px] !mt-2 !mb-8 !bg-impo_Primary_Primary !border-impo_Primary_Primary !text-impo_Primary_OnPrimary"
        onClick={() => scrollToIdHandler(DOWNLOAD_APP_SECTION_ID)}
        fontSize={breakPoint.laptop ? 'Lable_Large' : 'Title_Small'}
      >
        نصب ایمپو
      </CustomButton>
    </div>
  );
};

export default SympathyHeadingContents;
