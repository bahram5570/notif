import LinkIcon from '@assets/icons/calendarSignLink.svg';

import { SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME } from '@components/pages/mainRoutes/shareExperience/constants';
import useOverlayIndex from '@hooks/__shareExperience__/useOverlayIndex';
import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

const ShareExperienceNewLink = () => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { increaseZIndex } = useOverlayIndex();

  const clickHandler = () => {
    newQueryParamsHandler({ [SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME]: 'true' });
    increaseZIndex(SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME);

    pageNavigationHandler({ showProgressBar: true, id: 'ShareExperienceNewLink' });
  };

  return (
    <div
      className="w-[100dvw] fixed top-0 left-0 right-0 bottom-0 flex items-end justify-end mx-auto pr-4 pb-[100px] pointer-events-none z-10"
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
    >
      <LinkIcon className="w-14 h-auto cursor-pointer pointer-events-auto" onClick={clickHandler} />
    </div>
  );
};

export default ShareExperienceNewLink;
