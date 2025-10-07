import Button from '@components/ui/Button';
import OverlayBar from '@components/ui/OverlayBar';
import { SHARE_EXPERIENCE_NEW_TOPICS_QUERY_NAME } from '@components/women/pages/mainRoutes/shareExperience/constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { ShareExperienceNewContinueBtnProps } from './types';

const ShareExperienceNewContinueBtn = ({ text, btnTop }: ShareExperienceNewContinueBtnProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const isDisable = text.trim().length < 1;
  const id = 'forum';
  const isLoading = pageNavigationLoading === id;

  const clickHandler = () => {
    pageNavigationHandler({ id, showProgressBar: false });
    newQueryParamsHandler({ [SHARE_EXPERIENCE_NEW_TOPICS_QUERY_NAME]: 'true' });
  };

  return (
    <OverlayBar className="mt-auto px-4 py-6" btnTop={btnTop}>
      <Button
        size="medium"
        variant="fill"
        color="primary"
        isDisable={isDisable}
        isLoading={isLoading}
        onClick={clickHandler}
      >
        بعدی
      </Button>
    </OverlayBar>
  );
};

export default ShareExperienceNewContinueBtn;
