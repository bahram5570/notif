import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import { TopicType } from '../__hooks__/useGetTopicList/type';
import SuggestedTopicCard from './SuggestedTopicCard';
import TopicCardItem from './TopicCardItem';
import { GeneratorTopicCardListPropsType } from './type';

const GeneratorTopicCardList = ({ topics, categoryId }: GeneratorTopicCardListPropsType) => {
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
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={`grid gap-2 w-full ${row.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
          {row.map((item, index) =>
            rowIndex === 0 ? (
              <SuggestedTopicCard {...item} key={index} onLinkHandler={onLinkHandler} />
            ) : (
              <TopicCardItem {...item} key={index} onLinkHandler={onLinkHandler} />
            ),
          )}
        </div>
      ))}
    </div>
  );
};

export default GeneratorTopicCardList;
