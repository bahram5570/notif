import RoutinCard from '@components/__routin__/RoutinCard';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { data } from '../../../constants';
import { CategoryItemPropsType } from './type';

const CategoryItem = ({ categoryTitle, programs }: CategoryItemPropsType) => {
  const { colors } = useTheme();

  return (
    <>
      <div className="flex flex-col gap-2 px-5 justify-end items-end">
        <Typography scale="Title" size="Small" color="Neutral_OnBackground">
          {categoryTitle}
        </Typography>
        <div className=" overflow-x-auto overflow-y-hidden flex flex-row-reverse  gap-3 py-4 max-w-full">
          {programs.map((program, index) => {
            const hasOneItem = data.length === 1;
            return (
              <div className="flex flex-row w-full" key={index}>
                <RoutinCard data={program} showDescription={false} className={hasOneItem ? 'w-full' : 'w-80'} />
              </div>
            );
          })}
        </div>
      </div>
      <div className=" h-[1px] mx-2 my-4" style={{ backgroundColor: colors.Neutral_Surface }} />
    </>
  );
};

export default CategoryItem;
