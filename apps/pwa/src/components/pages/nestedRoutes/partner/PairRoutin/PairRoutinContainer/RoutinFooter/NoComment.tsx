import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

const NoComment = () => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  return (
    <div className=" rounded-xl w-full flex flex-row-reverse justify-between items-center px-4 py-3 bg-impo_Neutral_Surface">
      <div className="flex flex-col items-end px-3 py-2 gap-2">
        <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Lable_Medium">
          هنوز نظرت رو ثبت نکردی؟
        </CustomTypography>
        <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Body_Small">
          نظرت راجع به برنامه برامون مهمه!
        </CustomTypography>
      </div>
      <CustomButton onClick={() => newQueryParamsHandler({ [MODALS.MODAL_FEEDBACK]: 'true' })} className="max-w-fit">
        <CustomTypography className="text-impo_PrimaryMan_OnPrimaryMan" fontSize="Lable_Medium">
          ثبت نظر
        </CustomTypography>
      </CustomButton>
    </div>
  );
};

export default NoComment;
