'use client';

import ClinicInfoPage from '@components/pages/nestedRoutes/__clinic__/ClinicInfoPage';

const ClinicInfo = (props: { params: { clinicInfo: string } }) => {
  return <ClinicInfoPage clinicInfo={props.params.clinicInfo} />;
};

export default ClinicInfo;
