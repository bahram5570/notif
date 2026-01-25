import RoutinCard from '@components/__routin__/RoutinCard';
import CustomSlider from '@components/ui/CustomSlider';
import Dark_Typography from '@components/ui/Dark_Typography';

import { data } from '../../../constants';
import { CategoryItemPropsType } from './type';

const CategoryItem = ({ categoryTitle, programs }: CategoryItemPropsType) => {
  return (
    <>
      <div className="flex flex-col gap-2 px-5 justify-end items-end">
        <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          {categoryTitle}
        </Dark_Typography>

        <CustomSlider gap={12}>
          {programs.map((program, index) => {
            const hasOneItem = data.length === 1;
            return (
              <div className="flex flex-row w-full" key={index}>
                <RoutinCard data={program} showDescription={false} className={hasOneItem ? 'w-full' : 'w-80'} />
              </div>
            );
          })}
        </CustomSlider>
      </div>
      <div className=" h-[1px] mx-2 my-4 bg-impo_Neutral_Surface" />
    </>
  );
};

export default CategoryItem;
