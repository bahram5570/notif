import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

const CommentsListEmpty = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4 pt-10">
      <CustomImage src="/assets/images/noComment.svg" width={100} />
      <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        هنوز نظری برای این برنامه ثبت نشده
      </CustomTypography>
    </div>
  );
};

export default CommentsListEmpty;
