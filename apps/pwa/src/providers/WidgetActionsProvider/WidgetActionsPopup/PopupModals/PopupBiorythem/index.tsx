import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import BiorhythemItems from './BiorhythemItems';
import { PopupBiorythemProps } from './type';

const PopupBiorythem = ({ data }: PopupBiorythemProps) => {
  const { colors } = useTheme();
  return (
    <div
      className="flex flex-col gap-4 p-4 rounded-xl  items-end mt-3"
      style={{ border: `1px solid ${colors.Neutral_Surface}` }}
    >
      <div className="flex justify-between items-end ">
        <Typography scale="Title" size="Small">
          {data.title}
        </Typography>
      </div>
      <div style={{ backgroundColor: colors.Surface_SurfaceVariant }} className="rounded-2xl p-4 flex flex-col gap-3">
        <BiorhythemItems {...data} />
      </div>
    </div>
  );
};

export default PopupBiorythem;
