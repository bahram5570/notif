import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { EmptyStatePropsType } from './type';

const EmptyState = ({ EmptyStateScript }: EmptyStatePropsType) => {
  return (
    <div className="p-4 flex flex-col gap-4 justify-center items-center h-full">
      <CustomImage src="/assets/images/emptyState.webp" width={100} />

      <div className="flex justify-center items-center">
        <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Body_Medium">
          {EmptyStateScript}
        </CustomTypography>
      </div>
    </div>
  );
};

export default EmptyState;
