import RoutinWriter from '@components/__routin__/RoutinWriter';
import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import CommentRate from './CommentRate';
import { CommentItemPropsType } from './type';

const CommentItem = (props: CommentItemPropsType) => {
  return (
    <div className=" rounded-xl bg-impo_Neutral_Surface">
      <div className="px-3 py-4 flex flex-col justify-end items-end gap-4">
        <div className="flex flex-row-reverse justify-end items-center gap-2">
          <CustomImage src={props.imageUrl} width={40} height={40} />
          <div className="flex flex-col items-end gap-1">
            <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
              {props.username}
            </Dark_Typography>

            {props.rate > 0 && <CommentRate rate={props.rate} />}
          </div>
        </div>
        <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          {props.commentText}
        </Dark_Typography>
      </div>
      {props.hasReply && (
        <div className="px-3 py-4">
          <div className="px-3 py-4 flex flex-col justify-end items-end gap-4  border-r-2">
            <div className="flex flex-row-reverse justify-end items-center gap-2">
              <RoutinWriter
                writerIcon={props.reply.writerIcon}
                writerName={props.reply.writerName}
                writerSpeciality={props.reply.wrtiterDescription}
              />
            </div>
            <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
              {props.reply.replyText}
            </Dark_Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentItem;
