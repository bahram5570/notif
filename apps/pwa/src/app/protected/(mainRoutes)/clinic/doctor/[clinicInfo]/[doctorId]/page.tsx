'use client';

import ClinicDoctorInfoContainer from '@components/pages/mainRoutes/clinic/ClinicDoctorInfoContainer';

const ClinicDoctorInfo = (props: { params: { clinicInfo: string; doctorId: string } }) => {
  return <ClinicDoctorInfoContainer clinicInfo={props.params.clinicInfo} doctorId={props.params.doctorId} />;
};

export default ClinicDoctorInfo;
