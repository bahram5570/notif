import ShareExperienceToast from '@components/pages/mainRoutes/shareExperience/ShareExperienceModules/ShareExperienceToast';
import Dark_Button from '@components/ui/Dark_Button';
import OverlayBar from '@components/ui/OverlayBar';
import useAnalytics from '@hooks/useAnalytics';

import { NewReplyBtnProps } from './types';

const NewReplyBtn = ({ text, isLoading, submitHandler, btnTop, toast }: NewReplyBtnProps) => {
  const { callEvent } = useAnalytics();
  const isDisable = text.trim().length < 1;

  const clickHandler = () => {
    submitHandler();
    callEvent('ShareExperienceComment');
  };

  return (
    <OverlayBar className="mt-auto px-4 py-6" btnTop={btnTop}>
      {toast && (
        <div className="my-4">
          <ShareExperienceToast toastMessage={toast} />
        </div>
      )}

      <Dark_Button className="!w-fit" isDisable={isDisable} isLoading={isLoading} onClick={clickHandler}>
        پست کردن
      </Dark_Button>
    </OverlayBar>
  );
};

export default NewReplyBtn;
