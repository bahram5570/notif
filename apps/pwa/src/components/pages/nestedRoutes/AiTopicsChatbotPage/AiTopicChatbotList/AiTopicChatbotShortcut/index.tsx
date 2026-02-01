import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import ShortcutItem from './ShortcutItem';
import { AiTopicChatbotShortcutPropsType } from './type';

const AiTopicChatbotShortcut = ({ shortcut, onLinkHandler }: AiTopicChatbotShortcutPropsType) => {
  return (
    <div className="flex flex-col rounded-3xl gap-3 px-4 py-6 bg-impo_Neutral_Surface">
      <div className="flex flex-col items-end">
        <CustomTypography fontSize="Lable_Small" className="text-impo_Surface_Outline">
          {shortcut.title}
        </CustomTypography>
        <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
          {shortcut.description}
        </CustomTypography>
      </div>
      <div className="grid grid-cols-4 gap-[30px]" style={{ direction: 'rtl' }}>
        {shortcut.shortcuts.map((shortcut, index) => (
          <div className="flex flex-col items-center gap-2 h-full" key={index}>
            <ShortcutItem {...shortcut} onLinkHandler={onLinkHandler} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiTopicChatbotShortcut;
