import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

import AiTopicChatbotListFooter from './AiTopicChatbotListFooter';
import AiTopicChatbotListLayout from './AiTopicChatbotListLayout';
import AiTopicChatbotShortcut from './AiTopicChatbotShortcut';
import AiTopicChatbotTopicHeader from './AiTopicChatbotTopicHeader';
import AiTopicChatbotUsedTopics from './AiTopicChatbotUsedTopics';
import AiTopicList from './AiTopicList';
import useGetTopicList from './__hooks__/useGetTopicList';

const AiTopicChatbotList = () => {
  const { data, isLoading } = useGetTopicList();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const result = data?.result;
  const hasUsedTopicsListData = result && result.usedTopics.length > 0;
  const hasTopicsListData = result && result.topics.length > 0;
  const hasShortcutsListData = result && result.shortcut && result.shortcut.shortcuts.length > 0;

  const onLinkHandler = (id: string) => {
    const categoryId = result?.id;
    pageNavigationHandler({
      showProgressBar: true,
      id: `chatbot-${id}`,
      linkTo: `/protected/aiChatbot?promptItemId=${id}&promptCategoryId=${categoryId}`,
    });
  };

  return (
    <>
      <AiTopicChatbotListLayout isLoading={isLoading}>
        <>
          <AiTopicChatbotTopicHeader subtitle={result?.subtitle || ''} title={result?.title || ''} />
          {hasShortcutsListData && <AiTopicChatbotShortcut shortcut={result.shortcut} onLinkHandler={onLinkHandler} />}
          {hasUsedTopicsListData && (
            <AiTopicChatbotUsedTopics onLinkHandler={onLinkHandler} topics={result.usedTopics} />
          )}
          {hasTopicsListData && (
            <AiTopicList
              topics={result.topics}
              hasUsedTopicsListData={hasUsedTopicsListData}
              onLinkHandler={onLinkHandler}
            />
          )}
        </>
      </AiTopicChatbotListLayout>
      <AiTopicChatbotListFooter inputPlaceholder={result?.inputPlaceholder} />
    </>
  );
};

export default AiTopicChatbotList;
