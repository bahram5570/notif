import Dark_Typography from '@components/ui/Dark_Typography';

import { OnboardingContextPropsType } from './type';

const OnboardingContext = ({ description, title }: OnboardingContextPropsType) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 h-20 px-4">
      <Dark_Typography className="text-impo_Neutral_OnBackground" fontSize="Headline_Small">
        {title}
      </Dark_Typography>
      <Dark_Typography className="text-impo_Surface_InverseSurface text-center" fontSize="Body_Medium">
        {description}
      </Dark_Typography>
    </div>
  );
};

export default OnboardingContext;
