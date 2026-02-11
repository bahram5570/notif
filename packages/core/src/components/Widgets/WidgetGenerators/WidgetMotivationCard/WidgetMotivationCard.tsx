import { CustomImage } from '../../../ui/CustomImage';
import { CustomTypography } from '../../../ui/CustomTypography';
import { WidgetMotivationCardProps } from './types';

export const WidgetMotivationCard = ({ data }: WidgetMotivationCardProps) => {
  return (
    <div className="w-full px-3 py-2 rounded-xl flex flex-col items-end bg-impo_Neutral_Background">
      <div className="flex gap-2">
        <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
          {data.title}
        </CustomTypography>

        <CustomImage src={data.icon} width={24} height={24} />
      </div>

      <span className="w-full h-[1px] block my-2 bg-impo_Neutral_Surface" />
      <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        {data.description}
      </CustomTypography>
    </div>
  );
};
