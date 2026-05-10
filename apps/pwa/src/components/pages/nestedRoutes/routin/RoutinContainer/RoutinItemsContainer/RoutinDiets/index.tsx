import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { FeedbackModal } from '@repo/core/components/ui/FeedbackModal';

import RoutinDietsGenerator from './RoutinDietsGenerator';
import useFeedback from './RoutinDietsGenerator/RoutinDietsCheckbox/__hooks__/useFeedback';
import { RoutinDietsProps } from './types';

const RoutinDiets = ({ name, items, compeletItemType, programId }: RoutinDietsProps) => {
  const { isLoading: feedbackLoading, rateHandler } = useFeedback({ programId });

  return (
    <>
      <div className="mt-7">
        <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground pb-3 ml-auto">
          {name}
        </CustomTypography>

        {items.map((item, index) => {
          const lastItem = index === items.length - 1;

          return (
            <div key={item.id}>
              {index > 0 && <div className="w-full h-[1px] my-3 bg-impo_Surface_SurfaceVariant" />}

              <RoutinDietsGenerator
                item={item}
                index={index}
                isLastItem={lastItem}
                compeletItemType={compeletItemType}
                programId={programId}
              />
            </div>
          );
        })}
      </div>

      <FeedbackModal
        title=" امیدواریم این مرحله واست مفید باشه، به این مرحله از روتین  چه امتیازی میدی؟"
        onSubmit={rateHandler}
        isLoading={feedbackLoading}
      />
    </>
  );
};

export default RoutinDiets;

// export default memo(RoutinDiets, (prev, next) => {
//   return prev.programId === next.programId;
// });
