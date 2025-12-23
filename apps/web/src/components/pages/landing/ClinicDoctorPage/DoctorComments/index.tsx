import CustomTypography from '@components/ui/CustomTypography';

import { CommentsTypes } from '../types';
import CommentList from './CommentList';
import EmptyComment from './EmptyComment';

const DoctorComments = ({ comments }: { comments: CommentsTypes[] }) => {
  return (
    <section className="m-7">
      <CustomTypography fontSize="Lable_Large" className="text-right !text-impo_Neutral_OnBackground" tagType="h3">
        نظرات کاربران
      </CustomTypography>

      {!!comments.length && <CommentList comments={comments} />}
      {!comments.length && <EmptyComment />}
    </section>
  );
};
export default DoctorComments;
