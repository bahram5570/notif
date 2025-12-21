import ImpoNameIcon from '@assets/icons/impo3.svg';

import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { JobTitleTypes } from './types';

const JobTitle = ({ title, id }: JobTitleTypes) => {
  return (
    <div className="w-full flex items-center justify-between pb-6 md:pb-8">
      <div className="flex items-center gap-2">
        <ImpoNameIcon className="w-8 h-auto" />
        <div className="w-[1px] h-[26px] !bg-impo_Neutral_Surface" />
        <CustomTypography fontSize="Title_Medium" className="!text-impo_Neutral_OnBackground">
          {title}
        </CustomTypography>
      </div>

      <CustomLink href={`${id}/resume`} className="hidden md:block">
        <CustomTypography
          fontSize="Lable_Large"
          className="py-[10px] px-[22px] rounded-full dark:!bg-impo_Primary_OnPrimary !bg-impo_Primary_Primary !text-impo_Primary_OnPrimary dark:!text-impo_Primary_Primary"
        >
          درخواست همکاری
        </CustomTypography>
      </CustomLink>
    </div>
  );
};

export default JobTitle;
