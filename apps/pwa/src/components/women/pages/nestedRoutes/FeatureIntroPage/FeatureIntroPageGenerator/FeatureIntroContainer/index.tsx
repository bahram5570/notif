import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import { FeatureIntroContainerPropsType } from './type';

const FeatureIntroContainer = ({
  children,
  description,
  title,
  textBtn,
  onClickHandler,
  isDisable = false,
}: FeatureIntroContainerPropsType) => {
  const onClick = () => {
    if (!onClickHandler) {
      return;
    }
    onClickHandler();
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2 px-3 relative mt-12">
      <Typography scale="Headline" size="Medium">
        {title}
      </Typography>
      <Typography scale="Body" size="Medium" textAlign="center" className="px-3">
        {description}
      </Typography>

      {children}
      {textBtn && (
        <div className="fixed bottom-0 p-4 mx-auto w-full" style={{ maxWidth: MAX_SCREEN_WIDTH }}>
          <Button size="large" variant="fill" color="onSurface" onClick={onClick} fullWidth isDisable={isDisable}>
            {textBtn}
          </Button>
        </div>
      )}
    </div>
  );
};

export default FeatureIntroContainer;
