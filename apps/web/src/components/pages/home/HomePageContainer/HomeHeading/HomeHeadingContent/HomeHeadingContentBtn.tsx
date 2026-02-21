'use client';

import { scrollToIdHandler } from '@utils/navigation';

import { DOWNLOAD_APP_SECTION_ID } from '@components/DownloadApp/DownloadAppWomen/constants';
import CustomButton from '@components/ui/CustomButton';
import { useSystem } from '@repo/core/hooks/useSystem';

const HomeHeadingContentBtn = () => {
  const { breakPoint } = useSystem();

  return (
    <CustomButton
      onClick={() => scrollToIdHandler(DOWNLOAD_APP_SECTION_ID)}
      fontSize={breakPoint.laptop ? 'Lable_Large' : 'Title_Small'}
      className="!w-[120px] lg:!w-[182px] h-[40px] !mt-2 !mb-8 !bg-impo_Primary_Primary !border-impo_Primary_Primary !text-impo_Primary_OnPrimary"
      id="install_home"
    >
      دانلود ایمپو
    </CustomButton>
  );
};

export default HomeHeadingContentBtn;
