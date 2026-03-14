import CancelIcon from '@assets/shared/icons/cancel.svg';
import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

const BiorhythmModal = () => {
  const router = useRouter();
  const { getQueryParams } = useQueryParamsHandler();

  const description = getQueryParams('description') as string | null;
  const icon = getQueryParams('icon') as string | null;
  const title = getQueryParams('title') as string | null;

  const onCloseHandler = () => {
    router.back();
  };
  return (
    <div className="flex flex-col gap-3">
      <div onClick={onCloseHandler} className="w-10 h-10  flex justify-center items-center rounded-full">
        <CancelIcon className="w-6 h-auto stroke-impo_Surface_OnSurfaceVariant" />
      </div>

      <div className="flex flex-col p-4 rounded-2xl gap-3 bg-impo_Neutral_Surface">
        <div className="flex flex-col justify-center items-center gap-2 p-1">
          {icon && <CustomImage src={icon} className="w-16 h-16" />}

          <div className="flex flex-row-reverse gap-1 items-center">
            <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
              {title}
            </CustomTypography>
          </div>
        </div>

        <div className="flex flex-col justify-end items-end px-1">
          <div className="flex flex-col justify-end items-end w-full border-b-[1px] border-impo_Surface_OutlineVariant pb-2 ">
            <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
              بیوریتم
            </CustomTypography>
          </div>

          <div className="py-2">
            <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
              {description}
            </CustomTypography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiorhythmModal;
