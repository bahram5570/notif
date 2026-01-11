import Dark_Typography from '@components/ui/Dark_Typography';

import { FeatureIntroContainerPropsType } from './type';

const FeatureIntroContainer = ({ children, description, title }: FeatureIntroContainerPropsType) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 px-3 relative mt-12">
      <Dark_Typography className=" text-impo_Neutral_OnBackground" fontSize="Headline_Medium">
        {title}
      </Dark_Typography>
      <Dark_Typography fontSize="Body_Medium" className="px-3 text-impo_Neutral_OnBackground text-center">
        {description}
      </Dark_Typography>

      {children}
    </div>
  );
};

export default FeatureIntroContainer;
