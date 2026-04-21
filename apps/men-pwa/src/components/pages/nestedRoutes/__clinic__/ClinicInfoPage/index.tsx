import { MainPageLayout } from '@repo/core/components/MainPageLayout';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import ClinicInfoSkeleton from './ClinicInfoSkeleton';
import ContentsContainer from './ContentsContainer';
import useGetDataClinicInfo from './__hooks__/useGetDataClinicInfo';
import { ClinicInfoPagePropsType } from './type';

const ClinicInfoPage = ({ clinicInfo }: ClinicInfoPagePropsType) => {
  const { data, isLoading } = useGetDataClinicInfo(clinicInfo);
  return (
    <MainPageLayout rightElement="BackButton" rightElementScript={data?.info.name} paddingTop={HEADER_HEIGHT + 16}>
      {isLoading && <ClinicInfoSkeleton />}
      {!isLoading && data && <ContentsContainer data={data} />}
    </MainPageLayout>
  );
};

export default ClinicInfoPage;
