import { MainPageLayout } from '@repo/core/components/MainPageLayout';

import ClinicInfoSkeleton from './ClinicInfoSkeleton';
import ContentsContainer from './ContentsContainer';
import useGetDataClinicInfo from './__hooks__/useGetDataClinicInfo';
import { ClinicInfoProps } from './types';

const ClinicInfoContainer = ({ clinicInfo }: ClinicInfoProps) => {
  const { isLoading, data } = useGetDataClinicInfo(clinicInfo);

  return (
    <>
      <MainPageLayout rightElement="BackButton" rightElementScript={data?.info.name} paddingTop={0}>
        {isLoading && <ClinicInfoSkeleton />}
        {!isLoading && data && <ContentsContainer data={data} />}
      </MainPageLayout>
    </>
  );
};

export default ClinicInfoContainer;
