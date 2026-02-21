import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';

import { ExerciseSectionPropsType } from './type';

const ExerciseSection = ({ exercise }: ExerciseSectionPropsType) => {
  return (
    <div className="rounded-xl border border-impo_Grey_200 p-4 flex flex-col gap-2 mt-4">
      <CustomTypography fontSize="Title_Small">تمرین های مخصوص تو</CustomTypography>
      <div className="w-full h-0 border border-impo_Grey_100 rotate-180 mt-4 mb-3" />
      {exercise.map((exercise, index) => (
        <div key={index} className="bg-impo_Purple_100 rounded-2xl  px-4  pt-4">
          <div className="grid grid-cols-[1fr_120px]   items-stretch">
            <div className="flex flex-col gap-1 min-w-0 pb-4">
              <CustomTypography fontSize="Lable_Medium" className="whitespace-nowrap">
                {exercise.title}
              </CustomTypography>

              <CustomTypography fontSize="Body_Medium">{exercise.description}</CustomTypography>
            </div>

            <div
              className={`relative w-[120px]  overflow-hidden flex items-end ${exercise.title.length > 31 ? 'mt-4' : 'mt-0'}`}
            >
              <CustomImage
                src={exercise.image}
                alt={exercise.title}
                className="h-full w-full object-fill"
                width={120}
                height={0}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExerciseSection;
