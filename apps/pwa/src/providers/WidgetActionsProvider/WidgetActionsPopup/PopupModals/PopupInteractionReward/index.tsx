import { colorFormatConverter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
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
          <Dark_Typography fontSize="Headline_Small" className="w-full px-6 text-center text-impo_Neutral_OnBackground">
            {data.title}
          </Dark_Typography>

          <Dark_Typography
            fontSize="Body_Medium"
            className="w-full px-4 pt-1 text-center text-impo_Neutral_OnBackground"
          >
            {data.description}
          </Dark_Typography>

          <Dark_Button
            fontSize="Title_Small"
            className="mt-auto h-12"
            onClick={submitHandler}
            style={{
              background: colorFormatConverter(data.button.backgroundColor),
              color: colorFormatConverter(data.button.foregroundColor),
            }}
          >
            {data.button.text}
          </Dark_Button>
        </div>
      </>
    </PopupTwoStepsContainer>
  );
};

export default PopupInteractionReward;
