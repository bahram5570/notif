import { Suspense } from 'react';

import useActivationIsLargeScreen from '@hooks/__activation__/useActivationIsLargeScreen';

import ActivationBackBtn from '../ActivationBackBtn';
import ActivationHeading from '../ActivationHeading';
import { ACTIVATION_HEADING_ICON_WIDTH, CONTINUE_BTN_HEIGHT, HEADING_HEIGHT } from '../ActivationHeading/constants';
import OnMountRewardModule from '../OnMountRewardModule';
import ContinueBtn from './ContinueBtn';
import { MainActivationModuleProps } from './types';

const MainActivationModule = (props: MainActivationModuleProps) => {
  const { isLargeScreen } = useActivationIsLargeScreen();

  const showContinueBtn = typeof props.showContinueBtn === 'undefined' ? true : props.showContinueBtn;
  const paddingTopHeight = isLargeScreen ? HEADING_HEIGHT : HEADING_HEIGHT - ACTIVATION_HEADING_ICON_WIDTH;
  const hasOnMountReward = typeof props.onMountRewardId !== 'undefined';

  return (
    <div
      className={`relative overflow-x-hidden min-h-[100dvh] animate-mainActivationModule ${props.className}`}
      style={{
        maxHeight: props.progressPercentage === undefined ? 'unset' : '100dvh',
        overflowY: props.progressPercentage === undefined ? 'auto' : 'hidden',
      }}
    >
      {!props.noBackButton && <ActivationBackBtn />}

      <ActivationHeading
        orderOfQuestionScripts={props.orderOfQuestionScripts}
        progressPercentage={props.progressPercentage}
        scripts={props.scripts}
        banner={props.banner}
        isShowLogo={props.isShowLogo}
      />

      <div
        style={{
          paddingTop: props.progressPercentage === undefined ? 0 : paddingTopHeight,
          height: props.progressPercentage === undefined ? '100%' : '100dvh',
          paddingBottom: CONTINUE_BTN_HEIGHT * 2,
          scrollbarWidth: 'none',
          position: 'relative',
          overflowY: 'auto',
          zIndex: 0,
        }}
      >
        <>{props.children}</>
      </div>

      <Suspense>
        <ContinueBtn
          currentRewardData={props.rewardId ? props.rewardData?.[props.rewardId]?.page : undefined}
          orderOfRewardElements={props.orderOfRewardElements}
          invalidMessage={props.invalidMessage}
          nextActivation={props.nextActivation}
          showContinueBtn={showContinueBtn}
          noBackButton={props.noBackButton}
          onRegister={props.onRegister}
          onContinue={props.onContinue}
          firstName={props.firstName}
          isLoading={props.isLoading}
          btnTestId={props.btnTestId}
        />
      </Suspense>

      {hasOnMountReward && (
        <OnMountRewardModule
          currentRewardData={props.onMountRewardId ? props.rewardData?.[props.onMountRewardId]?.page : undefined}
          orderOfRewardElements={props.orderOfRewardElements}
          noBackButton={props.noBackButton}
          firstName={props.firstName}
        />
      )}
    </div>
  );
};

export default MainActivationModule;
