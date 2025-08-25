'use client';

import WomenPageLayout from '@components/women/WomenPageLayout';
import useRoutinTabData from '@hooks/__routinTab__/useRoutinTabData';
import useTheme from '@hooks/useTheme';

import RoutinTabsBtn from './RoutinTabsBtn';
import RoutinTabsContextContainer from './RoutinTabsContextContainer';

const RoutinTabsPage = () => {
  const { colors } = useTheme();
  const { activeTab, handleTabChange } = useRoutinTabData();

  return (
    <WomenPageLayout rightElement="BackButton" rightElementScript="برنامه های امروز">
      <RoutinTabsBtn activeTab={activeTab} handleTabChange={handleTabChange} />
      <div className=" h-[1px] mx-2 my-4" style={{ backgroundColor: colors.Neutral_Surface }} />
      <RoutinTabsContextContainer activeTab={activeTab} />
    </WomenPageLayout>
  );
};

export default RoutinTabsPage;
