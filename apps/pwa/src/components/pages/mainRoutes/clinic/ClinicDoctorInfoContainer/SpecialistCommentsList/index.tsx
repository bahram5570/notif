import StarIcon from '@assets/icons/star.svg';
import { SpecialistCommentsGenerator } from '@repo/core/components/clinic';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { SpecialistCommentsListProps } from './types';

const SpecialistCommentsList = ({ commentsData }: SpecialistCommentsListProps) => {
  return (
    <div className="flex flex-col items-end gap-2 pt-7">
      <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
        نظرات کاربران
      </CustomTypography>

      {commentsData.map((item, index) => (
        <div className="w-full flex flex-col items-end p-4 rounded-xl bg-impo_Neutral_Surface" key={index}>
          <div className="flex justify-between w-full pb-2">
            <div className="grid grid-cols-3">
              <CustomTypography fontSize="Title_Small" className="text-impo_Surface_InverseSurface mx-auto">
                {item.rate.toString()}
              </CustomTypography>

              <StarIcon className="w-5 h-auto fill-impo_Yellow" />

              <div className="w-[1px] h-5 m-auto bg-impo_Surface_OutlineVariant" />
            </div>

            <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
              {item.userName}
            </CustomTypography>
          </div>

          <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
            {item.descritpion}
          </CustomTypography>

          <div className="w-full h-[1px] mt-3 mb-1 bg-impo_Neutral_OnBackground opacity-20" />

          <SpecialistCommentsGenerator isPositive={true} scripts={item.positives} />

          <SpecialistCommentsGenerator isPositive={false} scripts={item.negatives} />
        </div>
      ))}
    </div>
  );
};

export default SpecialistCommentsList;
