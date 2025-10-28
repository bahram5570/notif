import ChatbotBg from '@assets/icons/bgChatbot.svg';
import chatbotJson from '@assets/lottie/chatbot.json';
import { textShorter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';
import { LottieJson } from '@lib/LottieJson';

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
      style={{ background: colors.Neutral_OnBackground }}
      // onClick={onClick}
    >
      <ChatbotBg className="rounded-3xl absolute top-0 left-0" />
      <div className="flex flex-col items-end gap-1 py-10 px-4">
        <div className="flex flex-row-reverse justify-start items-center w-full gap-2">
          <CustomImage src={props.icon} height={40} width={40} />
          <Typography scale="Title" size="Small" color="White">
            {textShorter(props.title, 35)}
          </Typography>
        </div>

        <Typography scale="Body" size="Small" color="Neutral_Surface">
          {textShorter(props.description, 80)}
        </Typography>
      </div>
    </div>
  );
};

export default SuggestedTopicCard;
