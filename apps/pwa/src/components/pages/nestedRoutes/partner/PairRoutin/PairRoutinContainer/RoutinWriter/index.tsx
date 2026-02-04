import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { RoutinWriterProps } from './types';

const RoutinWriter = ({ writerName, writerSpeciality, writerIcon }: RoutinWriterProps) => {
  return (
    <div className="w-full flex items-center justify-end gap-[10px]">
      <div className="flex flex-col items-end">
        <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
          {writerName}
        </CustomTypography>

        <CustomTypography fontSize="Body_Small" className="text-impo_Surface_Outline">
          {writerSpeciality}
        </CustomTypography>
      </div>

      <div className="relative w-10 h-10 min-w-10 min-h-10 ">
        <div className="w-full h-full rounded-full overflow-hidden">
          <CustomImage src={writerIcon} />
        </div>
      </div>
    </div>
  );
};

export default RoutinWriter;
