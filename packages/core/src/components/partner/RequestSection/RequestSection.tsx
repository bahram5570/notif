import RefreshIcon from '@assets/shared/icons/refresh.svg';

import { CustomTypography } from '../../ui/CustomTypography';
import { PartnerModals } from './PartnerModals/PartnerModals';
import RequestList from './RequestList';
import RequestListSkeleton from './RequestList/RequestListSkeleton';
import useGetRequestData from './__hooks__/useGetRequestData';
import { RequestSectionPropsType } from './type';

export const RequestSection = ({ element, isMan }: RequestSectionPropsType) => {
  const { data, getData, isLoading } = useGetRequestData();
  const hasRequestList = data && data.list.length > 0;
  const title = hasRequestList ? 'درخواست های همدلی' : ' درخواست ها';

  return (
    <div className=" flex flex-col gap-4 p-3 rounded-xl border border-impo_Neutral_Surface bg-impo_Neutral_Background">
      <div className="flex justify-between items-center ">
        <div onClick={getData}>
          <RefreshIcon className="w-10 h-10" />
        </div>
        <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
          {title}
        </CustomTypography>
      </div>
      {isLoading && <RequestListSkeleton />}

      {!isLoading && hasRequestList ? <RequestList list={data.list} isMan={isMan} /> : element}
      <PartnerModals isMan={isMan} />
    </div>
  );
};
