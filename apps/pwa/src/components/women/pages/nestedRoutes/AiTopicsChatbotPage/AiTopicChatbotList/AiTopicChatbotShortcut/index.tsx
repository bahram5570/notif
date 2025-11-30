import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';

import ShortcutItem from './ShortcutItem';
import { AiTopicChatbotShortcutPropsType } from './type';

const AiTopicChatbotShortcut = ({ shortcut, categoryId }: AiTopicChatbotShortcutPropsType) => {
  const { colors } = useTheme();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const onLinkHandler = (id: string, imageType: boolean) => {
    pageNavigationHandler({
      showProgressBar: true,
      id: `chatbot-${id}`,

      linkTo: `/protected/aiChatbot?promptItemId=${id}&promptCategoryId=${categoryId}&imageType=${imageType}`,
    });
  };

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
      {shortcut.shortcuts.map((shortcut, index) => {
        return <ShortcutItem {...shortcut} key={index} onLinkHandler={onLinkHandler} />;
      })}
    </div>
  );
};

export default AiTopicChatbotShortcut;
