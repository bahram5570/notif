import RoutinListEmpty from '../RoutinListEmpty';
import RoutinTabSkeleton from '../RoutinTabSkeleton';
import CategoryItem from './CategoryItem';
import useGetCategoriesRoutinData from './__hooks__/useGetCategoriesRoutinData';

const CategoriesRoutin = () => {
  const { data, isLoading } = useGetCategoriesRoutinData();
  const hasData = data && data.items.length > 0;
  return (
    <>
      {isLoading && <RoutinTabSkeleton />}
      {!isLoading && (
        <>
          {!hasData && <RoutinListEmpty />}
          {hasData && (
            <div className="flex flex-col gap-2">
              {data.items.map((item, index) => {
                return <CategoryItem {...item} key={index} />;
              })}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CategoriesRoutin;
