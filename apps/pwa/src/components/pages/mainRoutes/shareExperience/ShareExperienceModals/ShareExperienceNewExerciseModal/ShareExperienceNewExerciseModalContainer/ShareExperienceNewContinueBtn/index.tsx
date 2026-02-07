import ShareExperienceToast from '@components/pages/mainRoutes/shareExperience/ShareExperienceModules/ShareExperienceToast';
import {
  SHARE_EXPERIENCE_NEW_TOPICS_QUERY_NAME,
  SHARE_EXPERIENCE_ORDER_QUERY_NAME,
} from '@components/pages/mainRoutes/shareExperience/constants';
import Dark_Button from '@components/ui/Dark_Button';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { ShareExperienceNewContinueBtnProps } from './types';

const ShareExperienceNewContinueBtn = ({ text, btnTop, sendEnable, toast }: ShareExperienceNewContinueBtnProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const isDisable = text.trim().length < 1;
  const id = 'form';
  const isLoading = pageNavigationLoading === id;

  const clickHandler = () => {
    pageNavigationHandler({ id, showProgressBar: false });
    const queryData = JSON.stringify({
      [SHARE_EXPERIENCE_ORDER_QUERY_NAME]: new Date().getTime(),
    });
    newQueryParamsHandler({ [SHARE_EXPERIENCE_NEW_TOPICS_QUERY_NAME]: queryData });
  };

  return (
    <div
      className="fixed right-0 left-0 flex flex-col justify-center  mt-auto px-4 py-6 z-40 gap-5"
      style={{ bottom: btnTop }}
    >
      {toast && <ShareExperienceToast toastMessage={toast} />}
      {sendEnable && (
        <Dark_Button isDisable={isDisable} isLoading={isLoading} fontSize="Lable_Large" onClick={clickHandler}>
          بعدی
        </Dark_Button>
      )}
    </div>
  );
};

export default ShareExperienceNewContinueBtn;
