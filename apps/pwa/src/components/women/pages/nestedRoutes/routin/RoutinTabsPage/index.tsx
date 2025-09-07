'use client';

import WomenPageLayout from '@components/women/WomenPageLayout';
import useTheme from '@hooks/useTheme';

import RoutinTabsBtn from './RoutinTabsBtn';
import RoutinTabsContextContainer from './RoutinTabsContextContainer';
import RoutinTabsContextSkeleton from './RoutinTabsContextContainer/RoutinTabsContextSkeleton';
import useConfig from './__hooks__/useConfig';
import useRoutinTabData from './__hooks__/useRoutinTabData';

const RoutinTabsPage = () => {
  const { colors } = useTheme();
  const { data, isLoading } = useConfig();
  const { activeTab, handleTabChange } = useRoutinTabData();

  return (
    <WomenPageLayout rightElement="BackButton" rightElementScript={data?.title || ''}>
      {isLoading && !data && <RoutinTabsContextSkeleton />}
      {!isLoading && data && (
        <>
          <RoutinTabsBtn activeTab={activeTab} handleTabChange={handleTabChange} tabsOrder={data?.tabsOrder || []} />
          <div className=" h-[1px] mx-2 my-4" style={{ backgroundColor: colors.Neutral_Surface }} />
          <RoutinTabsContextContainer activeTab={activeTab} tabsOrder={data?.tabsOrder || []} />
        </>
      )}
    </WomenPageLayout>
  );
};

export default RoutinTabsPage;
