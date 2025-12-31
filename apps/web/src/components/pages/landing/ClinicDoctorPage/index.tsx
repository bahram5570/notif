import HeaderFooterContainer from '@components/HeaderFooterContainer';

import DoctorBanner from './DoctorBanner';
import DoctorComments from './DoctorComments';
import DoctorHeading from './DoctorHeading';
import DoctorVisitAction from './DoctorVisitAction';
import DrBio from './DrBio';
import { DoctorInfoTypes } from './types';

const ClinicDoctorPage = (props: DoctorInfoTypes) => {
  return (
    <HeaderFooterContainer>
      <div className="pt-[57px] md:mt-12 landing_container">
        <DoctorHeading bioImage={props.bioImage} name={props.name} nezam={props.nezam} speciality={props.speciality} />
        <DrBio
          clinicPrice={props.clinicPrice}
          rate={props.rate}
          ticketCount={props.ticketCount}
          htmlDescription={props.htmlDescription}
          isActive={props.isActive}
        />
        <DoctorComments comments={props.comment} />
        <DoctorBanner bannerId={props.banner} />
        <DoctorVisitAction isActive={props.isActive} />
      </div>
    </HeaderFooterContainer>
  );
};

export default ClinicDoctorPage;
