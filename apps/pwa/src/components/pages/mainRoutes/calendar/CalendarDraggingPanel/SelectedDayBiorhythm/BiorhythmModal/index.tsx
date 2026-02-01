import CancelIcon from '@assets/icons/cancel.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomModal from '@components/ui/CustomModal';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import { BioType, TextBioType } from '../../../__hooks__/useCalendarGetData/types';
import { BIORHYTHM_STATUS } from '../constant';
import { BiorhythmModalPropsType } from './type';

const BiorhythmModal = ({ biorhythmInfo }: BiorhythmModalPropsType) => {
  const router = useRouter();
  const { getQueryParams } = useQueryParamsHandler();

  const biorhythmText = biorhythmInfo.data.texts;
  const biorhythmPercent = biorhythmInfo.data.bio;

  const typeBiothythmText = getQueryParams('typeText') as keyof TextBioType | null;
  const typeBiothythmType = getQueryParams('type') as keyof BioType | null;

  const findCurrentText = typeBiothythmText ? biorhythmText[typeBiothythmText] : '';
  const findCurrentPercent = typeBiothythmType && biorhythmPercent ? biorhythmPercent[typeBiothythmType] : '';

  const findStatus = BIORHYTHM_STATUS.find((status) => status.type === typeBiothythmType);
  const Icon = findStatus?.Icon;

  const onCloseHandler = () => {
    router.back();
  };

  return (
    <CustomModal isSlidingMode>
      <div className="flex flex-col gap-3">
        <div onClick={onCloseHandler} className="w-10 h-10  flex justify-center items-center rounded-full">
          <CancelIcon className="w-6 h-auto stroke-impo_Surface_OnSurfaceVariant" />
        </div>

        <div className="flex flex-col p-4 rounded-2xl gap-3 bg-impo_Neutral_Surface">
          <div className="flex flex-col justify-center items-center gap-2 p-1">
            {Icon && <Icon className="w-16 h-16" />}

            <div className="flex flex-row-reverse gap-1 items-center">
              <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
                {` بیوریتم ${findStatus?.text}: %${findCurrentPercent}`}
              </CustomTypography>
            </div>
          </div>

          <div className="flex flex-col justify-end items-end px-1">
            <div className="flex flex-col justify-end items-end w-full border-b-[1px] border-impo_Surface_OutlineVariant pb-2 ">
              <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
                توصیه امروز
              </CustomTypography>
            </div>

            <div className="py-2">
              <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
                {findCurrentText}
              </CustomTypography>
            </div>
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default BiorhythmModal;
