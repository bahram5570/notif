import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { PWA_LINK_WOMEN_URL } from '@constants/links.constants';

import { ResultModuleTypes } from './types';

const ResultModule = ({ pregnancyDateResult, weeksResult, onReset }: ResultModuleTypes) => {
  const weekImage = `/assets/images/pregnacy-weeks/week${weeksResult.week}.webp`;

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full flex items-start justify-center gap-4 sm:gap-10">
        <div className="relative w-[174px] h-[174px]">
          <CustomImage src={weekImage} alt="" fill={true} className="object-contain" />
        </div>

        <div className="w-[130px] sm:w-[240px] h-full flex flex-col items-center px-4 pt-5 pb-6 rounded-2xl bg-[url(/assets/images/pregnancyDateBg.webp)] bg-no-repeat bg-cover bg-center">
          <CustomTypography fontSize="Lable_Medium" className="text-center !text-impo_Black">
            تاریخ به دنیا اومدن کوچولوت:f
          </CustomTypography>

          <CustomTypography className="text-center pt-1 !text-impo_Black">{pregnancyDateResult}</CustomTypography>

          <div className="flex justify-center mt-auto cursor-pointer" onClick={onReset}>
            <CustomTypography fontSize="Lable_SmallProminet" className="!text-impo_Pink_500">
              محاسبه دوبارهff
            </CustomTypography>
          </div>
        </div>
      </div>

      <CustomLink
        target="_blank"
        href={PWA_LINK_WOMEN_URL}
        className="absolute bottom-6 left-4 right-4 h-[48px] sm:max-w-[460px] mx-auto mt-auto flex items-center justify-center rounded-full bg-impo_Primary_Primary"
      >
        <CustomTypography fontSize="Title_Small" className="!text-impo_Primary_OnPrimary">
          از ایمپو استفاده کن
        </CustomTypography>
      </CustomLink>
    </div>
  );
};

export default ResultModule;
