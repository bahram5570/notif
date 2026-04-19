'use client';

import ClinicDoctorInfoPage from '@components/pages/nestedRoutes/__clinic__/ClinicDoctorInfoPage';

const ClinicDoctorInfo = (props: { params: { clinicInfo: string; doctorId: string } }) => {
  return <ClinicDoctorInfoPage clinicInfo={props.params.clinicInfo} doctorId={props.params.doctorId} />;
};

export default ClinicDoctorInfo;
