import Typography from '@components/ui/Typography';
import FeedbackModal from '@components/women/FeedbackModal';
import useTheme from '@hooks/useTheme';

import RoutinDietsGenerator from './RoutinDietsGenerator';
import useFeedback from './RoutinDietsGenerator/RoutinDietsCheckbox/__hooks__/useFeedback';
import { RoutinDietsProps } from './types';

const RoutinDiets = ({ name, items, compeletItemType, programId }: RoutinDietsProps) => {
  const { colors } = useTheme();
  const { isLoading: feedbackLoading, rateHandler } = useFeedback({ programId });

  return (
    <>
      <div className="mt-7">
        <Typography scale="Lable" size="Large" className="pb-3 ml-auto">
          {name}
        </Typography>

        {items.map((item, index) => {
          const lastItem = index === items.length - 1;

          return (
            <div key={item.id}>
              {index > 0 && (
                <div className="w-full h-[1px] my-3" style={{ backgroundColor: colors.Surface_SurfaceVariant }} />
              )}

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
