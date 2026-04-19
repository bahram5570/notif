import { ClinicTicketGenerator } from '@repo/core/components/clinic';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { ACTIVE_TICKETS_LIST_QUERY_NAME } from './constants';
import { ActiveTicketsHeadingProps } from './types';

const ActiveTicketsHeading = ({ activeTicketsOneTitle, activeTicketsMore, tickets }: ActiveTicketsHeadingProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();

  const openHandler = () => {
    newQueryParamsHandler({ [ACTIVE_TICKETS_LIST_QUERY_NAME]: 'true' });
  };

  const isMoreThanOne = tickets.length > 1;
  const hasTicket = tickets.length > 0;
  const firstTicket = tickets[0];

  return (
    <>
      {hasTicket && (
        <div className="w-full flex flex-col items-end gap-2 pb-7">
          <div className="w-full flex flex-row-reverse items-center justify-between">
            <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
              {activeTicketsOneTitle}
            </CustomTypography>

            {isMoreThanOne && (
              <CustomButton
                onClick={openHandler}
                fontSize="Lable_Medium"
                navigationLoadingId="ActiveTicketsHeading"
                className="!w-fit !h-8  !bg-impo_PrimaryMan_PrimaryContainerMan !border-impo_PrimaryMan_PrimaryContainerMan !text-impo_PrimaryMan_PrimaryMan"
              >
                {activeTicketsMore}
              </CustomButton>
            )}
          </div>

          <ClinicTicketGenerator
            stylingTypes="heading"
            rate={firstTicket.rate}
            text={firstTicket.text}
            state={firstTicket.state}
            drName={firstTicket.drName}
            drImage={firstTicket.drImage}
            ticketId={firstTicket.ticketId}
            fileName={firstTicket.fileName}
            ticketType={firstTicket.ticketType}
            createTime={firstTicket.createTime}
            drSpeciality={firstTicket.drSpeciality}
          />
        </div>
      )}
    </>
  );
};

export default ActiveTicketsHeading;
