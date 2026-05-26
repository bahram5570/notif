import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';

const useSelectedTest = () => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const linkToHandler = (i: number) => {
    pageNavigationHandler({
      navigationType: 'logo',
      id: 'ovulationHistoryCardDetails',
      linkTo: `/protected/ovulationHistoryCardViewAll/${i}`,
    });
  };

  return { linkToHandler };
};

export default useSelectedTest;
