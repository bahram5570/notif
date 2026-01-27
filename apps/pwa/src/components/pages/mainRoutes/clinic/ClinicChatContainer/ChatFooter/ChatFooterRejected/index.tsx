import LinkToIcon from '@assets/icons/linkTo.svg';

import Dark_Typography from '@components/ui/Dark_Typography';

const ChatFooterRejected = () => {
  return (
    <div className="w-full h-[56px] rounded-lg border-[1px] flex flex-col items-center justify-center gap-1 border-impo_Surface_OutlineVariant bg-impo_Neutral_Surface">
      <div className="flex items-end gap-1">
        <Dark_Typography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
          این تیکت رد شد
        </Dark_Typography>

        <LinkToIcon className="w-6 h-auto stroke-impo_Surface_Outline" />
      </div>

      <Dark_Typography fontSize="Lable_Small" className="text-impo_Neutral_OnBackground">
        دلیل: نامربوط بودن بیماری با تخصص پزشک
      </Dark_Typography>
    </div>
  );
};

export default ChatFooterRejected;
