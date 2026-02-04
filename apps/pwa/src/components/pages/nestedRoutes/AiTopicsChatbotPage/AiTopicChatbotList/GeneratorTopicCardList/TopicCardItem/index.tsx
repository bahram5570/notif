import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { textShorter } from '@repo/core/utils/scripts';

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
            <CustomImage src={props.icon} className="min-w-6 min-h-6 " />
          </div>
        </div>

        <div className="flex flex-col items-end gap-3">
          <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
            {textShorter(props.title, 35)}
          </CustomTypography>
          <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
            {textShorter(props.description, 80)}
          </CustomTypography>
        </div>
      </div>
      <div className="mt-auto">
        <CustomButton onClick={onClick}>
          <CustomTypography fontSize="Lable_SmallProminet" className="text-impo_White">
            {props.btnLabel}
          </CustomTypography>
        </CustomButton>
      </div>
    </div>
  );
};

export default TopicCardItem;
