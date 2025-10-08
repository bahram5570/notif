import Button from '@components/ui/Button';
import OverlayBar from '@components/ui/OverlayBar';
import useAnalytics from '@hooks/useAnalytics';

import { NewReplyBtnProps } from './types';

const NewReplyBtn = ({ text, isLoading, submitHandler, btnTop }: NewReplyBtnProps) => {
  const { callEvent } = useAnalytics();
  const isDisable = text.trim().length < 1;

  const clickHandler = () => {
    submitHandler();
    callEvent('ShareExperienceComment');
  };

  return (
    <OverlayBar className="mt-auto px-4 py-6" btnTop={btnTop}>
      <Button
        size="small"
        variant="fill"
        color="primary"
        className="!w-fit"
        isDisable={isDisable}
        isLoading={isLoading}
        onClick={clickHandler}
      >
        پست کردن
      </Button>
    </OverlayBar>
  );
};

export default NewReplyBtn;
