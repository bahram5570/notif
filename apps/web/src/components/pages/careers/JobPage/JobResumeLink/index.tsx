import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { JobResumeLinkTypes } from './types';

const JobResumeLink = ({ id }: JobResumeLinkTypes) => {
  return (
    <CustomLink href={`${id}/resume`}>
      <CustomTypography
        fontSize="Lable_Large"
        className="md:w-[230px] py-[10px] md:py-[12px] mx-auto rounded-full text-center dark:!bg-impo_Primary_OnPrimary !bg-impo_Primary_Primary !text-impo_Primary_OnPrimary dark:!text-impo_Primary_Primary"
      >
        درخواست همکاری
      </CustomTypography>
    </CustomLink>
  );
};

export default JobResumeLink;
