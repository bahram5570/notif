import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

const EmptyState = () => {
  return (
    <div className="p-4 flex flex-col gap-4 justify-center items-center h-full">
      <CustomImage src="/assets/images/noComment.svg" width={100} />

      <div className="flex justify-center items-center">
        <CustomTypography className="text-impo_Neutral_OnBackground text-center" fontSize="Body_Medium">
          پاتوقی وجود ندارد
        </CustomTypography>
      </div>
    </div>
  );
};

export default EmptyState;
