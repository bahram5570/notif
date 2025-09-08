import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import { CommentsTypes } from '../types';
import CommentList from './CommentList';
import EmptyComment from './EmptyComment';

const DoctorComments = ({ comments }: { comments: CommentsTypes[] }) => {
  return (
    <section className="m-7">
      <CustomTypography
        fontSize="Lable_Large"
        className="text-right"
        tagType="h3"
        style={{ color: COLORS_LIST.Neutral_OnBackground }}
      >
        نظرات کاربران
      </CustomTypography>
      {!!comments.length && <CommentList comments={comments} />}
      {!comments.length && <EmptyComment />}
    </section>
  );
};
export default DoctorComments;
