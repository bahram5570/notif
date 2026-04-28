import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';

const useShareExperiencePageNo = (id: string) => {
  const { newQuery, updateQuery, getQuery } = useCustomReactQuery(['pageNo ' + id]);
  const pageNoInfo = getQuery<{ pageNo: number }>({ queryKey: ['pageNo ' + id] });

  if (!pageNoInfo) {
    newQuery({ queryKey: ['pageNo ' + id], payload: { pageNo: 0 } });
  }

  const updatePageNo = (pageNo: number) => {
    updateQuery({ queryKey: ['pageNo ' + id], payload: { pageNo } });
  };

  return { pageNoInfo, updatePageNo };
};

export default useShareExperiencePageNo;
