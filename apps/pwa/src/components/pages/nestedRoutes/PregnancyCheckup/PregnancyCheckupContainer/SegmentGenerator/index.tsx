import { CustomImage_NEW } from '@repo/core/components/ui/CustomImage_NEW';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { colorFormatConverter } from '@repo/core/utils/scripts';

import SegmentWeeksGenerator from './SegmentWeeksGenerator';
import { SegmentGeneratorPropsType } from './type';

const SegmentGenerator = (props: SegmentGeneratorPropsType) => {
  return (
    <div className="mt-4">
      <div
        style={{
          background: colorFormatConverter(props.backgroundColor),
        }}
        className="flex justify-between items-center px-3 rounded-tr-2xl rounded-tl-2xl"
      >
        <CustomImage_NEW src={props.image} width={72} height={72} />

        <div className="flex flex-col justify-end items-end pr-2">
          <CustomTypography
            fontSize="Lable_LargeProminet"
            style={{ color: colorFormatConverter(props.foregroundColor) }}
          >
            {props.title}
          </CustomTypography>
          <CustomTypography fontSize="Lable_LargeProminet" className="text-impo_Black">
            {props.subtitle}
          </CustomTypography>
        </div>
      </div>
      <SegmentWeeksGenerator weeks={props.weeks} />
    </div>
  );
};

export default SegmentGenerator;
