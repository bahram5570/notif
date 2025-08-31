import RoutinWriter from '@components/__routin__/RoutinWriter';
import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import CommentRate from './CommentRate';
import { CommentItemPropsType } from './type';

const CommentItem = (props: CommentItemPropsType) => {
  const { colors } = useTheme();

  return (
    <div className=" rounded-xl" style={{ backgroundColor: colors.Surface_SurfaceVariant }}>
      <div className="px-3 py-4 flex flex-col justify-end items-end gap-4">
        <div className="flex flex-row-reverse justify-end items-center gap-2">
          <CustomImage src={props.imageUrl} width={40} height={40} />
          <div className="flex flex-col items-end gap-1">
            <Typography scale="Body" size="Small">
              {props.username}
            </Typography>
            {props.rate > 0 && <CommentRate rate={props.rate} />}
          </div>
        </div>
        <Typography scale="Body" size="Small">
          {props.commentText}
        </Typography>
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
            <Typography scale="Body" size="Small">
              {props.reply.replyText}
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentItem;
