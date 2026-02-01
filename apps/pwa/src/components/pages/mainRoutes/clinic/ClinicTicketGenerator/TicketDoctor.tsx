import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';

import { TicketDoctorProps } from './types';

const TicketDoctor = ({ drName, drSpeciality, drImage, stylingTypes }: TicketDoctorProps) => {
  return (
    <div className="flex items-center gap-1">
      <div className="flex flex-col items-end gap-1">
        <CustomTypography
          fontSize="Lable_Medium"
          className={`${stylingTypes === 'heading' ? 'text-impo_Primary_OnPrimary' : 'text-impo_Neutral_OnBackground'}`}
        >
          {drName}
        </CustomTypography>

        <CustomTypography
          fontSize="Body_Small"
          className={`${stylingTypes === 'heading' ? 'text-impo_Primary_OnPrimary' : 'text-impo_Neutral_OnBackground'}`}
        >
          {drName}
        </CustomTypography>
      </div>

      <CustomImage src={drImage} width={56} height={56} className="rounded-full" />
    </div>
  );
};

export default TicketDoctor;
