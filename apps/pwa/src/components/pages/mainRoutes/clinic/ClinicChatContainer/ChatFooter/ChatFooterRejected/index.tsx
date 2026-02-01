import LinkToIcon from '@assets/icons/linkTo.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

const ChatFooterRejected = () => {
  return (
    <div className="w-full h-[56px] rounded-lg border-[1px] flex flex-col items-center justify-center gap-1 border-impo_Surface_OutlineVariant bg-impo_Neutral_Surface">
      <div className="flex items-end gap-1">
        <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
          این تیکت رد شد
        </CustomTypography>

        <LinkToIcon className="w-6 h-auto stroke-impo_Surface_Outline" />
      </div>

      <CustomTypography fontSize="Lable_Small" className="text-impo_Neutral_OnBackground">
        دلیل: نامربوط بودن بیماری با تخصص پزشک
      </CustomTypography>
    </div>
  );
};

export default ChatFooterRejected;
