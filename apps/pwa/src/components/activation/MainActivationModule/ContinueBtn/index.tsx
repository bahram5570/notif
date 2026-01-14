import { useEffect, useState } from 'react';

import ActivationBtn from '@components/activation/ActivationBtn';
import RewardModule from '@components/activation/RewardModule';
import { RewardBtnTypes } from '@components/activation/RewardModule/types';
import { ACTIVATION_INTERFACE_CODE, ACTIVATION_REWARD_QUERY_NAME } from '@constants/activation.constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { ACTIVATION_INPUT_MODULE_ID, CONTINUE_BTN_HEIGHT } from '../../ActivationHeading/constants';
import useContinueBtnNextActivation from './__hooks__/useContinueBtnNextActivation';
import { ContinueBtnProps } from './types';

const ContinueBtn = (props: ContinueBtnProps) => {
  const [btnTop, setBtnTop] = useState<number | null>(null);
  const { newQueryParamsHandler, getQueryParams } = useQueryParamsHandler();
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

  const isOpenReward = getQueryParams(ACTIVATION_REWARD_QUERY_NAME) === 'true';
  const isInterfaceCode = getQueryParams(ACTIVATION_INTERFACE_CODE) !== null;

  return (
    <>
      {!isOpenReward && !isInterfaceCode && (
        <div
          className="fixed left-0 right-0 mx-auto px-4 pt-4 z-30"
          style={{
            pointerEvents: props.showContinueBtn ? 'auto' : 'none',
            height: CONTINUE_BTN_HEIGHT,
            maxWidth: MAX_SCREEN_WIDTH,
            ...positionStyle,
          }}
        >
          <ActivationBtn
            onClick={continueHandler}
            btnTestId={props.btnTestId}
            isLoading={props.isLoading}
            showBtn={props.showContinueBtn}
            navigationLoadingId={navigationLoadingId}
            // todo key={resetKey + '1'}
          >
            ادامه
          </ActivationBtn>
        </div>
      )}

      {isOpenReward && (
        <RewardModule
          btnHandler={nextHandler}
          firstName={props.firstName}
          isLoading={props.isLoading}
          noBackButton={props.noBackButton}
          currentRewardData={props.currentRewardData}
          orderOfRewardElements={props.orderOfRewardElements}
        />
      )}
    </>
  );
};

export default ContinueBtn;
