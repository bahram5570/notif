import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import { ExerciseSectionPropsType } from './type';

const ExerciseSection = ({ exercise }: ExerciseSectionPropsType) => {
  return (
    <div className="rounded-xl border border-impo_Grey_200 p-4 flex flex-col gap-2 mt-4">
      <CustomTypography fontSize="Title_Small">تمرین های مخصوص تو</CustomTypography>
      <div className="w-full h-0 border border-impo_Grey_100 rotate-180 mt-4 mb-3" />
      {exercise.map((exercise, index) => (
        <div key={index} className="bg-impo_Purple_100 rounded-2xl  px-4  pt-4">
          <CustomTypography fontSize="Lable_Medium">{exercise.title}</CustomTypography>
          <div className="grid grid-cols-[1fr_120px] gap-1 lg:gap-2">
            <div className="flex flex-col gap-1 pb-4">
              <CustomTypography fontSize="Body_Medium">{exercise.description}</CustomTypography>
            </div>

            <div className="relative w-full aspect-square  self-end justify-self-end">
              <CustomImage src={exercise.image} alt={exercise.title} fill />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExerciseSection;
