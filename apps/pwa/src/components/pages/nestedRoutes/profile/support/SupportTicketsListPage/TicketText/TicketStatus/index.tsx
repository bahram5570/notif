import { colorFormatConverter } from '@utils/scripts';

import Dark_Typography from '@components/ui/Dark_Typography';

import { TicketStatusPropsType } from './type';

const TicketStatus = ({ statusColor, statusText }: TicketStatusPropsType) => {
  const changeColorHandler = () => {
    if (statusText === 'در انتظار پاسخ پشتیبان') {
      return 'bg-impo_Warning_WarininContainer';
    }
    if (statusText === 'نیاز به پاسخ دهی شما') {
      return 'bg-impo_Success_SuccessContainer';
    }

    if (statusText === 'تیکت بسته شده') {
      return 'bg-impo_Error_ErrorContainer';
    }
  };

  return (
    <div className={`px-2 py-1 rounded-full ${changeColorHandler()}`}>
      <Dark_Typography fontSize="Lable_SmallProminet" style={{ color: colorFormatConverter(statusColor) }}>
        {statusText}
      </Dark_Typography>
    </div>
  );
};

export default TicketStatus;
