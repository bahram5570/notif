import ReviewIcon from '@assets/shared/icons/message-icon.svg';
import OrderedListIcon from '@assets/shared/icons/orderedList.svg';
import StarIcon from '@assets/shared/icons/star.svg';

import { useWidgetActions } from '../../../../hooks/useWidgetActions';
import { CustomImage } from '../../../ui/CustomImage';
import { CustomTypography } from '../../../ui/CustomTypography';
import { ClinicWidgetGeneratorProps } from './types';

const ClinicWidgetGenerator = ({
  reviewsCount,
  featureName,
  doctorName,
  speciality,
  isOnline,
  action,
  image,
  badge,
  rate,
}: ClinicWidgetGeneratorProps) => {
  const { actionHandler } = useWidgetActions();

  const selectHandler = () => {
    actionHandler(action);
  };

  return (
    <div
      onClick={selectHandler}
      className="relative flex flex-col items-center w-full h-full px-4 pt-6 pb-4 rounded-2xl bg-impo_Neutral_Background overflow-hidden"
    >
      {badge && (
        <div
          className={`absolute top-0 left-0 px-3 py-1 rounded-br-2xl ${isOnline ? 'bg-impo_Success_Success' : 'bg-impo_Error_Error'}`}
        >
          <CustomTypography fontSize="Lable_Small" className="text-impo_White">
            {badge}
          </CustomTypography>
        </div>
      )}

      <CustomImage src={image} width={64} height={64} className="object-cover rounded-full bg-impo_Neutral_Surface" />

      <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground pb-[2px] pt-2">
        {doctorName}
      </CustomTypography>

      <CustomTypography fontSize="Lable_Small" className="text-impo_Surface_Outline pb-2">
        {speciality}
      </CustomTypography>

      <div className="w-fit">
        <div className="flex items-center justify-center gap-1 pb-1">
          <div className="px-2 py-1 rounded-full border-[1px] border-impo_Neutral_Surface flex items-center gap-1">
            <StarIcon className="w-4 h-auto fill-impo_Yellow" />

            <CustomTypography fontSize="Lable_Small" className="text-impo_Neutral_OnBackground">
              {rate.toFixed(1)}
            </CustomTypography>
          </div>

          <div className="px-2 py-1 rounded-full border-[1px] border-impo_Neutral_Surface flex items-center gap-1">
            <ReviewIcon className="w-4 h-auto fill-impo_Surface_Outline" />

            <CustomTypography fontSize="Lable_Small" className="text-impo_Neutral_OnBackground">
              {`${reviewsCount} نظر`}
            </CustomTypography>
          </div>
        </div>

        {featureName && (
          <div className="flex items-center justify-center gap-1 px-2 py-1 rounded-full bg-impo_Blue_100 w-full">
            <OrderedListIcon className="w-4 h-auto fill-impo_Blue_700" />

            <CustomTypography fontSize="Lable_Small" className="text-impo_Blue_700 !w-fit">
              {featureName}
            </CustomTypography>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClinicWidgetGenerator;
