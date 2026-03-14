import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';

import useSubmit from './__hooks__/useSubmit';
import { ChallengeBtnPropsType } from './type';

const ChallengeBtn = ({ answerValue, btn, id, question }: ChallengeBtnPropsType) => {
  const { submitLoading, submitHandler } = useSubmit({ id: id, btn: btn });

  const onClick = () => {
    submitHandler({ questionText: question, text: answerValue });
  };

  return (
    <div
      className="fixed right-0 left-0 flex flex-col bottom-0 justify-center mx-auto z-40 gap-5 px-6 py-2"
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
    >
      <CustomButton
        className="!bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan"
        onClick={onClick}
        isDisable={!answerValue}
        isLoading={submitLoading}
      >
        <CustomTypography className="text-impo_PrimaryMan_OnPrimaryMan" fontSize="Lable_Large">
          {btn.text}
        </CustomTypography>
      </CustomButton>
    </div>
  );
};

export default ChallengeBtn;
