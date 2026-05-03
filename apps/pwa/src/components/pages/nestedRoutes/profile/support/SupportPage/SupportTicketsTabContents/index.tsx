import { InfiniteScrollContainer } from '@repo/core/components/infiniteScrollContainer';

import { PAGE_SIZE } from '@repo/core/constants/app.constants';

import SupportTicketGenerator from './SupportTicketGenerator';
import { SupportTicketsTabContentsTypes } from './types';

const SupportTicketsTabContents = ({
  ticketsPageNoHandler,
  totalCount,
  isLoading,
  pageNo,
  items,
}: SupportTicketsTabContentsTypes) => {
  return (
    <>
      <InfiniteScrollContainer
        pageNo={pageNo}
        pageSize={PAGE_SIZE}
        isLoading={isLoading}
        totalCount={totalCount}
        callBack={ticketsPageNoHandler}
        className="!h-[calc(100dvh-120px)]"
      >
        <div className="w-full flex flex-col gap-2 pb-10">
          {items.map((item, index) => (
            <SupportTicketGenerator {...item} key={index} />
          ))}
        </div>
      </InfiniteScrollContainer>
    </>
  );
};

export default SupportTicketsTabContents;
