import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';

import { WidgetRoutinWriterProps } from './type';

const RoutinWriter = ({ writerIcon, writerName, writerSpeciality }: WidgetRoutinWriterProps) => {
  return (
    <div className="w-full flex items-center justify-end gap-[10px]">
      <div className="flex flex-col items-end">
        <Typography scale="Lable" size="Medium">
          {writerName}
        </Typography>

        <Typography scale="Body" size="Small" color="Surface_Outline">
          {writerSpeciality}
        </Typography>
      </div>

      <div className="relative w-10 h-10 min-w-10 min-h-10 rounded-full">
        <CustomImage src={writerIcon} />
      </div>
    </div>
  );
};

export default RoutinWriter;
