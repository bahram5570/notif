import ChatbotBg from '@assets/icons/bgChatbot.svg';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';

import { SuggestedTopicCardPropsType } from './type';

const SuggestedTopicCard = (props: SuggestedTopicCardPropsType) => {
  const { colors } = useTheme();
  const { pageNavigationHandler } = usePageNavigationLoading();

  // const onClick = () => {
  //   pageNavigationHandler({
  //     showProgressBar: true,
  //     id: `chatbot-${props.id}`,
  //     linkTo: `/protected/note/addNote`,
  //   });
  // };

  return (
    <div
      className=" rounded-3xl  flex flex-col gap-3 relative"
      style={{ background: colors.Surface_Scrim }}
      // onClick={onClick}
    >
      <ChatbotBg className="rounded-3xl absolute top-0 left-0" />
      <div className="flex flex-col items-end gap-1 py-10 px-4">
        <div className="flex flex-row-reverse justify-start items-start w-full gap-2">
          <CustomImage src={props.icon} />
          <Typography scale="Title" size="Small" color="White">
            {props.title}
          </Typography>
        </div>

        <Typography scale="Body" size="Small" color="Neutral_Surface">
          {props.description}
        </Typography>
      </div>
    </div>
  );
};

export default SuggestedTopicCard;
