import Dark_Typography from '@components/ui/Dark_Typography';

import WidgetHintCardBookmark from './WidgetHintCardBookmark';
import WidgetHintCardLinkTo from './WidgetHintCardLinkTo';
import WidgetHintCardGeneratorWriterInfo from './WidgetHintCardWriterInfo';
import useIsSeen from './__hooks__/useIsSeen';
import { WidgetHintCardGeneratorProps } from './types';

const WidgetHintCardGenerator = (props: WidgetHintCardGeneratorProps) => {
  const { ref } = useIsSeen({
    id: props.id,
    isSeen: props.isSeen,
    isSelected: props.isSelected,
  });

  return (
    <div
      ref={ref}
      className="w-full h-full flex flex-col gap-3 border-impo_Neutral_Surface"
      style={{ direction: 'ltr' }}
    >
      <WidgetHintCardGeneratorWriterInfo
        writerName={props.writerName}
        writerIcon={props.writerIcon}
        writerSpeciality={props.writerSpeciality}
      />

      <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground w-full">
        {props.text}
      </Dark_Typography>

      <div className="w-full flex items-center gap-2 pt-1 mt-auto">
        <div className="w-fit aspect-square rounded-full border-[1px] border-impo_Surface_OutlineVariant">
          <WidgetHintCardBookmark isBookmarked={props.isBookmarked} id={props.id} />
        </div>

        <WidgetHintCardLinkTo externalLink={props.externalLink} internalLink={props.internalLink} />
      </div>
    </div>
  );
};

export default WidgetHintCardGenerator;
