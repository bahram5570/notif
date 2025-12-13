import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import ShortcutItem from './ShortcutItem';
import { AiTopicChatbotShortcutPropsType } from './type';

const AiTopicChatbotShortcut = ({ shortcut, onLinkHandler }: AiTopicChatbotShortcutPropsType) => {
  const { colors } = useTheme();

  return (
    <div className="flex flex-col rounded-3xl gap-3 px-4 py-6" style={{ backgroundColor: colors.White }}>
      <div className="flex flex-col items-end">
        <Typography scale="Lable" size="Small" color="Surface_Outline">
          {shortcut.title}
        </Typography>
        <Typography scale="Lable" size="Medium" color="Neutral_OnBackground">
          {shortcut.description}
        </Typography>
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
