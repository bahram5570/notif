import EditIcon from '@assets/icons/Gallery Edit.svg';
import UploadIcon from '@assets/icons/upload.svg';
import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';
import { toPersianNumbers } from '@utils/numbers';

import CustomImage from '@components/ui/CustomImage';
import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import useGetData from '@components/women/pages/mainRoutes/partner/PartnerPage/__hooks__/useGetData';
import useOperatingSystem from '@hooks/useOperatingSystem';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { PROFILE_MODAL_QUERY_NAME } from '../../ProfileLinkList/constants';
import { ProfileModalNameEnums } from '../../ProfileModals/enum';
import { UserNameDetailsProps } from './type';

const UserNameDetail = ({ name, username, avatar }: UserNameDetailsProps) => {
  const { data } = useGetData();
  const { operatingSystem } = useOperatingSystem();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Title_Small', operatingSystem });
  const typographyFontStyles1 = typographyFontStylesMaker({ fontSize: 'Lable_Medium', operatingSystem });

  const handleClick = () => {
    newQueryParamsHandler({
      [MODAL_QUERY_NAME]: 'true',
      [PROFILE_MODAL_QUERY_NAME]: ProfileModalNameEnums.EditProfileImage,
      canDeleteProfile: String(data?.canDeleteProfile),
    });

    pageNavigationHandler({ showProgressBar: false, id: ProfileModalNameEnums.EditProfileImage });
  };

  function preventIOSPhoneLink(number: string) {
    return number.split('').join('\u200B');
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="relative" onClick={handleClick}>
        <div className="overflow-hidden rounded-full flex justify-center items-center bg-impo_White">
          <CustomImage src={data?.womanAvatar || avatar} width={90} height={90} className="!object-cover" />
        </div>

        <div className="absolute top-[60%] left-3/4 z-30 select-none">
          <div
            className="w-6 h-6 flex justify-center items-center rounded-full cursor-pointer bg-impo_Black"
            style={{
              opacity: 50,
            }}
          >
            {data?.canDeleteProfile ? (
              <EditIcon className="w-3 h-3 fill-impo_White" />
            ) : (
              <UploadIcon className="w-3 h-3 fill-impo_White" />
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <p style={{ userSelect: 'none' }} className="text-impo_Neutral_OnBackground">
          <span style={{ pointerEvents: 'none', ...typographyFontStyles }}>{name}</span>
        </p>

        <p style={{ userSelect: 'none', ...typographyFontStyles1 }} className="text-impo_Neutral_OnBackground">
          <span style={{ pointerEvents: 'none' }}>{preventIOSPhoneLink(toPersianNumbers(username))}</span>
        </p>
      </div>
    </div>
  );
};

export default UserNameDetail;
