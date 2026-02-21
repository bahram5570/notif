import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomLink from '@components/ui/CustomLink';
import { PWA_LINK_WOMEN_URL } from '@constants/links.constants';

import { ResultModuleTypes } from './types';

const ResultModule = ({ result, onReset }: ResultModuleTypes) => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full sm:w-[400px] h-fit py-6 rounded-2xl border-[1px] mt-8 mb-10 border-impo_Cyan_600 bg-impo_White">
        <CustomTypography fontSize="Lable_Medium" className="text-center !text-impo_Black">
          روز تخمک گذاری این دوره شما:
        </CustomTypography>

        <CustomTypography fontSize="Title_Large" className="text-center pt-2 !text-impo_Black">
          {result}
        </CustomTypography>
      </div>

      <div className="flex justify-center cursor-pointer" onClick={onReset}>
        <CustomTypography fontSize="Title_Small" className="!text-impo_Pink_500">
          محاسبه دوباره روز تخمک‌گذاری
        </CustomTypography>
      </div>

      <CustomLink
        target="_blank"
        href={PWA_LINK_WOMEN_URL}
        id="install_tool"
        className="absolute bottom-6 left-4 right-4 h-[48px] sm:max-w-[460px] mx-auto mt-auto flex items-center justify-center rounded-full bg-impo_Pink_500"
      >
        <CustomTypography fontSize="Title_Small" className="!text-impo_White">
          از ایمپو استفاده کن
        </CustomTypography>
      </CustomLink>
    </div>
  );
};

export default ResultModule;
