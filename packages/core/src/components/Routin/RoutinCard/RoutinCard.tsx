import RoutinCardDetailed from './RoutinCardDetailed';
import RoutinCardSimple from './RoutinCardSimple';
import { RoutinCardProps } from './types';

export const RoutinCard = ({ data, showDescription = false, className, width }: RoutinCardProps) => {
  return (
    <div
      className={`rounded-2xl  bg-impo_Surface_SurfaceVariant dark:bg-impo_Neutral_Surface  ${className ?? 'w-full'}`}
      style={{ width }}
    >
      {showDescription ? <RoutinCardDetailed data={data} /> : <RoutinCardSimple data={data} />}
    </div>
  );
};
