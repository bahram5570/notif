import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import StarRating from '@components/StarRating';

import { CommentItemProps } from './types';

const CommentItem = ({ userCommentPositive, userCommentNegitive, userRate = 4, userText }: CommentItemProps) => {
  return (
    <div className="rounded-[16px] px-3 py-[16px] bg-impo_Neutral_Surface">
      <StarRating rating={userRate} />
      <CustomTypography fontSize="Body_Large" tagType="h6" className="mt-4 !text-impo_Neutral_OnBackground">
        {userText}
      </CustomTypography>
      <span className="w-full block h-[1px] mt-4 mb-3 mx-0 bg-impo_Neutral_Background"></span>
      <div className="grid items-center gap-y-2 gap-x-2 m-[12px]">
        {userCommentPositive.map((item, index) => (
          <div className="flex gap-2 items-center" key={index}>
            <span className="w-2 h-2 bg-[#14B8A6] rounded-full"></span>
            <CustomTypography
              fontSize="Body_Small"
              tagType="span"
              className="text-right !text-impo_Neutral_OnBackground"
            >
              {item}
            </CustomTypography>
          </div>
        ))}
        {userCommentNegitive.map((item, index) => (
          <div className="flex gap-2 items-center" key={index}>
            <span className="w-2 h-2 bg-[#EF4444] rounded-full"></span>
            <CustomTypography
              fontSize="Body_Small"
              tagType="span"
              className="text-right !text-impo_Neutral_OnBackground"
            >
              {item}
            </CustomTypography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentItem;
