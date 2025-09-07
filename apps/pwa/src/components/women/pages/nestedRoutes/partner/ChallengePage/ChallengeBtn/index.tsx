import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';

import useSubmit from './__hooks__/useSubmit';
import { ChallengeBtnPropsType } from './type';

const ChallengeBtn = ({ answerValue, btn, id, question }: ChallengeBtnPropsType) => {
  const { submitLoading, submitHandler } = useSubmit({ id: id, btn: btn });

  const onClick = () => {
    submitHandler({ questionText: question, text: answerValue });
  };

  return (
    <footer className="mt-auto">
      <Button
        size="medium"
        variant="fill"
        color="primary"
        fullWidth={true}
        className="px-6 py-2 "
        onClick={onClick}
        isDisable={!answerValue}
        isLoading={submitLoading}
      >
        <Typography scale="Lable" size="Large" color="PrimaryMan_OnPrimaryMan">
          {btn.text}
        </Typography>
      </Button>
    </footer>
  );
};

export default ChallengeBtn;
