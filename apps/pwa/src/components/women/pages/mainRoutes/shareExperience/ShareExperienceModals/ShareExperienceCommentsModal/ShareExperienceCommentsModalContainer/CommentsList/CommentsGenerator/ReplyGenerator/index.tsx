import Dark_Spinner from '@components/ui/Dark_Spinner';
import Dark_Typography from '@components/ui/Dark_Typography';

import ReplyGeneratorBottomPart from './ReplyGeneratorBottomPart';
import ReplyGeneratorTopPart from './ReplyGeneratorTopPart';
import useReplyList from './__hooks__/useReplyList';
import { ReplyGeneratorProps } from './types';

const ReplyGenerator = (props: ReplyGeneratorProps) => {
  const { data, currentRepliesCount, showMoreHandler, isLoading } = useReplyList(props);

  if (!data) {
    return <></>;
  }

  const count = props.repliesCount - currentRepliesCount;
  const showMoreScript = `مشاهده ${count} پاسخ به ${props.commentName}`;

  return (
    <>
      {data.repliesList.map((item, index) => (
        <div className="w-full flex flex-col items-end pb-2" key={index}>
          <ReplyGeneratorTopPart
            approvedProfile={item.approvedProfile}
            selfExperience={item.selfExperience}
            createTime={item.createTime}
            avatar={item.avatar}
            name={item.name}
            userId={item.userId}
          />

          <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground pr-10 -translate-y-4">
            {item.text}
          </Dark_Typography>

          <ReplyGeneratorBottomPart
            selfExperience={item.selfExperience}
            commentId={props.commentId}
            likeCount={item.likeCount}
            disliked={item.disliked}
            shareId={props.shareId}
            userId={item.userId}
            state={item.state}
            id={item.id}
          />
        </div>
      ))}

      {count > 0 && !isLoading && (
        <div className="w-full flex items-center justify-end !translate-x-[40px]" onClick={showMoreHandler}>
          <Dark_Typography fontSize="Body_Small" className="text-impo_Primary_Primary">
            {showMoreScript}
          </Dark_Typography>
        </div>
      )}

      {isLoading && (
        <div className="w-full flex justify-center">
          <Dark_Spinner className="border-impo_Surface_Outline" size={20} />
        </div>
      )}
    </>
  );
};

export default ReplyGenerator;
