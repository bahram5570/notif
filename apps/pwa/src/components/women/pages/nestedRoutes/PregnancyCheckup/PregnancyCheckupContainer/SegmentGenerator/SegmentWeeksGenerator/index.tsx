import SegmentWeekItemGenerator from './SegmentWeekItemGenerator';
import { WeekGeneratorPropsType } from './type';

const SegmentWeeksGenerator = ({ weeks }: WeekGeneratorPropsType) => {
  return (
    <div className="divide-y-[1px] px-3 rounded-br-2xl rounded-bl-2xl bg-impo_Neutral_Background">
      {weeks.map((week, index) => {
        return <SegmentWeekItemGenerator {...week} key={index} />;
      })}
    </div>
  );
};

export default SegmentWeeksGenerator;
