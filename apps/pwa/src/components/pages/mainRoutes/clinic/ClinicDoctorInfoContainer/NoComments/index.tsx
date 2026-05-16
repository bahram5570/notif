import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

const NoComments = () => {
  return (
    <div className="w-full flex flex-col items-center gap-3 pt-36">
      <CustomImage_NEW src="/assets/images/noComments.webp" width={120} height={50} />

      <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        نظری برای این دکتر ثبت نشده
      </CustomTypography>
    </div>
  );
};

export default NoComments;
