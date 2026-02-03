import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { colorFormatConverter } from '@repo/core/utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import useWidgetActions from '@hooks/useWidgetActions';

import PopupTwoStepsContainer from '../PopupTwoStepsContainer';
import { PopupInteractionRewardProps } from './types';

const PopupInteractionReward = ({ data, hasTwoStepsInteractionReward }: PopupInteractionRewardProps) => {
  const { actionHandler } = useWidgetActions();

  const submitHandler = () => {
    actionHandler(data.button.action);
  };

  return (
    <PopupTwoStepsContainer currentStep={hasTwoStepsInteractionReward ? 2 : null}>
      <>
        <div className="w-full px-8 py-5">
          <CustomImage src={data.image} />
        </div>

        <div className="flex flex-col items-center h-full px-4 pt-10 pb-5 bg-impo_Neutral_Surface">
          <CustomTypography
            fontSize="Headline_Small"
            className="w-full px-6 text-center text-impo_Neutral_OnBackground"
          >
            {data.title}
          </CustomTypography>

          <CustomTypography
            fontSize="Body_Medium"
            className="w-full px-4 pt-1 text-center text-impo_Neutral_OnBackground"
          >
            {data.description}
          </CustomTypography>

          <CustomButton
            fontSize="Title_Small"
            className="mt-auto h-12"
            onClick={submitHandler}
            style={{
              background: colorFormatConverter(data.button.backgroundColor),
              color: colorFormatConverter(data.button.foregroundColor),
            }}
          >
            {data.button.text}
          </CustomButton>
        </div>
      </>
    </PopupTwoStepsContainer>
  );
};

export default PopupInteractionReward;
