'use client';

import ImpoIcon from '@assets/icons/impoNameMen.svg';
import { scrollToIdHandler } from '@utils/navigation';

import { DOWNLOAD_APP_SECTION_ID } from '@components/DownloadApp/DownloadAppWomen/constants';
import CustomButton from '@components/ui/CustomButton';
import CustomTypography from '@components/ui/CustomTypography';
import { useSystem } from '@repo/core/hooks/useSystem';

const MenHeadingContents = () => {
  const { breakPoint } = useSystem();

  return (
    <div className="flex flex-col items-center md:items-start">
      <ImpoIcon className="w-[270px] lg:w-[370px] h-auto" />

      <CustomTypography
        tagType="h1"
        fontSize="Headline_Medium"
        className="py-2 lg:pt-2 lg:pb-1 text-center md:text-right !text-impo_Neutral_OnBackground"
      >
        مراقبت از خود و رابطه
      </CustomTypography>

      <CustomButton
        className="!w-[120px] lg:!w-[182px] h-[40px] !mt-2 !mb-8 !bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan"
        onClick={() => scrollToIdHandler(DOWNLOAD_APP_SECTION_ID)}
        fontSize={breakPoint.laptop ? 'Lable_Large' : 'Title_Small'}
        id="install_men"
      >
        نصب ایمپو
      </CustomButton>
    </div>
  );
};

export default MenHeadingContents;
