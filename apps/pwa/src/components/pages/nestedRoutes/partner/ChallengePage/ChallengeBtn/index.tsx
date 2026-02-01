import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import Dark_Button from '@components/ui/Dark_Button';
import OverlayBar from '@components/ui/OverlayBar';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import useSubmit from './__hooks__/useSubmit';
import { ChallengeBtnPropsType } from './type';

const ChallengeBtn = ({ answerValue, btn, id, question, btnTop }: ChallengeBtnPropsType) => {
  const { submitLoading, submitHandler } = useSubmit({ id: id, btn: btn });

  const onClick = () => {
    submitHandler({ questionText: question, text: answerValue });
  };

  return (
    <OverlayBar btnTop={btnTop} className="px-6 py-2 mx-auto" style={{ maxWidth: MAX_SCREEN_WIDTH }}>
      <Dark_Button onClick={onClick} isDisable={!answerValue} isLoading={submitLoading}>
        <CustomTypography className="text-impo_PrimaryMan_OnPrimaryMan" fontSize="Lable_Large">
          {btn.text}
        </CustomTypography>
      </Dark_Button>
    </OverlayBar>
  );
};

export default ChallengeBtn;
