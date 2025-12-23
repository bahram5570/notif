'use client';

import { scrollToIdHandler } from '@utils/navigation';

import { DOWNLOAD_APP_SECTION_ID } from '@components/DownloadApp/DownloadAppWomen/constants';
import CustomButton from '@components/ui/CustomButton';
import useBreakPoint from '@hooks/useBreakPoint';

const HomeHeadingContentBtn = () => {
  const { breakPoint } = useBreakPoint();

  return (
    <CustomButton
      varient="FREE_COLORS"
      onClick={() => scrollToIdHandler(DOWNLOAD_APP_SECTION_ID)}
      fontSize={breakPoint.laptop ? 'Lable_Large' : 'Title_Small'}
      backgroundColor=""
      borderColor=""
      textColor=""
      className="!w-[120px] lg:!w-[182px] h-[40px] !mt-2 !mb-8 !bg-impo_Primary_Primary !border-impo_Primary_Primary !text-impo_Primary_OnPrimary"
      id="install_home"
    >
      دانلود ایمپو
    </CustomButton>
  );
};

export default HomeHeadingContentBtn;
