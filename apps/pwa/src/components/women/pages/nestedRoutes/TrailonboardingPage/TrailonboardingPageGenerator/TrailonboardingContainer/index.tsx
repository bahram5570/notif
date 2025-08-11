import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import { TrailonboardingContainerPropsType } from './type';

const TrailonboardingContainer = ({
  children,
  description,
  title,
  textBtn,
  onClickHandler,
}: TrailonboardingContainerPropsType) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-2 px-3 relative">
        <Typography scale="Headline" size="Medium">
          {title}
        </Typography>
        <Typography scale="Body" size="Medium" textAlign="center" className="px-3">
          {description}
        </Typography>

        {children}
        {textBtn && (
          <div className="fixed bottom-0 p-4 mx-auto w-full" style={{ maxWidth: MAX_SCREEN_WIDTH }}>
            <Button size="large" variant="fill" color="onSurface" onClick={onClickHandler} fullWidth>
              {textBtn}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrailonboardingContainer;
