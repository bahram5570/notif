import ActivationBtn from '@components/activation/ActivationBtn';
import { RewardBtnTypes } from '@components/activation/RewardModule/types';
import { ACTIVATION_REWARD_QUERY_NAME } from '@constants/activation.constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { CONTINUE_BTN_HEIGHT } from '../../ActivationHeading/constants';
import Reward from './Reward';
import useContinueBtnNextActivation from './__hooks__/useContinueBtnNextActivation';
import { ContinueBtnProps } from './types';

const ContinueBtn = (props: ContinueBtnProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { resetKey, nextActivationHandler } = useContinueBtnNextActivation(props.onContinue);

  const nextHandler: RewardBtnTypes = (v) => {
    if (v?.isBtn2) {
      //
    }

    nextActivationHandler({
      invalidMessage: props.invalidMessage,
      nextActivation: props.nextActivation,
      onRegister: props.onRegister,
    });
  };

  const continueHandler = () => {
    const hasReward = props.currentRewardData !== undefined;

    if (hasReward) {
      newQueryParamsHandler({ [ACTIVATION_REWARD_QUERY_NAME]: 'true' });
    } else {
      nextHandler();
    }
  };

  const navigationLoadingId = typeof props.nextActivation === 'string' ? 'MainActivationContinueBtn' : undefined;

  return (
    <>
      <div
        className="fixed left-0 right-0 bottom-0 mx-auto px-4 pt-4 z-30"
        style={{
          height: CONTINUE_BTN_HEIGHT,
          maxWidth: MAX_SCREEN_WIDTH,
        }}
      >
        <ActivationBtn
          showBtn={props.showContinueBtn}
          isLoading={props.isLoading}
          navigationLoadingId={navigationLoadingId}
          onClick={continueHandler}
          // todo key={resetKey + '1'}
        >
          ادامه
        </ActivationBtn>
      </div>

      <Reward
        orderOfRewardElements={props.orderOfRewardElements}
        currentRewardData={props.currentRewardData}
        noBackButton={props.noBackButton}
        firstName={props.firstName}
        isLoading={props.isLoading}
        nextHandler={nextHandler}
        key={resetKey + '2'}
      />
    </>
  );
};

export default ContinueBtn;
