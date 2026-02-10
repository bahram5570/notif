'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';

import BloodPressureListContainer from '@components/pages/nestedRoutes/signs/SignsContainer/SignsLists/BloodPressureListContainer';

import ListSkeleton from './ListSkeleton';
import useGetData from './__hooks__/useGetData';

const BloodPressureList = () => {
  const { initailPressureList, isLoading } = useGetData();
  return (
    <>
      <MainPageLayout rightElement="BackButton" rightElementScript="تست فشارخون بارداری">
        <>
          {isLoading && <ListSkeleton />}
          {!isLoading && <BloodPressureListContainer bloodPressureList={initailPressureList} />}
        </>
      </MainPageLayout>
    </>
  );
};

export default BloodPressureList;
