import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';

import { SingleCommentTypes } from './types';

const SingleComment = (props: SingleCommentTypes) => {
  return (
    <div className="w-full flex justify-center px-4">
      <div className="w-full sm:w-[560px] h-fit flex flex-col items-center bg-impo_Neutral_Surface px-6 py-8 rounded-2xl ">
        <div className="flex items-center gap-2 pb-10">
          <div className="relative w-14 h-14">
            <CustomImage fill={true} sizes="56px" alt="userImage" className="object-contain" src={props.userImage} />

            <div className="absolute top-0 -right-4 w-8 h-8 min-w-8 min-h-8 rounded-full flex items-center justify-center bg-impo_White">
              <CustomImage src={props.downloadPortIcon} width={20} height={20} sizes="20px" alt="port" />
            </div>
          </div>

          <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
            {props.userName}
          </CustomTypography>
        </div>

        <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground text-center">
          {props.text}
        </CustomTypography>
      </div>
    </div>
  );
};

export default SingleComment;
