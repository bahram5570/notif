import WidgetCardContainer from '@components/Widgets/WidgetCardContainer';
import Dark_Typography from '@components/ui/Dark_Typography';

import KitTestBabyCheck from '../KitTestBabyCheck';
import { KitTestModuleTypeEnums } from '../enum';
import KitTestOvulation from './KitTestOvulation';
import KitTestsList from './KitTestsList';
import { kitTestMainScripts } from './constants';
import { KitTestsContainerProps } from './types';

const KitTestsContainer = (props: KitTestsContainerProps) => {
  return (
    <WidgetCardContainer title={kitTestMainScripts[props.moduleType].title} className="!px-0 !pt-0">
      <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground w-full pb-2 mb-4">
        {kitTestMainScripts[props.moduleType].subTitle}
      </Dark_Typography>

      {props.moduleType === KitTestModuleTypeEnums.Ovulation && (
        <KitTestOvulation moduleType={props.moduleType} gregorianDate={props.gregorianDate} />
      )}

      {props.moduleType === KitTestModuleTypeEnums.BabyCheck && (
        <KitTestBabyCheck moduleType={props.moduleType} gregorianDate={props.gregorianDate} />
      )}

      <KitTestsList moduleType={props.moduleType} data={props.data} gregorianDate={props.gregorianDate} />
    </WidgetCardContainer>
  );
};

export default KitTestsContainer;
