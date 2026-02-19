import EditIcon from '@assets/icons/Gallery Edit.svg';
import UploadIcon from '@assets/icons/upload.svg';
import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { toPersianNumbers } from '@repo/core/utils/numbers';
import { typographyFontStylesMaker } from '@repo/core/utils/system';

import { useOperatingSystem } from '@repo/core/hooks/useOperatingSystem';

import { UserNameDetailsProps } from './type';

const UserNameDetail = ({ avatarImage, defaultAvatarImage, canDeleteAvatar, name, identity }: UserNameDetailsProps) => {
  const { operatingSystem } = useOperatingSystem();

  const handleClick = () => {};

  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Title_Small', operatingSystem });
  const typographyFontStyles1 = typographyFontStylesMaker({ fontSize: 'Body_Medium', operatingSystem });

  const preventIosPhoneLink = (number: string) => {
    return number.split('').join('\u200B');
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="relative" onClick={handleClick}>
        <div className="overflow-hidden rounded-full flex justify-center items-center bg-impo_Blue_50 dark:bg-impo_White">
          <CustomImage src={avatarImage || defaultAvatarImage} width={90} height={90} className="!object-cover" />
        </div>

        <div className="absolute top-[60%] left-3/4 z-30 select-none">
          <div className="w-6 h-6 flex justify-center items-center rounded-full cursor-pointer bg-impo_Black opacity-50">
            {canDeleteAvatar ? (
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

        <p style={{ userSelect: 'none', ...typographyFontStyles1 }} className="text-impo_Surface_OnSurfaceVariant">
          <span style={{ pointerEvents: 'none' }}>{preventIosPhoneLink(toPersianNumbers(identity))}</span>
        </p>
      </div>
    </div>
  );
};

export default UserNameDetail;
