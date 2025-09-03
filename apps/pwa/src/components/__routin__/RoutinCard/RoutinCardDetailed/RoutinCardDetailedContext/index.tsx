import { textShorter } from '@utils/scripts';

import RoutinRatingStats from '@components/__routin__/RoutinRatingStats';
import RoutinWriter from '@components/__routin__/RoutinWriter';
import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { RoutinCardDetailedContextPropsType } from './type';

const RoutinCardDetailedContext = ({ data }: RoutinCardDetailedContextPropsType) => {
  const { colors } = useTheme();

  return (
    <div className="p-3">
      <div className="flex flex-row-reverse gap-3 px-3">
        <CustomImage src={data.image} width={56} />

        <div className="flex justify-end flex-col items-end gap-2" style={{ borderColor: colors.Red_400 }}>
          <Typography scale="Lable" size="Large" color="Neutral_OnBackground">
            {data.title}
          </Typography>

          <Typography scale="Body" size="Small" color="Neutral_OnBackground">
            {textShorter(data.description, 80)}
          </Typography>
        </div>
      </div>

      <div className="w-full h-[1px] my-2" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="p-3  grid grid-cols-3 gap-4">
        <RoutinRatingStats commentCount={data.commentCount} rateAvg={data.rateAvg} />
        <div className="col-span-2">
          <RoutinWriter
            writerName={data.writerName}
            writerIcon={data.writerIcon}
            writerSpeciality={textShorter(data.writerSpeciality, 25)}
          />
        </div>
      </div>
    </div>
  );
};

export default RoutinCardDetailedContext;
