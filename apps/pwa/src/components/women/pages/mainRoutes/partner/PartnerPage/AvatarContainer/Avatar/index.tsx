import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import { AvatarPropsType } from './type';

const Avatar = ({ name, src, hasPreview, icon, onClick }: AvatarPropsType) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4" onClick={onClick}>
      <div className="relative">
        <div
          className="overflow-hidden rounded-full flex justify-center items-center bg-impo_White"
          style={{ border: '4px solid #f2eeee' }}
        >
          <CustomImage
            src={src}
            width={96}
            height={96}
            className="!object-cover"
            hasPreviewImage={hasPreview}
            previewImageShape="circle"
          />
        </div>

        {icon && (
          <div className="absolute top-[60%] left-3/4 z-30 select-none">
            <div className="w-6 h-6 flex justify-center items-center rounded-full cursor-pointer opacity-50 bg-impo_Neutral_Background dark:opacity-100">
              {icon}
            </div>
          </div>
        )}
      </div>
      <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        {name}
      </Dark_Typography>
    </div>
  );
};

export default Avatar;
