import BlueTick from '@assets/icons/blueTick2.svg';
import { CustomImage } from '@repo/core/components/ui/CustomImage';

import {
  SHARE_EXPERIENCE_ORDER_QUERY_NAME,
  SHARE_EXPERIENCE_PROFILE_QUERY_NAME,
} from '@components/pages/mainRoutes/shareExperience/constants';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { ShareExperienceProfileIconModuleProps } from './types';

const ShareExperienceProfileIconModule = ({
  approvedProfile,
  isSelf,
  avatar,
  size,
  id,
}: ShareExperienceProfileIconModuleProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const selectProfileHandler = () => {
    if (!isSelf) {
      pageNavigationHandler({ id, showProgressBar: true });

      const paramsData = JSON.stringify({ id, [SHARE_EXPERIENCE_ORDER_QUERY_NAME]: new Date().getTime() });

      newQueryParamsHandler({ [SHARE_EXPERIENCE_PROFILE_QUERY_NAME]: paramsData });
    }
  };

  return (
    <div
      className="relative"
      onClick={selectProfileHandler}
      style={{ width: size, minWidth: size, height: size, minHeight: size }}
    >
      <CustomImage
        src={avatar}
        width={'100%'}
        hasPreviewImage
        previewImageShape="circle"
        className="rounded-full pointer-events-none !object-cover"
      />

      {approvedProfile && <BlueTick className="w-4 absolute bottom-0 -left-1 pointer-events-none" />}
    </div>
  );
};

export default ShareExperienceProfileIconModule;
