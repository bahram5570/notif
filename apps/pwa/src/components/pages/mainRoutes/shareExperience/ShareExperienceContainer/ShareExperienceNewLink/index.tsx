import LinkIcon from '@assets/icons/calendarSignLink.svg';

import { SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME } from '@components/pages/mainRoutes/shareExperience/constants';
import useOverlayIndex from '@hooks/__shareExperience__/useOverlayIndex';
import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';
import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { ShareExperienceNewLinkPropsType } from './type';

const ShareExperienceNewLink = ({
  fromAssociationSection = false,
  associationId,
  isFollowed,
  resetPageNo,
}: ShareExperienceNewLinkPropsType) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { increaseZIndex } = useOverlayIndex();
  const toast = useCustomToast();

  const clickHandler = () => {
    if (fromAssociationSection && associationId) {
      if (!isFollowed) {
        return toast.notifyToastHandler({
          message: 'برای ثبت تجربه ابتدا باید انجمن رو دنبال کنی',
          position: 'bottom-center',
          type: 'warning',
        });
      }
      if (resetPageNo) {
        resetPageNo();
      }
      const queryParam = { associationId };
      newQueryParamsHandler({ [SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME]: JSON.stringify(queryParam) });
      increaseZIndex(SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME, associationId);
    } else {
      newQueryParamsHandler({ [SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME]: 'true' });
      increaseZIndex(SHARE_EXPERIENCE_NEW_EXERCISE_MODAL_QUERY_NAME);
    }

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
