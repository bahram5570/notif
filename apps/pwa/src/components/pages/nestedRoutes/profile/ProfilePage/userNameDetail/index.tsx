import EditIcon from '@assets/icons/Gallery Edit.svg';
import UploadIcon from '@assets/icons/upload.svg';
import ArrowIcon from '@assets/shared/icons/calendarArrow.svg';
import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { toPersianNumbers } from '@repo/core/utils/numbers';
import { typographyFontStylesMaker } from '@repo/core/utils/system';

import useGetData from '@components/pages/mainRoutes/partner/PartnerPage/__hooks__/useGetData';
import { MODAL_QUERY_NAME } from '@repo/core/constants/modal.constants';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useSystem } from '@repo/core/hooks/useSystem';

import { PROFILE_MODAL_QUERY_NAME } from '../ProfileLinkList/constants';
import { ProfileModalNameEnums } from '../ProfileModals/enum';
import { UserNameDetailsProps } from './type';

const UserNameDetail = ({ name, username, avatar }: UserNameDetailsProps) => {
  const { data } = useGetData();
  const { operatingSystem } = useSystem();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Title_Small', operatingSystem });
  const typographyFontStyles1 = typographyFontStylesMaker({ fontSize: 'Body_Medium', operatingSystem });

  const avatarHandler = () => {
    newQueryParamsHandler({
      [MODAL_QUERY_NAME]: 'true',
      [PROFILE_MODAL_QUERY_NAME]: ProfileModalNameEnums.EditProfileImage,
      canDeleteProfile: String(data?.canDeleteProfile),
    });

    pageNavigationHandler({ showProgressBar: false, id: ProfileModalNameEnums.EditProfileImage });
  };

  const linkToEditProfileHandler = () => {
    pageNavigationHandler({ showProgressBar: true, linkTo: '/protected/userInfo', id: 'linkToEditProfileHandler' });
  };

  const preventIOSPhoneLink = (v: string) => {
    return v.split('').join('\u200B');
  };

  return (
    <div className="w-full flex justify-between items-center p-4">
      <div className="w-fit flex items-center gap-1" onClick={linkToEditProfileHandler}>
        <ArrowIcon className="w-4 h-auto stroke-impo_Surface_InverseSurface" />

        <div className="rounded-full px-3 py-2 bg-impo_Neutral_Surface">
          <CustomTypography fontSize="Lable_Small" className="text-impo_Neutral_OnBackground">
            ویرایش اطلاعات کاربری
          </CustomTypography>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex flex-col items-end gap-1">
          <p style={{ userSelect: 'none' }} className="text-impo_Neutral_OnBackground">
            <span style={{ pointerEvents: 'none', ...typographyFontStyles }}>{name}</span>
          </p>

          <p style={{ userSelect: 'none', ...typographyFontStyles1 }} className="text-impo_Surface_Outline">
            <span style={{ pointerEvents: 'none' }}>{preventIOSPhoneLink(toPersianNumbers(username))}</span>
          </p>
        </div>

        <div className="relative w-14 h-14 min-w-14 min-h-14 rounded-full" onClick={avatarHandler}>
          <CustomImage_NEW
            fill={true}
            src={data?.womanAvatar || avatar}
            className="object-cover object-center rounded-full"
          />

          <div className="absolute bottom-0 right-0 w-5 h-5 flex items-center justify-center p-1 bg-impo_Black rounded-full">
            {data?.canDeleteProfile ? (
              <EditIcon className="w-full h-auto fill-impo_White" />
            ) : (
              <UploadIcon className="w-full h-auto fill-impo_White" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNameDetail;
