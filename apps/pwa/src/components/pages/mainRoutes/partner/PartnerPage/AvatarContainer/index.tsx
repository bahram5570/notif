import EditIcon from '@assets/icons/Gallery Edit.svg';
import UploadIcon from '@assets/icons/upload.svg';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import { PartnerModalNameEnums } from '../PartnerModals/enums';
import Avatar from './Avatar';
import { AvatarContainerPropsType } from './type';

const AvatarContainer = (props: AvatarContainerPropsType) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { canDeleteProfile, manAvatar, manName, valid, womanAvatar, womanName } = props;

  const handleClick = () => {
    (newQueryParamsHandler({
      [MODAL_QUERY_NAME]: 'true',
      name: PartnerModalNameEnums.UploadImage,
      canDeleteProfile: String(canDeleteProfile),
    }),
      pageNavigationHandler({
        showProgressBar: true,
        id: 'UploadProfileImage',
      }));
  };

  return (
    <div className="flex gap-9 absolute top-[-38px] right-0 left-0 justify-center">
      <Avatar src={manAvatar} name={manName} hasPreview={valid} />
      <Avatar
        src={womanAvatar || '/assets/images/defaultProfile.webp'}
        name={womanName}
        onClick={handleClick}
        icon={
          canDeleteProfile ? (
            <EditIcon className="w-3 h-3 !fill-impo_White" />
          ) : (
            <UploadIcon className="w-3 h-3 !fill-impo_White" />
          )
        }
      />
    </div>
  );
};

export default AvatarContainer;
