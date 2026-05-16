import { CustomImage_NEW } from '../../../../ui/CustomImage_NEW';
import { CustomTypography } from '../../../../ui/CustomTypography';
import { RoutinRatingStats } from '../../../RoutinRatingStats';
import { RoutinWriter } from '../../../RoutinWriter';
import { RoutinCardSimpleContextPropsType } from './types';

const RoutinCardSimpleContext = ({ data }: RoutinCardSimpleContextPropsType) => {
  return (
    <div className="px-3 py-2">
      <div className="flex flex-row-reverse gap-3">
        <div className="w-14 h-14 ">
          <CustomImage_NEW src={data.image} fill />
        </div>

        <div className="flex justify-end flex-col items-end gap-2 border-impo_Red_400">
          <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
            {data.title}
          </CustomTypography>

          <RoutinRatingStats commentCount={data.commentCount} rateAvg={data.rateAvg} />
        </div>
      </div>

      <div className="w-full h-[1px] my-2 bg-impo_Grey_100 dark:bg-impo_Surface_SurfaceVariant" />

      <div className="flex flex-col items-end rounded-xl pt-2 ">
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
