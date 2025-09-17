import { useEffect, useState } from 'react';

import ActivationBtn from '@components/activation/ActivationBtn';
import { RewardBtnTypes } from '@components/activation/RewardModule/types';
import { ACTIVATION_REWARD_QUERY_NAME } from '@constants/activation.constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { ACTIVATION_INPUT_MODULE_ID, CONTINUE_BTN_HEIGHT } from '../../ActivationHeading/constants';
import Reward from './Reward';
import useContinueBtnNextActivation from './__hooks__/useContinueBtnNextActivation';
import { ContinueBtnProps } from './types';

const ContinueBtn = (props: ContinueBtnProps) => {
  const [btnTop, setBtnTop] = useState<number | null>(null);
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

  useEffect(() => {
    const el = document.getElementById(ACTIVATION_INPUT_MODULE_ID);

    if (el) {
      const elTop = el.getBoundingClientRect().top;
      const elHeight = el.offsetHeight;
      const elPaddingTop = 20;

      setBtnTop(elTop + elHeight + elPaddingTop);
    }
  }, []);

  const navigationLoadingId = typeof props.nextActivation === 'string' ? 'MainActivationContinueBtn' : undefined;
  const positionStyle = btnTop === null ? { bottom: 0 } : { top: props.showContinueBtn ? btnTop : '100dvh' };

  return (
    <>
      <div
        className="fixed left-0 right-0 mx-auto px-4 pt-4 z-30"
        style={{ height: CONTINUE_BTN_HEIGHT, maxWidth: MAX_SCREEN_WIDTH, ...positionStyle }}
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
