import CustomTypography from '@components/ui/CustomTypography';

import CommentsSlider from './CommentsSlider';
import { CommentsTypes } from './types';

const Comments = ({ list }: CommentsTypes) => {
  return (
    <div className="w-full flex flex-col items-center py-8">
      <CustomTypography fontSize="Title_Medium" className="pb-4 !text-impo_Neutral_OnBackground">
        نظرات کاربران
      </CustomTypography>

      <CommentsSlider list={list} />
    </div>
  );
};

export default Comments;
