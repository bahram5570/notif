import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { AvatarPropsType } from './type';

const Avatar = ({ name, src, hasPreview, icon, onClick }: AvatarPropsType) => {
  const { colors } = useTheme();
  return (
    <div className="flex flex-col items-center justify-center gap-4" onClick={onClick}>
      <div className="relative">
        <div
          className="overflow-hidden rounded-full flex justify-center items-center"
          style={{ border: '4px solid #f2eeee', backgroundColor: colors.White }}
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
            <div
              className="w-6 h-6 flex justify-center items-center rounded-full cursor-pointer"
              style={{
                backgroundColor: colors.Neutral_OnBackground,
                opacity: 0.5,
              }}
            >
              {icon}
            </div>
          </div>
        )}
      </div>

      <Typography scale="Lable" size="Medium" color="Neutral_OnBackground">
        {name}
      </Typography>
    </div>
  );
};

export default Avatar;
