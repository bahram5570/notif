import useTheme from '@hooks/useTheme';

import RoutinCardDetailed from './RoutinCardDetailed';
import RoutinCardSimple from './RoutinCardSimple';
import { RoutinCardProps } from './type';

const RoutinCard = ({ data, showDescription = false, className }: RoutinCardProps) => {
  const { colors } = useTheme();

  return (
    <div
      className={`rounded-2xl   ${className ?? 'w-full'}`}
      style={{ backgroundColor: colors.Surface_SurfaceVariant }}
    >
      {showDescription ? <RoutinCardDetailed data={data} /> : <RoutinCardSimple data={data} />}
    </div>
  );
};

export default RoutinCard;
