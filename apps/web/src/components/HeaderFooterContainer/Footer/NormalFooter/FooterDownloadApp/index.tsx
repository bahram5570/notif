'use client';

import ImpoIcon from '@assets/icons/impo.svg';
import { scrollToIdHandler } from '@utils/navigation';

import { DOWNLOAD_APP_SECTION_ID } from '@components/DownloadApp/DownloadAppWomen/constants';
import CustomButton2 from '@components/ui/CustomButton2';
import CustomTypography from '@components/ui/CustomTypography';
import { FOOTER_HEIGHT } from '@constants/app.constants';
import { useRouter } from 'next/navigation';

const FooterDownloadApp = () => {
  const router = useRouter();

  const clickHandler = () => {
    const status = scrollToIdHandler(DOWNLOAD_APP_SECTION_ID);

    if (status === 'notFound') {
      router.push('/download');
    }
  };

  return (
    <div
      style={{ bottom: FOOTER_HEIGHT, height: FOOTER_HEIGHT }}
      className="fixed left-0 right-0 flex flex-col items-center justify-between  shadow-2xl z-10 lg:hidden"
    >
      <div className="w-full h-[80px] flex items-center justify-between px-4 shadow-2xl z-10 bg-impo_White lg:hidden">
        <div className="flex items-center gap-2">
          <ImpoIcon className="w-10" />
          <CustomTypography fontSize="Lable_Large">اپلیکیشن ایمپو</CustomTypography>
        </div>

        <CustomButton2 className="w-fit" fontSize="Lable_Large" onClick={clickHandler}>
          دریافت برنامه
        </CustomButton2>
      </div>
    </div>
  );
};

export default FooterDownloadApp;
