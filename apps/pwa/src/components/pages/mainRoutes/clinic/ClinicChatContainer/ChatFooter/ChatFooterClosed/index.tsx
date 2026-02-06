import CloseIcon from '@assets/shared/icons/plus.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

const ChatFooterClosed = () => {
  return (
    <div className="w-full h-[40px] rounded-lg border-[1px] flex items-center justify-center gap-2 bg-impo_Neutral_Surface border-impo_Surface_OutlineVariant">
      <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
        این تیکت بسته شد
      </CustomTypography>

      <div className="w-5 h-5 flex items-center justify-center border-[1px] rounded-full border-impo_Error_Error">
        <CloseIcon className="w-4 h-auto rotate-45 stroke-impo_Error_Error fill-impo_Error_Error" />
      </div>
    </div>
  );
};

export default ChatFooterClosed;
