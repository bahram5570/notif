import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { CommentsListEmptyProps } from './type';

const CommentsListEmpty = ({ self }: CommentsListEmptyProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-4 pt-10">
      <CustomImage_NEW src="/assets/images/noComment.svg" width={100} height={100} />

      <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        {`هنوز هیچ نظری برای ${self ? 'تجربه تو' : 'این تجربه '} ثبت نشده`}
      </CustomTypography>
    </div>
  );
};

export default CommentsListEmpty;
