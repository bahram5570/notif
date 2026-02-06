import MainPageLayout from '@components/MainPageLayout';
import { useAnalytics } from '@repo/core/hooks/useAnalytics';

import SignsContainer from '../SignsContainer';
import SignsSkeleton from '../SignsSkeleton';
import TestKitModals from '../TestKitModals';
import useGetData from '../__hooks__/useGetData';

const SignsPage = () => {
  useAnalytics({ mountTimer_eventName: 'SignsPageTimeSpent' });
  const { isLoading, infoList } = useGetData();

  return (
    <MainPageLayout
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
    </MainPageLayout>
  );
};

export default SignsPage;
