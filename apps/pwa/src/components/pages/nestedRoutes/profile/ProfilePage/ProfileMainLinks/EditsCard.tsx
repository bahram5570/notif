import PeriodIcon from '@assets/icons/profile/period.svg';
import PregnancyIcon from '@assets/icons/profile/pregnancy.svg';

import { CyclePhaseEnum } from '@repo/core/providers/WidgetActionsProvider';

import CardGenerator from './CardGenerator';
import { EditsCardTypes } from './types';

const EditsCard = ({ phase, isDelivery, pregnancyDate }: EditsCardTypes) => {
  if (phase === CyclePhaseEnum.PeriodTracker) {
    return (
      <CardGenerator
        backgroundColor="#FDEFF1"
        script="ویرایش اطلاعات چرخه"
        linkTo="/protected/periodSettings"
        Icon={<PeriodIcon className="w-7 h-auto" />}
      />
    );
  }

  if (phase === CyclePhaseEnum.Breastfeeding) {
    return (
      <CardGenerator
        backgroundColor="#FDEFF1"
        script="ویرایش اطلاعات شیردهی"
        linkTo="/protected/breastfeedingSettings"
        Icon={<PregnancyIcon className="w-8 h-auto" />}
      />
    );
  }

  if (phase === CyclePhaseEnum.Pregnancy) {
    return (
      <CardGenerator
        backgroundColor="#FDEFF1"
        script="ویرایش اطلاعات بارداری"
        Icon={<PregnancyIcon className="w-8 h-auto" />}
        linkTo={`/protected/pregnancySettings?isDelivery=${isDelivery}&pregnancyDate=${pregnancyDate}`}
      />
    );
  }

  return <></>;
};

export default EditsCard;
