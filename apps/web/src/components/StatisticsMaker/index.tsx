'use client';

import { useSystem } from '@repo/core/hooks/useSystem';

import StatisticsDesktopGenerator from './StatisticsDesktopGenerator';
import StatisticsMobileGenerator from './StatisticsMobileGenerator';
import { StatisticsMakerTypes } from './types';

const StatisticsMaker = ({ list }: StatisticsMakerTypes) => {
  const { breakPoint } = useSystem();

  return (
    <div className="relative w-full flex py-8">
      {breakPoint.laptop && <StatisticsMobileGenerator list={list} />}
      {breakPoint.desktop && <StatisticsDesktopGenerator list={list} />}
    </div>
  );
};

export default StatisticsMaker;
