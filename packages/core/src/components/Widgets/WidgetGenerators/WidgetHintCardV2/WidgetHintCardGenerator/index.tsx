import PatternIcon from '@assets/shared/icons/hintCardPattern.svg';

import { CustomImage } from '../../../../ui/CustomImage';
import { CustomTypography } from '../../../../ui/CustomTypography';
import WidgetHintCardHeading from './WidgetHintCardHeading';
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
      className={`relative w-full h-full flex items-start gap-2 p-4 rounded-2xl overflow-hidden ${props.background}`}
    >
      <div className="absolute -top-[40%] bottom-[10%] -right-[10%] aspect-square pointer-events-none opacity-70 z-0">
        <PatternIcon className="w-full h-auto" />
      </div>

      <div className="relative w-14 min-w-14 z-10">
        <CustomImage src={props.writerIcon} objectFit="contain" />
      </div>

      <div className="relative w-full h-full z-10">
        <WidgetHintCardHeading
          id={props.id}
          writerName={props.writerName}
          externalLink={'props.externalLink'}
          internalLink={props.internalLink}
          isBookmarked={props.isBookmarked}
          writerSpeciality={props.writerSpeciality}
        />

        <CustomTypography
          fontSize="Body_Medium"
          className="relative text-impo_Neutral_OnBackground dark:text-impo_Neutral_Background w-full z-10"
        >
          {props.text}
        </CustomTypography>
      </div>
    </div>
  );
};

export default WidgetHintCardGenerator;
