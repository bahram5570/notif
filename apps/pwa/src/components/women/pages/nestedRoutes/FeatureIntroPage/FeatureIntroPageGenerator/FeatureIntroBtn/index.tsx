import Button from '@components/ui/Button';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import { FeatureIntroBtnPropsType } from './type';

const FeatureIntroBtn = ({ onClick, textBtn, testId, isDisable = false }: FeatureIntroBtnPropsType) => {
  return (
    <div className="fixed bottom-0 p-4 mx-auto w-full" style={{ maxWidth: MAX_SCREEN_WIDTH }}>
      <Button
        size="large"
        variant="fill"
        color="onSurface"
        onClick={onClick}
        fullWidth
        testId={testId}
        isDisable={isDisable}
      >
        {textBtn}
      </Button>
    </div>
  );
};

export default FeatureIntroBtn;
