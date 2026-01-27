import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import { WidgetMotivationCardProps } from './types';

const WidgetMotivationCard = ({ data }: WidgetMotivationCardProps) => {
  return (
    <div className="w-full px-3 py-2 rounded-xl flex flex-col items-end bg-impo_Neutral_Background">
      <div className="flex gap-2">
        <Dark_Typography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
          {data.title}
        </Dark_Typography>

        <CustomImage src={data.icon} width={24} height={24} />
      </div>

      <span className="w-full h-[1px] block my-2 bg-impo_Neutral_Surface" />
      <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        {data.description}
      </Dark_Typography>
    </div>
  );
};

export default WidgetMotivationCard;
