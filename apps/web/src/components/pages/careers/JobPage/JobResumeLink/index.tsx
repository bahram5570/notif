import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { JobResumeLinkTypes } from './types';

const JobResumeLink = ({ id }: JobResumeLinkTypes) => {
  return (
    <CustomLink href={`${id}/resume`}>
      <CustomTypography
        fontSize="Lable_Large"
        className="md:w-[230px] py-[10px] !text-impo_Primary_OnPrimary !bg-impo_Primary_Primary md:py-[12px] mx-auto rounded-full text-center"
      >
        درخواست همکاری
      </CustomTypography>
    </CustomLink>
  );
};

export default JobResumeLink;
