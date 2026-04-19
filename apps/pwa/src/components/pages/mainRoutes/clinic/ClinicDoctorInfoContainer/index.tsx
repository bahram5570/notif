import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { InfiniteScrollContainer } from '@repo/core/components/infiniteScrollContainer';
import { CustomButton } from '@repo/core/components/ui/CustomButton';

import { SHOW_QUESTION_BTN } from '@constants/app.constants';
import { HEADER_HEIGHT, MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import DoctorInfo from './DoctorInfo';
import NoComments from './NoComments';
import SpecialistCommentsList from './SpecialistCommentsList';
import SpecialistCommentsSkeleton from './SpecialistCommentsSkeleton';
import useGetData from './__hooks__/useGetData';
import { SELECTED_DOCTOR } from './constants';
import { ClinicDoctorInfoContainerProps } from './type';

const ClinicDoctorInfoContainer = ({ clinicInfo, doctorId }: ClinicDoctorInfoContainerProps) => {
  const { getQueryParams } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const showQuestionBtn = getQueryParams(SHOW_QUESTION_BTN) !== null;

  const { getComments, isPageLoading, isCommentsLoading, doctorData, commentsData, commentsPagination } = useGetData({
    clinicInfo,
    drId: doctorId,
    isRedirected: showQuestionBtn,
  });

  const submitHandler = () => {
    pageNavigationHandler({
      id: clinicInfo,
      showProgressBar: false,
      linkTo: `/protected/clinic/doctor/${clinicInfo}?${SELECTED_DOCTOR}=${doctorId}`,
    });
  };

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

            {showQuestionBtn && (
              <div
                style={{ maxWidth: MAX_SCREEN_WIDTH }}
                className=" fixed left-0 right-0 mx-auto bottom-0 flex flex-col w-full gap-2 p-4 bg-impo_Neutral_Background"
              >
                <CustomButton isLoading={isPageLoading} onClick={submitHandler} id="Clinic_Payment_Press">
                  ارسال سوال
                </CustomButton>
              </div>
            )}
          </div>
        )}
      </InfiniteScrollContainer>
    </MainPageLayout>
  );
};

export default ClinicDoctorInfoContainer;
