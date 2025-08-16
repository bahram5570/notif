import Typography from '@components/ui/Typography';

import { FeatureIntroContainerPropsType } from './type';

const FeatureIntroContainer = ({ children, description, title }: FeatureIntroContainerPropsType) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 px-3 relative mt-12">
      <Typography scale="Headline" size="Medium">
        {title}
      </Typography>
      <Typography scale="Body" size="Medium" textAlign="center" className="px-3">
        {description}
      </Typography>

      {children}
    </div>
  );
};

export default FeatureIntroContainer;
