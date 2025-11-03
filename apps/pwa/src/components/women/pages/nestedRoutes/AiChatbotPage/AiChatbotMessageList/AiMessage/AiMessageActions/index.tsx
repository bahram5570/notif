import CopyIcon from '@assets/icons/Copy-1.svg';
import DislikeFillIcon from '@assets/icons/Dislike-fill.svg';
import DislikeIcon from '@assets/icons/Dislike.svg';
import LikeIcon from '@assets/icons/Like-1.svg';
import LikeFillIcon from '@assets/icons/Like-fill.svg';

import useTheme from '@hooks/useTheme';

import useCopy from './__hooks__/useCopy';
import useDisLikeMessage from './__hooks__/useDisLikeMessage';
import useLikeMessage from './__hooks__/useLikeMessage';
import { AiMessageActionsPropsType } from './type';

const AiMessageActions = (props: AiMessageActionsPropsType) => {
  const { colors } = useTheme();
  const { copyToClipboard } = useCopy();
  const { likeMessageHandler } = useLikeMessage({ messageId: props.messageId });
  const { disLikeMessageHandler } = useDisLikeMessage(props.messageId);

  const onCopyClick = () => {
    copyToClipboard(props.text);
  };

  const onLikeClick = () => {
    likeMessageHandler();
  };

  const onDisLikeClick = () => {
    disLikeMessageHandler();
  };

  return (
    <div className="flex  flex-row-reverse justify-end gap-4 ">
      {props.like ? (
        <LikeFillIcon className="w-[22px] h-[22px]" style={{ fill: colors.Grey_900 }} onClick={onLikeClick} />
      ) : (
        <LikeIcon className="w-[22px] h-[22px]" style={{ fill: colors.Grey_900 }} onClick={onLikeClick} />
      )}

      {props.dislike ? (
        <DislikeFillIcon className="w-[22px] h-[22px]" style={{ fill: colors.Grey_900 }} onClick={onDisLikeClick} />
      ) : (
        <DislikeIcon className="w-[22px] h-[22px]" style={{ fill: colors.Grey_900 }} onClick={onDisLikeClick} />
      )}

      <CopyIcon className="w-5 h-5" style={{ fill: colors.Grey_900 }} onClick={onCopyClick} />
    </div>
  );
};

export default AiMessageActions;
