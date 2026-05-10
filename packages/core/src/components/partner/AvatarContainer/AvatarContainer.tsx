import { CustomImage } from '../../ui/CustomImage';
import { CustomTypography } from '../../ui/CustomTypography';
import { AvatarContainerPropsType } from './type';

export const Avatar = (props: AvatarContainerPropsType) => {
  const wrapperClass = 'flex flex-col items-center justify-center gap-4';

  const avatarClass = 'flex items-center justify-center overflow-hidden rounded-full bg-impo_White';

  const iconWrapperClass =
    'absolute top-[60%] left-3/4 z-30 flex h-6 w-6 cursor-pointer select-none items-center justify-center rounded-full opacity-50 bg-impo_Black dark:bg-impo_Neutral_Background dark:opacity-100';

  return (
    <div className={wrapperClass} onClick={props.onClick}>
      <div className="relative">
        <div className={avatarClass} style={{ border: '4px solid #f2eeee' }}>
          <CustomImage
            src={props.src}
            width={96}
            height={96}
            className="!object-cover"
            hasPreviewImage={props.hasPreview}
            previewImageShape="circle"
          />
        </div>

        {props.icon && <div className={iconWrapperClass}>{props.icon}</div>}
      </div>

      <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        {props.name}
      </CustomTypography>
    </div>
  );
};
