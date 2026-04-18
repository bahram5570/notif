import { MainPageLayout } from '@repo/core/components/MainPageLayout';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import DoctorInfo from './DoctorInfo';
import NoComments from './NoComments';
import SpecialistCommentsList from './SpecialistCommentsList';
import SpecialistCommentsSkeleton from './SpecialistCommentsSkeleton';
import useGetData from './__hooks__/useGetData';
import { ClinicDoctorInfoContainerProps } from './type';

const ClinicDoctorInfoContainer = ({ clinicInfo, doctorId }: ClinicDoctorInfoContainerProps) => {
  const { isLoading, doctorData, commentsData } = useGetData({ clinicInfo, drId: doctorId });

  return (
    <MainPageLayout rightElement="BackButton" rightElementScript="متخصص" paddingTop={0}>
      <div className="w-full h-[100dvh] overflow-y-auto pb-10" style={{ paddingTop: HEADER_HEIGHT }}>
        {isLoading && <SpecialistCommentsSkeleton />}

        {!isLoading && doctorData && commentsData && (
          <div className="relative px-4 pb-5 pt-5 z-0">
            <DoctorInfo
              image={doctorData.image}
              lastName={doctorData.lastName}
              firstName={doctorData.firstName}
              speciliaty={doctorData.speciliaty}
              nezamNumber={doctorData.nezamNumber}
            />

            {commentsData.length === 0 && <NoComments />}

            {commentsData.length > 0 && <SpecialistCommentsList commentsData={commentsData} />}
          </div>
        )}
      </div>
    </MainPageLayout>
  );
};

export default ClinicDoctorInfoContainer;
