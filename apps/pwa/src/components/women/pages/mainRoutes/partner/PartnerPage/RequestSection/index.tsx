import Refresh from '@assets/icons/refresh.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import NotRequestData from './NotRequestData';
import RequestList from './RequestList';
import RequestListSkeleton from './RequestList/RequestListSkeleton';
import { RequestSectionPropsType } from './type';

const RequestSection = ({ isLoading, list, getData, hasData }: RequestSectionPropsType) => {
  const { colors } = useTheme();

  const title = hasData ? 'درخواست های همدلی' : ' درخواست ها';

  return (
    <div
      className=" flex flex-col gap-4 p-3 rounded-xl "
      style={{ border: `1px solid ${colors.Neutral_Surface}`, backgroundColor: colors.White }}
    >
      <div className="flex justify-between items-center ">
        <div onClick={getData}>
          <Refresh className="w-10 h-10" />
        </div>

        <Typography scale="Title" size="Small">
          {title}
        </Typography>
      </div>
      {isLoading && <RequestListSkeleton />}

      {!isLoading && hasData ? <RequestList list={list} /> : <NotRequestData />}
    </div>
  );
};

export default RequestSection;
