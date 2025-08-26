import RoutinRatingStats from '@components/__routin__/RoutinRatingStats';
import RoutinWriter from '@components/__routin__/RoutinWriter';
import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { RoutinCardSimpleContextPropsType } from './type';

const RoutinCardSimpleContext = ({ data }: RoutinCardSimpleContextPropsType) => {
  const { colors } = useTheme();
  return (
    <div className="px-3 py-2">
      <div className="flex flex-row-reverse gap-3">
        <div className="w-14 h-14 ">
          <CustomImage src="/assets/images/routinItem.webp" />
        </div>
        <div className="flex justify-end flex-col items-end gap-2" style={{ borderColor: colors.Red_400 }}>
          <Typography scale="Title" size="Small" color="Neutral_OnBackground">
            {data.title}
          </Typography>

          <RoutinRatingStats commentCount={data.commentCount} rateAvg={data.rateAvg} />
        </div>
      </div>
      <div className="w-full h-[1px] my-2" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="flex flex-col items-end rounded-xl p-3 ">
        <RoutinWriter
          writerName={data.writerName}
          writerIcon={data.writerIcon}
          writerSpeciality={data.writerSpeciality}
        />
      </div>
    </div>
  );
};

export default RoutinCardSimpleContext;
