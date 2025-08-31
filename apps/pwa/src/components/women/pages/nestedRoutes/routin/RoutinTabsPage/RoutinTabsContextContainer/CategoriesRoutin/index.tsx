import CategoryItem from './CategoryItem';
import useGetCategoriesRoutinData from './__hooks__/useGetCategoriesRoutinData';

const CategoriesRoutin = () => {
  const { data, isLoading } = useGetCategoriesRoutinData();
  const hasData = data && data.items.length > 0;
  return (
    <>
      {!hasData && <></>}
      {hasData && (
        <div className="flex flex-col gap-2">
          {data.items.map((item, index) => {
            return <CategoryItem {...item} key={index} />;
          })}
        </div>
      )}
    </>
  );
};

export default CategoriesRoutin;
