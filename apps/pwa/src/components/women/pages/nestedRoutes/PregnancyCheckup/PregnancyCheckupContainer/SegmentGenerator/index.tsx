import { colorFormatConverter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';

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
          <Typography scale="Lable" size="LargeProminet" style={{ color: colorFormatConverter(props.foregroundColor) }}>
            {props.title}
          </Typography>
          <Typography scale="Body" size="Medium" color="Neutral_OnBackground">
            {props.subtitle}
          </Typography>
        </div>
      </div>
      <SegmentWeeksGenerator weeks={props.weeks} />
    </div>
  );
};

export default SegmentGenerator;
