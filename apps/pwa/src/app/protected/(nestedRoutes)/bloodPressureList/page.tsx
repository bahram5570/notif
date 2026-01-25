'use client';

import WomenPageLayout from '@components/WomenPageLayout';
import BloodPressureListContainer from '@components/pages/nestedRoutes/signs/SignsContainer/SignsLists/BloodPressureListContainer';

import ListSkeleton from './ListSkeleton';
import useGetData from './__hooks__/useGetData';

const BloodPressureList = () => {
  const { initailPressureList, isLoading } = useGetData();
  return (
    <>
      <WomenPageLayout rightElement="BackButton" rightElementScript="تست فشارخون بارداری">
        <>
          {isLoading && <ListSkeleton />}
          {!isLoading && <BloodPressureListContainer bloodPressureList={initailPressureList} />}
        </>
      </WomenPageLayout>
    </>
  );
};

export default BloodPressureList;
