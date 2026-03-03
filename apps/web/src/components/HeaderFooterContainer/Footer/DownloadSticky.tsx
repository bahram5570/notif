import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { scrollToIdHandler } from '@utils/navigation';

import { DOWNLOAD_APP_SECTION_ID } from '@components/DownloadApp/DownloadAppWomen/constants';
import CustomButton from '@components/ui/CustomButton';
import CustomLink from '@components/ui/CustomLink';

const DownloadSticky = () => {
  return (
    <div
      className="
                  fixed 
                  w-full 
                  flex 
                  items-center 
                  gap-x-4
                  px-4
                  py-4
                  bottom-[80px]
                  bg-impo_Neutral_Surface
                  z-10
                  border-t 
                  border-impo_Surface_OutlineVariant
                "
    >
      <CustomButton
        onClick={() => scrollToIdHandler(DOWNLOAD_APP_SECTION_ID)}
        className="rounded-full !border-none !bg-impo_Pink_500 text-impo_White !h-auto py-2 px-4 text-center w-full"
      >
        <CustomTypography fontSize="Lable_Large">نصب ایمپو خانم‌ها</CustomTypography>
      </CustomButton>
      <CustomLink
        href={`/men`}
        className="rounded-full bg-impo_Blue_500 text-impo_White py-2 px-4 text-center w-full flex justify-items-center justify-center"
      >
        <CustomTypography fontSize="Lable_Large">نصب ایمپو آقایان</CustomTypography>
      </CustomLink>
    </div>
  );
};

export default DownloadSticky;
