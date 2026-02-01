import Refresh from '@assets/icons/refresh.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import NotRequestData from './NotRequestData';
import RequestList from './RequestList';
import RequestListSkeleton from './RequestList/RequestListSkeleton';
import { RequestSectionPropsType } from './type';

const RequestSection = ({ isLoading, list, getData, hasData }: RequestSectionPropsType) => {
  const title = hasData ? 'درخواست های همدلی' : ' درخواست ها';

  return (
    <div className=" flex flex-col gap-4 p-3 rounded-xl border border-impo_Neutral_Surface bg-impo_Neutral_Background">
      <div className="flex justify-between items-center ">
        <div onClick={getData}>
          <Refresh className="w-10 h-10" />
        </div>
        <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          {title}
        </CustomTypography>
      </div>
      {isLoading && <RequestListSkeleton />}

      {!isLoading && hasData ? <RequestList list={list} /> : <NotRequestData />}
    </div>
  );
};

export default RequestSection;
