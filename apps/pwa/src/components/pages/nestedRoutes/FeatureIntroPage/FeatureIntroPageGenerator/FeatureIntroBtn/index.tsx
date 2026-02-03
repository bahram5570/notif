import { CustomButton } from '@repo/core/components/ui/CustomButton';

import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.contants';

import { FeatureIntroBtnPropsType } from './type';

const FeatureIntroBtn = ({ onClick, textBtn, testId, isDisable = false }: FeatureIntroBtnPropsType) => {
  return (
    <div className="fixed bottom-0 p-4 mx-auto w-full" style={{ maxWidth: MAX_SCREEN_WIDTH }}>
      <CustomButton
        onClick={onClick}
        testId={testId}
        isDisable={isDisable}
        fontSize="Title_Small"
        className="h-12 !bg-impo_Neutral_OnSurface !text-impo_Neutral_Background !border-impo_Neutral_OnSurface"
      >
        {textBtn}
      </CustomButton>
    </div>
  );
};

export default FeatureIntroBtn;
