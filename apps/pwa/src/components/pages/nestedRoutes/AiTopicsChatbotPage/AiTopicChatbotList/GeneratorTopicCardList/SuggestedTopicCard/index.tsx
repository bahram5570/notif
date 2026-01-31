import ChatbotBg from '@assets/icons/bgChatbot.svg';
import { textShorter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import { SuggestedTopicCardPropsType } from './type';

const SuggestedTopicCard = (props: SuggestedTopicCardPropsType) => {
  const onClick = () => {
    props.onLinkHandler(props.id);
  };
  return (
    <div
      className=" rounded-3xl  flex flex-col gap-3 relative h-[170px] bg-impo_Neutral_OnBackground"
      onClick={onClick}
    >
      <ChatbotBg className="rounded-3xl absolute top-0 left-0" />
      <div className="flex flex-col items-end gap-4 py-10 px-4">
        <div className="flex flex-row-reverse justify-start items-center w-full gap-2">
          <div className="w-10 h-10 rounded-full bg-impo_Surface_OnSurfaceVariant flex justify-center items-center">
            <CustomImage src={props.icon} className="min-w-6 min-h-6 " />
          </div>

          <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_Background">
            {textShorter(props.title, 33)}
          </Dark_Typography>
        </div>
        <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_Surface">
          {textShorter(props.description, 80)}
        </Dark_Typography>
      </div>
    </div>
  );
};

export default SuggestedTopicCard;
