import StarIcon from '@assets/icons/star.svg';

import Dark_Typography from '@components/ui/Dark_Typography';

import SpecialistCommentsGenerator from './SpecialistCommentsGenerator';
import { SpecialistCommentsListProps } from './types';

const SpecialistCommentsList = ({ commentsData }: SpecialistCommentsListProps) => {
  return (
    <div className="flex flex-col items-end gap-2 pt-7">
      <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
        نظرات کاربران
      </Dark_Typography>

      {commentsData.map((item, index) => (
        <div className="w-full flex flex-col items-end p-4 rounded-xl bg-impo_Neutral_Surface" key={index}>
          <div className="flex justify-between w-full pb-2">
            <div className="grid grid-cols-3">
              <Dark_Typography fontSize="Title_Small" className="text-impo_Surface_InverseSurface mx-auto">
                {item.rate.toString()}
              </Dark_Typography>

              <StarIcon className="w-5 h-auto fill-impo_Yellow" />

              <div className="w-[1px] h-5 m-auto bg-impo_Surface_OutlineVariant" />
            </div>

            <Dark_Typography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
              {item.userName}
            </Dark_Typography>
          </div>

          <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
            {item.descritpion}
          </Dark_Typography>

          <div className="w-full h-[1px] mt-3 mb-1 bg-impo_Neutral_OnBackground opacity-20" />

          <SpecialistCommentsGenerator isPositive={true} scripts={item.positives} />

          <SpecialistCommentsGenerator isPositive={false} scripts={item.negatives} />
        </div>
      ))}
    </div>
  );
};

export default SpecialistCommentsList;
