import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import RoutinRatingStats from '@components/__routin__/RoutinRatingStats';
import RoutinWriter from '@components/__routin__/RoutinWriter';
import CustomImage from '@components/ui/CustomImage';

import { RoutinHeadingProps } from './types';

const RoutinHeading = (props: RoutinHeadingProps) => {
  return (
    <div className="flex flex-col gap-2 pb-4">
      <div className="w-full flex items-center justify-between gap-5 ">
        <CustomImage src={props.image} width={88} height={88} />

        <div className="flex flex-col items-end gap-2">
          <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
            {props.title}
          </CustomTypography>
          <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
            {props.description}
          </CustomTypography>
        </div>
      </div>
      <div className="w-full h-[1px] my-3 bg-impo_Surface_SurfaceVariant" />

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
