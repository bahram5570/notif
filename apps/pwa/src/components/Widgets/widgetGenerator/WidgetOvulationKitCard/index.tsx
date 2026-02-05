import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { currentDate } from '@repo/core/utils/dates';

import KitTestOvulation from '@components/KitTests/KitTestsContainer/KitTestOvulation';
import KitTestsList from '@components/KitTests/KitTestsContainer/KitTestsList';
import { KitTestModuleTypeEnums } from '@components/KitTests/enum';
import WidgetCardContainer from '@components/Widgets/WidgetCardContainer';

import OvulationKitModal from './OvulationKitModal';
import useUpdateOvulationData from './__hooks__/useUpdateOvulationData';
import { WidgetOvulationKitCardProps } from './types';

const { gDate } = currentDate();

const WidgetOvulationKitCard = ({ data }: WidgetOvulationKitCardProps) => {
  const { onAdd, onDelete, updatedData } = useUpdateOvulationData({ data });

  return (
    <WidgetCardContainer title={updatedData.title}>
      <>
        <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground w-full pb-5">
          {updatedData.description}
        </CustomTypography>

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
