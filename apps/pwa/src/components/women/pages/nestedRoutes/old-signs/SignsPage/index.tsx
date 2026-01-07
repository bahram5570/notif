import WomenPageLayout from '@components/women/WomenPageLayout';
import useAnalytics from '@hooks/useAnalytics';

import SignsContainer from '../SignsContainer';
import SignsSkeleton from '../SignsSkeleton';
import TestKitModals from '../TestKitModals';
import useGetData from '../__hooks__/useGetData';

const SignsPage = () => {
  useAnalytics({ mountTimer_eventName: 'SignsPageTimeSpent' });
  const { isLoading, infoList } = useGetData();

  return (
    <WomenPageLayout
      paddingTop={0}
      rightElement="BackButton"
      rightElementScript="نشانه های امروز"
      headerClassName="bg-impo_Surface_SurfaceVariant"
    >
      <>
        {isLoading && !infoList && <SignsSkeleton />}
        {infoList && (
          <>
            <SignsContainer infoList={infoList} />
            <TestKitModals />
          </>
        )}
      </>
    </WomenPageLayout>
  );
};

export default SignsPage;
