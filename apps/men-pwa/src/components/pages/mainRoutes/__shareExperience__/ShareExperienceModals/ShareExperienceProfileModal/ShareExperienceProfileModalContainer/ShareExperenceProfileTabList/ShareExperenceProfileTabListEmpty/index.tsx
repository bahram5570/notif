import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

const ShareExperenceProfileTabListEmpty = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 pt-16">
      <CustomImage src="/assets/images/noComment.svg" width={100} />

      <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        هنوز هیچ فعالیتی ثبت نشده
      </CustomTypography>
    </div>
  );
};

export default ShareExperenceProfileTabListEmpty;
