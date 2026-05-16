import BlueTick from '@assets/shared/icons/blueTick2.svg';

import { useShareExperienceOverlayIndex } from '../../../hooks/useOverlayIndex';
import { usePageNavigationLoading } from '../../../hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '../../../hooks/useQueryParamsHandler';
import { CustomImage_NEW } from '../../ui/CustomImage_NEW';
import { SHARE_EXPERIENCE_PROFILE_QUERY_NAME } from '../constants';
import { SelectedProfileLinkProps } from './type';

export const SelectedProfileLink = (props: SelectedProfileLinkProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { increaseZIndex } = useShareExperienceOverlayIndex();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const selectProfileHandler = () => {
    if (!props.isSelf) {
      pageNavigationHandler({ id: props.id, showProgressBar: true });

      newQueryParamsHandler({ [SHARE_EXPERIENCE_PROFILE_QUERY_NAME]: props.id });
      increaseZIndex(SHARE_EXPERIENCE_PROFILE_QUERY_NAME, props.id);
    }
  };

  return (
    <div
      className="relative"
      onClick={selectProfileHandler}
      style={{ minWidth: props.size, minHeight: props.size, maxWidth: props.size, maxHeight: props.size }}
    >
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <CustomImage_NEW src={props.avatar} fill={true} className="object-cover pointer-events-none" />
      </div>

      {props.approvedProfile && <BlueTick className="w-4 absolute bottom-0 -left-1 pointer-events-none" />}
    </div>
  );
};
