import Button from '@components/ui/Button';
import OverlayBar from '@components/ui/OverlayBar';
import Typography from '@components/ui/Typography';
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
      <Button
        size="medium"
        variant="fill"
        color="primary"
        fullWidth={true}
        onClick={onClick}
        isDisable={!answerValue}
        isLoading={submitLoading}
      >
        <Typography scale="Lable" size="Large" color="PrimaryMan_OnPrimaryMan">
          {btn.text}
        </Typography>
      </Button>
    </OverlayBar>
  );
};

export default ChallengeBtn;
