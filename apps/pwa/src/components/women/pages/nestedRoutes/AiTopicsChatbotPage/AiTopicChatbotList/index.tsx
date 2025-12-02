import AiTopicChatbotListLayout from './AiTopicChatbotListLayout';
import AiTopicChatbotShortcut from './AiTopicChatbotShortcut';
import AiTopicChatbotTopicHeader from './AiTopicChatbotTopicHeader';
import AiTopicChatbotUsedTopics from './AiTopicChatbotUsedTopics';
import AiTopicList from './AiTopicList';
import useGetTopicList from './__hooks__/useGetTopicList';

const AiTopicChatbotList = () => {
  const { data, isLoading } = useGetTopicList();

  const result = data?.result;
  const hasUsedTopicsListData = result && result.usedTopics.length > 0;
  const hasTopicsListData = result && result.topics.length > 0;
  const hasShortcutsListData = result && result.shortcut && result.shortcut.shortcuts.length > 0;

  return (
    <>
      <AiTopicChatbotListLayout isLoading={isLoading} inputPlaceholder={result?.inputPlaceholder}>
        <>
          <AiTopicChatbotTopicHeader subtitle={result?.subtitle || ''} title={result?.title || ''} />
          {hasShortcutsListData && <AiTopicChatbotShortcut shortcut={result.shortcut} categoryId={result.id} />}

          {hasUsedTopicsListData && <AiTopicChatbotUsedTopics categoryId={result.id} usedTopics={result.usedTopics} />}
          {hasTopicsListData && (
            <AiTopicList categoryId={result.id} topics={result.topics} hasUsedTopicsListData={hasUsedTopicsListData} />
          )}
        </>
      </AiTopicChatbotListLayout>
    </>
  );
};

export default AiTopicChatbotList;
