import { WidgetCardContainer } from '@repo/core/components/Widgets/WidgetCardContainer';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { currentDate } from '@repo/core/utils/dates';

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

        {/* <KitTestOvulation moduleType={KitTestModuleTypeEnums.Ovulation} gregorianDate={gDate} onComplete={onAdd} /> */}

        {/* <KitTestsList
          gregorianDate={gDate}
          moduleType={KitTestModuleTypeEnums.Ovulation}
          data={{ babyChecks: [], ovulationResult: updatedData }}
        /> */}

        <OvulationKitModal data={updatedData} onDelete={onDelete} />
      </>
    </WidgetCardContainer>
  );
};

export default WidgetOvulationKitCard;
