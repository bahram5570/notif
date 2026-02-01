import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { ContentWrapperPropsType } from './type';

const ContentWrapper = ({ children, description, label }: ContentWrapperPropsType) => {
  return (
    <div className="flex flex-col gap-2 items-end">
      <div className="flex flex-col items-end">
        {label && (
          <CustomTypography fontSize="Lable_MediumProminet" className="text-impo_Neutral_OnBackground">
            {label}
          </CustomTypography>
        )}

        {description && (
          <CustomTypography className="text-impo_Surface_Outline" fontSize="Body_Small">
            {description}
          </CustomTypography>
        )}
      </div>
      {children}
    </div>
  );
};

export default ContentWrapper;
