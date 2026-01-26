import { textShorter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';

import { TopicCardItemPropsType } from './type';

const TopicCardItem = (props: TopicCardItemPropsType) => {
  const onClick = () => {
    props.onLinkHandler(props.id);
  };

  return (
    <div className="glass-card !bg-white/30 dark:!bg-[#2B2B2B60] shadow-sm rounded-3xl p-4 flex flex-col h-full gap-3 relative">
      <div className="flex flex-col items-end gap-2">
        <div className="flex  justify-end items-end w-full">
          <div className="w-10 h-10 rounded-full bg-impo_Surface_SurfaceVariant flex justify-center items-center">
            <CustomImage src={props.icon} height={24} width={24} />
          </div>
        </div>

        <div className="flex flex-col items-end gap-3">
          <Dark_Typography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
            {textShorter(props.title, 35)}
          </Dark_Typography>
          <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
            {textShorter(props.description, 80)}
          </Dark_Typography>
        </div>
      </div>
      <div className="mt-auto">
        <Dark_Button onClick={onClick}>
          <Dark_Typography fontSize="Lable_SmallProminet" className="text-impo_White">
            {props.btnLabel}
          </Dark_Typography>
        </Dark_Button>
      </div>
    </div>
  );
};

export default TopicCardItem;
