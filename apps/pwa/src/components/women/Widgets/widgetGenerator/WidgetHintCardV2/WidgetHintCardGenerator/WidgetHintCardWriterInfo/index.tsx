import BlueTickIcon from '@assets/icons/blueTick2.svg';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { WidgetHintCardWriterInfoProps } from './types';

const WidgetHintCardWriterInfo = ({ writerSpeciality, writerName, writerIcon }: WidgetHintCardWriterInfoProps) => {
  const { colors } = useTheme();

  return (
    <div className="w-full flex items-center gap-2" dir="rtl">
      <div className="relative min-w-10 min-h-10 max-w-10 max-h-10">
        <CustomImage
          src={writerIcon}
          objectFit="contain"
          // className="rounded-full border-[1px]"
          // style={{ borderColor: colors.PrimaryWoman_Primary }}
        />

        {/* <BlueTickIcon className="absolute bottom-0 -left-1 w-5 h-auto z-10" /> */}
      </div>

      <div className="flex flex-col">
        <Typography scale="Lable" size="Medium" color="Neutral_OnBackground">
          {writerName}
        </Typography>

        <Typography scale="Body" size="Small" color="Surface_Outline">
          {writerSpeciality}
        </Typography>
      </div>
    </div>
  );
};

export default WidgetHintCardWriterInfo;
