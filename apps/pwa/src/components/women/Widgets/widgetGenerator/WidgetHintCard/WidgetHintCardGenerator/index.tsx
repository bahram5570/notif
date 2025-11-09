import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import WidgetHintCardBookmark from './WidgetHintCardBookmark';
import WidgetHintCardLinkTo from './WidgetHintCardLinkTo';
import WidgetHintCardGeneratorWriterInfo from './WidgetHintCardWriterInfo';
import useIsSeen from './__hooks__/useIsSeen';
import { WidgetHintCardGeneratorProps } from './types';

const WidgetHintCardGenerator = (props: WidgetHintCardGeneratorProps) => {
  const { colors } = useTheme();
  const { ref } = useIsSeen({
    id: props.id,
    isSeen: props.isSeen,
    isSelected: props.isSelected,
    minReadingDuration: props.minReadingDuration,
  });

  return (
    <div
      ref={ref}
      className="w-full h-full flex flex-col gap-1"
      style={{ borderColor: colors.Neutral_Surface, direction: 'ltr' }}
    >
      <WidgetHintCardGeneratorWriterInfo
        writerName={props.writerName}
        writerIcon={props.writerIcon}
        writerSpeciality={props.writerSpeciality}
      />

      <Typography scale="Body" size="Medium" color="Neutral_OnBackground" style={{ direction: 'rtl', width: '100%' }}>
        {props.text}
      </Typography>

      <div className="w-full flex items-center gap-2 mt-auto">
        <div
          className="w-fit aspect-square rounded-full border-[1px]"
          style={{ borderColor: colors.Surface_OutlineVariant }}
        >
          <WidgetHintCardBookmark isBookmarked={props.isBookmarked} id={props.id} />
        </div>

        <WidgetHintCardLinkTo externalLink={props.externalLink} internalLink={props.internalLink} />
      </div>
    </div>
  );
};

export default WidgetHintCardGenerator;
