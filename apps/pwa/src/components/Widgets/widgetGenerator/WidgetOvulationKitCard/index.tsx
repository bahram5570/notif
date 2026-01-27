import { currentDate } from '@utils/dates';

import KitTestOvulation from '@components/KitTests/KitTestsContainer/KitTestOvulation';
import KitTestsList from '@components/KitTests/KitTestsContainer/KitTestsList';
import { KitTestModuleTypeEnums } from '@components/KitTests/enum';
import WidgetCardContainer from '@components/Widgets/WidgetCardContainer';
import Dark_Typography from '@components/ui/Dark_Typography';

import OvulationKitModal from './OvulationKitModal';
import useUpdateOvulationData from './__hooks__/useUpdateOvulationData';
import { WidgetOvulationKitCardProps } from './types';

const { gDate } = currentDate();

const WidgetOvulationKitCard = ({ data }: WidgetOvulationKitCardProps) => {
  const { onAdd, onDelete, updatedData } = useUpdateOvulationData({ data });

  return (
    <WidgetCardContainer title={updatedData.title}>
      <>
        <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground w-full pb-5">
          {updatedData.description}
        </Dark_Typography>

        <KitTestOvulation moduleType={KitTestModuleTypeEnums.Ovulation} gregorianDate={gDate} onComplete={onAdd} />

        <KitTestsList
          gregorianDate={gDate}
          moduleType={KitTestModuleTypeEnums.Ovulation}
          data={{ babyChecks: [], ovulationResult: updatedData }}
        />

        <OvulationKitModal data={updatedData} onDelete={onDelete} />
      </>
    </WidgetCardContainer>
  );
};

export default WidgetOvulationKitCard;
