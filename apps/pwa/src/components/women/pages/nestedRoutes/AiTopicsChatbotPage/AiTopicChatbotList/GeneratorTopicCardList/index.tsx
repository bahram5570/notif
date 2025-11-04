import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import { TopicType } from '../__hooks__/useGetTopicList/type';
import SuggestedTopicCard from './SuggestedTopicCard';
import TopicCardItem from './TopicCardItem';
import { GeneratorTopicCardListPropsType } from './type';

const GeneratorTopicCardList = ({ topics, categoryId, usedTopics = false }: GeneratorTopicCardListPropsType) => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const onLinkHandler = (id: string) => {
    pageNavigationHandler({
      showProgressBar: true,
      id: `chatbot-${id}`,
      linkTo: `/protected/aiChatbot?itemId=${id}&categoryId=${categoryId}`,
    });
  };

  const rows: TopicType[][] = [];
  let i = 0;

  while (i < topics.length) {
    rows.push([topics[i]]);
    i++;

    if (i < topics.length) {
      const nextTwo = topics.slice(i, i + 2);
      rows.push(nextTwo);
      i += nextTwo.length;
    }
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {rows.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className={`grid gap-2 w-full ${rowIndex === 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
            {row.map((item, index) => {
              const colClass = row.length === 1 && rowIndex === 1 ? 'col-start-2' : '';
              return (
                <div key={index} className={colClass}>
                  {rowIndex === 0 && usedTopics ? (
                    <SuggestedTopicCard {...item} onLinkHandler={onLinkHandler} />
                  ) : (
                    <TopicCardItem {...item} onLinkHandler={onLinkHandler} />
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default GeneratorTopicCardList;
