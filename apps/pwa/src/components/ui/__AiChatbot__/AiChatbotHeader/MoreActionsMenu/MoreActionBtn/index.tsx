import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MoreActionBtnPropsType } from './type';

const MoreActionBtn = ({ onClickHandler, title, isDeleteBtn = false, Icon }: MoreActionBtnPropsType) => {
  return (
    <div className="flex flex-row-reverse items-center gap-2" onClick={onClickHandler}>
      <div
        className={`flex justify-center items-center rounded-full w-[34px] h-[34px] ${isDeleteBtn ? 'bg-impo_Error_ErrorContainer' : 'bg-impo_Surface_OutlineVariant'}`}
      >
        <Icon
          className={`w-[18px] h-[18px] ${!isDeleteBtn && 'fill-impo_Neutral_OnSurface'} ${isDeleteBtn && 'stroke-impo_Error_Error'}`}
        />
      </div>

      <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
        {title}
      </CustomTypography>
    </div>
  );
};

export default MoreActionBtn;
