import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { EmptyStatePropsType } from './type';

const EmptyState = ({ associationName }: EmptyStatePropsType) => {
  return (
    <div className="p-4 flex flex-col gap-4 justify-center items-center h-full">
      <CustomImage_NEW src="/assets/images/noComment.svg" width={100} height={100} />

      <div className="flex justify-center items-center">
        <CustomTypography className="text-impo_Neutral_OnBackground text-center" fontSize="Body_Medium">
          {` اولین نفری باش که در پاتوق ${associationName} تجربه ثبت می‌کنه`}
        </CustomTypography>
      </div>
    </div>
  );
};

export default EmptyState;
