import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { FeatureIntroContainerPropsType } from './type';

const FeatureIntroContainer = ({ children, description, title }: FeatureIntroContainerPropsType) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 px-3 relative mt-12">
      <CustomTypography className=" text-impo_Neutral_OnBackground" fontSize="Headline_Medium">
        {title}
      </CustomTypography>
      <CustomTypography fontSize="Body_Medium" className="px-3 text-impo_Neutral_OnBackground text-center">
        {description}
      </CustomTypography>

      {children}
    </div>
  );
};

export default FeatureIntroContainer;
