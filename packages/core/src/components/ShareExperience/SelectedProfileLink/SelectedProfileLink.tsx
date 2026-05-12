import BlueTick from '@assets/shared/icons/blueTick2.svg';

import { usePageNavigationLoading } from '../../../hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '../../../hooks/useQueryParamsHandler';
import { useShareExperienceHandlers } from '../../../hooks/useShareExperienceHandlers/useShareExperienceHandlers';
import { CustomImage } from '../../ui/CustomImage';
import { CustomImage_NEW } from '../../ui/CustomImage_NEW';
import { SHARE_EXPERIENCE_PROFILE_QUERY_NAME } from '../constants';
import { SelectedProfileLinkProps } from './type';

export const SelectedProfileLink = (props: SelectedProfileLinkProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { increaseZIndex } = useShareExperienceHandlers();

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
      style={{ width: props.size, minWidth: props.size, height: props.size, minHeight: props.size }}
    >
      {/* <div className="w-full rounded-full">
        <CustomImage_NEW
          fill
          src={props.avatar}
          previewImageShape="circle"
          className="rounded-full pointer-events-none !object-cover"
        />
      </div> */}
      <CustomImage
        src={props.avatar}
        width={'100%'}
        hasPreviewImage
        previewImageShape="circle"
        className="rounded-full pointer-events-none !object-cover"
      />

      {props.approvedProfile && <BlueTick className="w-4 absolute bottom-0 -left-1 pointer-events-none" />}
    </div>
  );
};
