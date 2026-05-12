import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

const ShareExperenceProfileTabListEmpty = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 pt-16">
      <CustomImage_NEW src="/assets/images/noComment.svg" width={100} height={100} />

      <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        هنوز هیچ فعالیتی ثبت نشده
      </CustomTypography>
    </div>
  );
};

export default ShareExperenceProfileTabListEmpty;
