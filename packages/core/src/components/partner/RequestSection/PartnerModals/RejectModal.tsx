import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import useReject from './__hooks__/useReject';
import { ModalPropsType } from './type';

const RejectModal = ({ onCloseModal, isMan }: ModalPropsType) => {
  const { getQueryParams } = useQueryParamsHandler();
  const { rejectHandler, isLoading } = useReject();

  const id = getQueryParams('id');
  const partnerName = getQueryParams('partnerName');
  const isRecv = getQueryParams('isRecv');

  const onClick = () => {
    rejectHandler(id);
  };

  return (
    <div className="flex flex-col items-center  gap-3 max-w-sm">
      <div className=" flex flex-col items-center p-2 w-full gap-2">
        <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
          {isRecv
            ? ` از رد درخواست همدلی ${partnerName} مطمئن هستی؟`
            : `از لغو درخواست همدلی به ${partnerName} مطمئنی ؟ `}
        </CustomTypography>
      </div>

      <div className={`flex w-full justify-between gap-2 `}>
        <CustomButton
          className={`${isMan && '!bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan'}`}
          onClick={onClick}
          isLoading={isLoading}
          fontSize="Lable_Large"
        >
          !آره
        </CustomButton>
        <CustomButton
          className="!bg-impo_Neutral_Surface !text-impo_Neutral_OnSurface !border-impo_Neutral_Surface"
          onClick={onCloseModal}
          fontSize="Lable_Large"
        >
          !نه
        </CustomButton>
      </div>
    </div>
  );
};

export default RejectModal;
