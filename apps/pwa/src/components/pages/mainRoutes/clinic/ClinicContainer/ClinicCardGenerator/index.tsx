import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { addCommas } from '@repo/core/utils/numbers';

import useAnalytics from '@hooks/useAnalytics';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

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
      <div className="w-full h-fit px-3 py-4 rounded-xl flex items-center gap-2 bg-impo_Neutral_Surface pointer-events-none ">
        <CustomImage src={image} width={90} height={90} />

        <div className="w-full flex flex-col items-end gap-1">
          <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
            {name}
          </CustomTypography>

          <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
            {description}
          </CustomTypography>

          <CustomTypography fontSize="Lable_SmallProminet" className="text-impo_Neutral_OnBackground">
            {`${addCommas(price)} ${priceUnit}`}
          </CustomTypography>
        </div>
      </div>
    </div>
  );
};

export default ClinicCardGenerator;
