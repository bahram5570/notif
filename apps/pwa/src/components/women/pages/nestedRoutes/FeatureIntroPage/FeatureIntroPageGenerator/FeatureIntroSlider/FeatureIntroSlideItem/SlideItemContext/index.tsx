import Typography from '@components/ui/Typography';

import { SlideItemContextPropsType } from './type';

const SlideItemContext = ({ title, description }: SlideItemContextPropsType) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2  px-4">
      <Typography size="Small" scale="Headline" color="Neutral_OnBackground" textAlign="center">
        {title}
      </Typography>
      <Typography size="Medium" scale="Body" color="Surface_InverseSurface" textAlign="center">
        {description}
      </Typography>
    </div>
  );
};

export default SlideItemContext;
