import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import GeneratorTopicCardList from '../GeneratorTopicCardList';
import { AiTopicListPropsType } from './type';

const AiTopicList = ({ hasUsedTopicsListData, categoryId, topics }: AiTopicListPropsType) => {
  const { colors } = useTheme();
  return (
    <div className="flex justify-end items-end flex-col gap-4">
      {hasUsedTopicsListData && (
        <>
          <div
            className="h-0 w-full rotate-180 opacity-40"
            style={{ border: `1px solid ${colors.Neutral_Background}` }}
          />
          <Typography scale="Title" size="Small">
            {/* {data.topicTitle} */}
            تالارهای پیشنهادی
          </Typography>
        </>
      )}

      <GeneratorTopicCardList topics={topics} categoryId={categoryId} usedTopics={true} />
    </div>
  );
};

export default AiTopicList;
