import EditIcon from '@assets/icons/Gallery Edit.svg';
import UploadIcon from '@assets/icons/upload.svg';
import { Avatar } from '@repo/core/components/partner/AvatarContainer';

import { MODAL_QUERY_NAME } from '@repo/core/constants/modal.constants';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { PartnerModalNameEnums } from '../PartnerModals/enums';
import { AvatarContainerPropsType } from './type';

const AvatarContainer = (props: AvatarContainerPropsType) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { canDeleteProfile, manAvatar, manName, valid, womanAvatar, womanName } = props;

  const handleClick = () => {
    (newQueryParamsHandler({
      [MODAL_QUERY_NAME]: 'true',
      partnerModal: PartnerModalNameEnums.UploadImage,
      canDeleteProfile: String(canDeleteProfile),
    }),
      pageNavigationHandler({
        navigationType: 'logo',
        id: 'UploadProfileImage',
      }));
  };

  const manAvatarSrc = manAvatar || '/assets/images/avatar_partner_boy.webp';

  const womanIcon = canDeleteProfile ? (
    <EditIcon className="w-3 h-3 !fill-impo_White" />
  ) : (
    <UploadIcon className="w-3 h-3 !fill-impo_White" />
  );

  return (
    <div className="flex gap-9 absolute top-[-38px] right-0 left-0 justify-center">
      <Avatar src={womanAvatar} name={womanName} />
      <Avatar src={manAvatarSrc} name={manName} hasPreview={valid} icon={womanIcon} onClick={handleClick} />
    </div>
  );
};

export default AvatarContainer;
