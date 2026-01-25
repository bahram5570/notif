import { colorFormatConverter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import SegmentWeeksGenerator from './SegmentWeeksGenerator';
import { SegmentGeneratorPropsType } from './type';

const SegmentGenerator = (props: SegmentGeneratorPropsType) => {
  return (
    <div className=" mt-2">
      <div
        style={{
          background: colorFormatConverter(props.backgroundColor),
        }}
        className="flex justify-between items-center px-3 rounded-tr-2xl rounded-tl-2xl"
      >
        <CustomImage src={props.image} />
        <div className="flex flex-col justify-end items-end pr-2">
          <Dark_Typography
            fontSize="Lable_LargeProminet"
            style={{ color: colorFormatConverter(props.foregroundColor) }}
          >
            {props.title}
          </Dark_Typography>
          <Dark_Typography fontSize="Lable_LargeProminet" className="text-impo_Black">
            {props.subtitle}
          </Dark_Typography>
        </div>
      </div>
      <SegmentWeeksGenerator weeks={props.weeks} />
    </div>
  );
};

export default SegmentGenerator;
