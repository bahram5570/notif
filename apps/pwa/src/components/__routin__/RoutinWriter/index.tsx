import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import { WidgetRoutinWriterProps } from './type';

const RoutinWriter = ({ writerIcon, writerName, writerSpeciality }: WidgetRoutinWriterProps) => {
  return (
    <div className="w-full flex items-center justify-end gap-[10px]">
      <div className="flex flex-col items-end">
        <Dark_Typography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
          {writerName}
        </Dark_Typography>

        <Dark_Typography fontSize="Body_Small" className="text-impo_Surface_Outline">
          {writerSpeciality}
        </Dark_Typography>
      </div>

      <div className="relative w-10 h-10 min-w-10 min-h-10 rounded-full">
        <CustomImage src={writerIcon} />
      </div>
    </div>
  );
};

export default RoutinWriter;
