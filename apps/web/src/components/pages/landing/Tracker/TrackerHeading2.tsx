'use client';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { scrollToIdHandler } from '@utils/navigation';

import { DOWNLOAD_APP_SECTION_ID } from '@components/DownloadApp/DownloadAppWomen/constants';
import CustomButton from '@components/ui/CustomButton';
import { useSystem } from '@repo/core/hooks/useSystem';

const TrackerHeading2 = () => {
  const { breakPoint } = useSystem();

  return (
    <div className="w-full md:w-11/12 lg:w-8/12 px-4 md:px-0 mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-8 py-5">
      <div className="w-full flex flex-col md:flex-row gap-4">
        <CardGenerator title="ایمپو" description={`بهترین برنامه پریود\n فارسی`} />
        <CardGenerator title="تایید شده" description={`توسط پزشکان و روان‌شناسان\n مطرح`} />
      </div>

      <div className="flex flex-col items-center md:items-start gap-4">
        <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
          تو از آخرین روز پریود و علائمت بگو. ایمپو به‌عنوان نرم افزار محاسبه سیکل قاعدگی می‌گه تو کدوم فاز چرخه‌ای، این
          روزها چه چیزهایی طبیعیه و چه کارهایی می‌تونه حالت رو بهتر کنه.
        </CustomTypography>

        <CustomButton
          onClick={() => scrollToIdHandler(DOWNLOAD_APP_SECTION_ID)}
          fontSize={breakPoint.laptop ? 'Lable_Large' : 'Title_Small'}
          className="!w-[170px] h-[40px] lg:h-[48px] !bg-impo_Primary_Primary !border-impo_Primary_Primary !text-impo_Primary_OnPrimary"
        >
          دانلود ایمپو
        </CustomButton>
      </div>
    </div>
  );
};

export default TrackerHeading2;

const CardGenerator = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="flex flex-col items-center w-full md:w-[260px] h-fit gap-2 p-4 rounded-2xl bg-impo_Neutral_Surface">
      <CustomTypography fontSize="Headline_Small" className="text-impo_Primary_Primary">
        {title}
      </CustomTypography>

      <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground text-center">
        {description}
      </CustomTypography>
    </div>
  );
};
