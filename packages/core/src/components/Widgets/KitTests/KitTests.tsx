import { KitTestModuleTypeEnums } from '../../../providers/WidgetActionsProvider';
import KitTestsContainer from './KitTestsContainer';
import { KitTestsProps } from './types';

export const KitTests = ({ data, gregorianDate, hasOvulationKit }: KitTestsProps) => {
  return (
    <>
      {hasOvulationKit && (
        <KitTestsContainer data={data} gregorianDate={gregorianDate} moduleType={KitTestModuleTypeEnums.Ovulation} />
      )}

      <KitTestsContainer data={data} gregorianDate={gregorianDate} moduleType={KitTestModuleTypeEnums.BabyCheck} />
    </>
  );
};
