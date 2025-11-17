import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import useReject from './__hooks__/useReject';
import { ModalPropsType } from './type';

const RejectModal = ({ onCloseModal }: ModalPropsType) => {
  const { getQueryParams } = useQueryParamsHandler();
  const { rejectHandler, isLoading } = useReject();

  const id = getQueryParams('id');
  const partnerName = getQueryParams('partnerName');
  const isRecv = getQueryParams('isRecv');

  const onClick = () => {
    rejectHandler(id);
  };

  return (
    <div className="flex flex-col items-center  gap-3 max-w-sm">
      <div className=" flex flex-col items-center p-2 w-full gap-2">
        <Typography scale="Body" size="Large">
          {isRecv
            ? ` از رد درخواست همدلی ${partnerName} مطمئن هستی؟`
            : `از لغو درخواست همدلی به ${partnerName} مطمئنی ؟ `}
        </Typography>
      </div>

      <div className="flex w-full justify-between gap-2">
        <Button size="medium" variant="fill" color="primary" onClick={onClick} isLoading={isLoading}>
          !آره
        </Button>
        <Button size="medium" variant="fill" color="surface" onClick={onCloseModal}>
          !نه
        </Button>
      </div>
    </div>
  );
};

export default RejectModal;
