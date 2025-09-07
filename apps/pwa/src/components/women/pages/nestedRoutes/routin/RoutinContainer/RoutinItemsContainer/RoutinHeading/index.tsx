import RoutinRatingStats from '@components/__routin__/RoutinRatingStats';
import RoutinWriter from '@components/__routin__/RoutinWriter';
import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { RoutinHeadingProps } from './types';

const RoutinHeading = (props: RoutinHeadingProps) => {
  const { colors } = useTheme();
  return (
    <div className="flex flex-col gap-2 pb-4">
      <div className="w-full flex items-center justify-between gap-5 ">
        <CustomImage src={props.image} width={88} height={88} />

        <div className="flex flex-col items-end gap-2">
          <Typography scale="Title" size="Small">
            {props.title}
          </Typography>

          <Typography scale="Body" size="Small">
            {props.description}
          </Typography>
        </div>
      </div>
      <div className="w-full h-[1px] my-3" style={{ backgroundColor: colors.Surface_SurfaceVariant }} />

      <div className="flex p-3 justify-between gap-2 items-center">
        <RoutinRatingStats commentCount={props.commentCount} rateAvg={props.rateAvg} />
        <div className="col-span-2">
          <RoutinWriter
            writerIcon={props.writerIcon}
            writerName={props.writerName}
            writerSpeciality={props.writerSpeciality}
          />
        </div>
      </div>
    </div>
  );
};

export default RoutinHeading;
