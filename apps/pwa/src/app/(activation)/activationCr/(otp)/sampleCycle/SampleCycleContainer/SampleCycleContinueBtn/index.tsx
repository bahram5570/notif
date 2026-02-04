// import { FAKE_CYCLE_FOOTER_HEIGTH } from '@app/(activation)/activationCr/(goal)/fakeCycle/FakeCyclePageContainer/PageContainer/FakeCycleContainer/constants';
import ActivationBtn from '@components/activation/ActivationBtn';
import useActivationAnalytics from '@hooks/__activation__/useActivationAnalytics';
import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';
import { useRouter } from 'next/navigation';

import { SAMPLE_CYCLE_CONTINUE_BTN_HEIGHT } from './constants';

const SampleCycleContinueBtn = () => {
  const router = useRouter();
  const { callEventActivation } = useActivationAnalytics();

  const nextHandler = () => {
    router.push('goal_1');
    callEventActivation();
  };

  return (
    <div
      style={{ maxWidth: MAX_SCREEN_WIDTH, height: SAMPLE_CYCLE_CONTINUE_BTN_HEIGHT }}
      className="fixed left-0 right-0 bottom-0 mx-auto px-4 pt-4 bg-impo_Neutral_Background z-30"
    >
      <ActivationBtn navigationLoadingId={'ContinueBtn'} onClick={nextHandler} showBtn={true}>
        مرحله بعد
      </ActivationBtn>

      {/* <div className="h-[1px] mt-2" style={{ backgroundColor: colors.Neutral_Surface }} /> */}
    </div>
  );
};

export default SampleCycleContinueBtn;
