import RoutinCard from '@components/__routin__/RoutinCard';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { data } from '../../../constants';

const CategoryItem = () => {
  const { colors } = useTheme();

  return (
    <>
      <div className="flex flex-col gap-2 px-5 justify-end items-end">
        <Typography scale="Title" size="Small" color="Neutral_OnBackground">
          روتین پوست
        </Typography>
        <div className=" overflow-x-auto overflow-y-hidden flex flex-row-reverse  gap-3 py-4 max-w-full">
          {data.map((item, index) => {
            const hasOneItem = data.length === 1;
            return (
              <div className="flex flex-row w-full" key={index}>
                <RoutinCard data={item} showDescription={false} className={hasOneItem ? 'w-full' : 'w-80'} />
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
