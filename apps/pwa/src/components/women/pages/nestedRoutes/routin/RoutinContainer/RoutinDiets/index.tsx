import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import RoutinDietsGenerator from './RoutinDietsGenerator';
import { RoutinDietsProps } from './types';

const RoutinDiets = ({ name, items }: RoutinDietsProps) => {
  const { colors } = useTheme();

  return (
    <div className="mt-7">
      <Typography scale="Lable" size="Large" className="pb-3 ml-auto">
        {name}
      </Typography>

      {items.map((item, index) => {
        const lastItem = index === items.length - 1;
        return (
          <div key={index}>
            {index > 0 && (
              <div className="w-full h-[1px] my-3" style={{ backgroundColor: colors.Surface_SurfaceVariant }} />
            )}

            <RoutinDietsGenerator item={item} index={index} isLastItem={lastItem} />
          </div>
        );
      })}
    </div>
  );
};

export default RoutinDiets;
