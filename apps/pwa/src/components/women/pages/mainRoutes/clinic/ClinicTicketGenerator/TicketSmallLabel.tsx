import { useMemo } from 'react';

import Dark_Typography from '@components/ui/Dark_Typography';

import { ClinicStateEnums } from '../enumbs';
import TicketRate from './TicketRate';
import { TicketSmallLabelProps } from './types';

const TicketSmallLabel = ({ state, stylingTypes, rate }: TicketSmallLabelProps) => {
  const values = useMemo(() => {
    const result = { backgroundColor: '', textColor: '', script: '' };

    switch (stylingTypes) {
      case 'heading':
        result.backgroundColor = 'bg-impo_White';
        result.textColor = 'text-impo_Black';
        break;
      case 'lists':
        if (state === ClinicStateEnums.Rejected || state === ClinicStateEnums.rejectBySuppoer) {
          result.backgroundColor = 'bg-impo_Error_ErrorContainer';
          result.textColor = 'text-impo_Error_Error';
        } else {
          result.backgroundColor = 'bg-impo_Primary_PrimaryContainer';
          result.textColor = 'text-Primary_OnPrimaryContainer';
        }
        break;
      default:
        result.backgroundColor = 'bg-impo_Primary_PrimaryContainer';
        result.textColor = 'text-Primary_OnPrimaryContainer';
        break;
    }

    switch (state) {
      case ClinicStateEnums.NoPay:
        result.script = 'در انتظار پرداخت';
        break;
      case ClinicStateEnums.Pending:
        result.script = 'در انتظار پاسخ پزشک';
        break;
      case ClinicStateEnums.NeedYourAnswer:
        result.script = 'در انتظار پاسخ کاربر';
        break;
      case ClinicStateEnums.Closed:
        result.script = 'بسته شده';
        break;
      case ClinicStateEnums.Rejected:
        result.script = 'تیکت رد شده است';
        break;
      case ClinicStateEnums.rejectBySuppoer:
        result.script = 'تیکت توسط پشتیبان رد شده است';
        break;
    }

    return result;
  }, [state, stylingTypes]);

  return (
    <div className={`flex items-center justify-center rounded-full px-3 py-1 ${values.backgroundColor}`}>
      <TicketRate rate={rate} />

      <Dark_Typography fontSize="Body_Small" className={`${values.textColor}`}>
        {values.script}
      </Dark_Typography>
    </div>
  );
};

export default TicketSmallLabel;
