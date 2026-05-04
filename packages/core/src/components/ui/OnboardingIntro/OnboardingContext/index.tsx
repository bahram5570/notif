import { CustomTypography } from '../../CustomTypography';
import { OnboardingContextPropsType } from './type';

const OnboardingContext = ({ description, title }: OnboardingContextPropsType) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 h-20 px-4">
      <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Headline_Small">
        {title}
      </CustomTypography>

      <CustomTypography className="text-impo_Surface_InverseSurface text-center" fontSize="Body_Medium">
        {description}
      </CustomTypography>
    </div>
  );
};

export default OnboardingContext;
