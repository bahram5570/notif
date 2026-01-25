import WomenPageLayout from '@components/WomenPageLayout';
import useAnalytics from '@hooks/useAnalytics';

import SignsContainer from '../SignsContainer';
import SignsSkeleton from '../SignsSkeleton';
import TestKitModals from '../TestKitModals';
import useGetData from '../__hooks__/useGetData';

const SignsPage = () => {
  const { isLoading, infoList } = useGetData();
  useAnalytics({ mountTimer_eventName: 'SignsPageTimeSpent' });

  return (
    <WomenPageLayout
      paddingTop={0}
      rightElement="BackButton"
      rightElementScript="نشانه های امروز"
      className="!bg-impo_Neutral_Surface"
      headerClassName="!bg-impo_Neutral_Surface"
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
