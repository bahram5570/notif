import { CustomTypography } from '../../../../ui/CustomTypography';
import WidgetHintCardBookmark from './WidgetHintCardBookmark';
import WidgetHintCardLinkTo from './WidgetHintCardLinkTo';
import WidgetHintCardGeneratorWriterInfo from './WidgetHintCardWriterInfo';
import useIsSeen from './__hooks__/useIsSeen';
import { WidgetHintCardGeneratorProps } from './types';

const WidgetHintCardGenerator = (props: WidgetHintCardGeneratorProps) => {
  const { ref } = useIsSeen({ isSeen: props.isSeen, minReadingDuration: props.minReadingDuration, id: props.id });

  return (
    <div
      ref={ref}
      className={`w-full flex flex-col items-end gap-1 border-impo_Neutral_Surface ${props.isLastChild ? '' : 'border-b-[1px] pb-3'}`}
    >
      <WidgetHintCardGeneratorWriterInfo
        writerName={props.writerName}
        writerIcon={props.writerIcon}
        writerSpeciality={props.writerSpeciality}
      />

      <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        {props.text}
      </CustomTypography>

      <div className="w-full flex items-center gap-2">
        <WidgetHintCardBookmark isBookmarked={props.isBookmarked} id={props.id} />
        <WidgetHintCardLinkTo externalLink={props.externalLink} internalLink={props.internalLink} />
      </div>
    </div>
  );
};

export default WidgetHintCardGenerator;
