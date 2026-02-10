'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';

import BloodSugerListContainer from '@components/pages/nestedRoutes/signs/SignsContainer/SignsLists/BloodSugerListContainer';

import ListSkeleton from '../bloodPressureList/ListSkeleton';
import useGetData from './__hooks__/useGetData';

const BloodSugerList = () => {
  const { initailBloodSugerList, isLoading } = useGetData();

  return (
    <>
      <MainPageLayout rightElement="BackButton" rightElementScript="تست دیابت بارداری">
        <>
          {isLoading && <ListSkeleton />}
          {!isLoading && <BloodSugerListContainer bloodSugerList={initailBloodSugerList} />}
        </>
      </MainPageLayout>
    </>
  );
};

export default BloodSugerList;
