import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { BiorhythemItemPropsType } from './type';

const BiorhythemItem = ({ description, icon, title }: BiorhythemItemPropsType) => {
  const { colors } = useTheme();
  const iconUrl = icon;

  return (
    <div style={{ backgroundColor: colors.Neutral_Background }} className="rounded-2xl p-3">
      <div className="flex flex-col gap-2 items-end">
        <div className="flex gap-2 items-center">
          <Typography scale="Lable" size="Medium">
            {title}
          </Typography>
          <CustomImage src={iconUrl} className="w-10 h-10" />
        </div>
        <Typography scale="Body" size="Small">
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default BiorhythemItem;
