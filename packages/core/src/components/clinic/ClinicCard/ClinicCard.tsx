import { addCommas } from '../../../utils/numbers';

import { useAnalytics } from '../../../hooks/useAnalytics';
import { usePageNavigationLoading } from '../../../hooks/usePageNavigationLoading';
import { CustomImage } from '../../ui/CustomImage';
import { CustomTypography } from '../../ui/CustomTypography';
import { ClinicCardProps } from './types';

export const ClinicCard = (props: ClinicCardProps) => {
  const { callEvent } = useAnalytics();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const clickHandler = () => {
    callEvent('Clinic_Ticket');
    pageNavigationHandler({ showProgressBar: true, linkTo: `clinic/doctor/${props.id}`, id: 'ClinicCard' });
  };

  return (
    <div onClick={clickHandler} className="cursor-pointer w-full">
      <div className="w-full h-fit px-3 py-4 rounded-xl flex items-center gap-2 bg-impo_Neutral_Surface pointer-events-none ">
        <CustomImage src={props.image} width={90} height={90} />

        <div className="w-full flex flex-col items-end gap-1">
          <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
            {props.name}
          </CustomTypography>

          <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
            {props.description}
          </CustomTypography>

          <CustomTypography fontSize="Lable_SmallProminet" className="text-impo_Neutral_OnBackground">
            {`${addCommas(props.price)} ${props.priceUnit}`}
          </CustomTypography>
        </div>
      </div>
    </div>
  );
};
