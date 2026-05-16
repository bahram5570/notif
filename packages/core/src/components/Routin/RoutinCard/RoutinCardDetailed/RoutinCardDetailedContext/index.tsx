import { textShorter } from '../../../../../utils/scripts';

import { CustomImage_NEW } from '../../../../ui/CustomImage_NEW';
import { CustomTypography } from '../../../../ui/CustomTypography';
import { RoutinRatingStats } from '../../../RoutinRatingStats';
import { RoutinWriter } from '../../../RoutinWriter';
import { RoutinCardDetailedContextPropsType } from './types';

const RoutinCardDetailedContext = ({ data }: RoutinCardDetailedContextPropsType) => {
  return (
    <div className="p-3">
      <div className="flex flex-row-reverse gap-3 px-3">
        <CustomImage_NEW src={data.image} width={56} height={56} />

        <div className="flex justify-center flex-col items-end gap-2 border-impo_Red_400">
          <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
            {data.title}
          </CustomTypography>

          <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
            {textShorter(data.description, 80)}
          </CustomTypography>
        </div>
      </div>

      <div className="w-full h-[1px] my-2 bg-impo_Grey_100 dark:bg-impo_Surface_SurfaceVariant" />

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
