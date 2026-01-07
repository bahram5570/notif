import { addCommas } from '@utils/numbers';

import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';
import useAnalytics from '@hooks/useAnalytics';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import { ClinicCardGeneratorProps } from './types';

const ClinicCardGenerator = ({ description, id, image, name, price, priceUnit }: ClinicCardGeneratorProps) => {
  const { callEvent } = useAnalytics();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const clickHandler = () => {
    callEvent('Clinic_Ticket');
    pageNavigationHandler({ showProgressBar: true, linkTo: `clinic/doctor/${id}`, id: 'ClinicCardGenerator' });
  };

  return (
    <div onClick={clickHandler} className="cursor-pointer">
      <div className="w-full h-fit px-3 py-4 rounded-xl flex items-center gap-2 bg-impo_Surface_SurfaceVariant pointer-events-none ">
        <CustomImage src={image} width={90} height={90} />

        <div className="w-full flex flex-col items-end gap-1">
          <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
            {name}
          </Dark_Typography>

          <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
            {description}
          </Dark_Typography>

          <Dark_Typography fontSize="Lable_SmallProminet" className="text-impo_Neutral_OnBackground">
            {`${addCommas(price)} ${priceUnit}`}
          </Dark_Typography>
        </div>
      </div>
    </div>
  );
};

export default ClinicCardGenerator;
