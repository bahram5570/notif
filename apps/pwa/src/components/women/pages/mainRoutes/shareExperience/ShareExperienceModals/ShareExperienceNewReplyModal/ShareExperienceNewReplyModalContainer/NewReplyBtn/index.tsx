import Button from '@components/ui/Button';
import OverlayBar from '@components/ui/OverlayBar';

import { NewReplyBtnProps } from './types';

const NewReplyBtn = ({ text, isLoading, submitHandler, btnTop }: NewReplyBtnProps) => {
  const isDisable = text.trim().length < 1;

  return (
    <OverlayBar className="mt-auto px-4 py-6" btnTop={btnTop}>
      <Button
        size="small"
        variant="fill"
        color="primary"
        className="!w-fit"
        isDisable={isDisable}
        isLoading={isLoading}
        onClick={submitHandler}
        id="ShareExperienceComment"
      >
        پست کردن
      </Button>
    </OverlayBar>
  );
};

export default NewReplyBtn;
