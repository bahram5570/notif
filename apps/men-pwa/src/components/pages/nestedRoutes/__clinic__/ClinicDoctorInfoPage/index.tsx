import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { InfiniteScrollContainer } from '@repo/core/components/infiniteScrollContainer';

import { HEADER_HEIGHT } from '@repo/core/constants/app.constants';

import DoctorInfo from './DoctorInfo';
import NoComments from './NoComments';
import SpecialistCommentsList from './SpecialistCommentsList';
import SpecialistCommentsSkeleton from './SpecialistCommentsSkeleton';
import useGetData from './__hooks__/useGetData';
import { ClinicDoctorInfoPageProps } from './type';

const ClinicDoctorInfoPage = ({ clinicInfo, doctorId }: ClinicDoctorInfoPageProps) => {
  const { commentsPagination, doctorData, commentsData, getComments, isCommentsLoading, isPageLoading } = useGetData({
    clinicInfo,
    drId: doctorId,
  });

  return (
    <MainPageLayout rightElement="BackButton" rightElementScript="متخصص" paddingTop={0} paddingBottom={60}>
      <InfiniteScrollContainer
        className="pb-10"
        height={'100dvh'}
        callBack={getComments}
        isLoading={isCommentsLoading}
        pageNo={commentsPagination.pageNo}
        style={{ paddingTop: HEADER_HEIGHT }}
        pageSize={commentsPagination.pageSize}
        totalCount={commentsPagination.totalCount}
      >
        {isPageLoading && <SpecialistCommentsSkeleton />}

        {!isPageLoading && doctorData && commentsData && (
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
      </InfiniteScrollContainer>
    </MainPageLayout>
  );
};

export default ClinicDoctorInfoPage;
