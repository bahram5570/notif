import { useMemo } from 'react';

import { useSystem } from '../../../hooks/useSystem';
import { CustomTypography } from '../../ui/CustomTypography';
import { ClinicStateEnums } from '../enums';
import TicketRate from './TicketRate';
import { TicketSmallLabelProps } from './types';

const TicketSmallLabel = ({ state, stylingTypes, rate }: TicketSmallLabelProps) => {
  const { appName } = useSystem();

  const theme = useMemo<{ backgroundcolor: string; text: string }>(() => {
    switch (appName) {
      case 'MEN_PWA':
        return {
          backgroundcolor: 'bg-impo_PrimaryMan_PrimaryContainerMan',
          text: 'text-impo_PrimaryMan_PrimaryMan',
        };

      default:
        return {
          backgroundcolor: 'bg-impo_Primary_PrimaryContainer',
          text: 'text-impo_Primary_Primary',
        };
    }
  }, [appName]);

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
          result.backgroundColor = theme.backgroundcolor;
          result.textColor = theme.text;
        }
        break;
      default:
        result.backgroundColor = theme.backgroundcolor;
        result.textColor = theme.text;
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
    <div className={`flex items-center justify-center rounded-full px-3 py-1     ${values.backgroundColor}`}>
      <TicketRate rate={rate} />

      <CustomTypography fontSize="Body_Small" className={`${values.textColor}`}>
        {values.script}
      </CustomTypography>
    </div>
  );
};

export default TicketSmallLabel;
