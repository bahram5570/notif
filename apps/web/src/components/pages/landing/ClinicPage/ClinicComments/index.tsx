import CustomTypography from '@components/ui/CustomTypography';

import CommentList from './CommentList';

const ClinicComments = () => {
  return (
    <section className="mt-[42px] lg:w-full">
      <CustomTypography
        fontSize="Title_Medium"
        tagType="h5"
        className="text-center mx-4 mb-[16px] !text-impo_Neutral_OnBackground"
      >
        نظرات کاربران
      </CustomTypography>
      <CommentList />
    </section>
  );
};

export default ClinicComments;
