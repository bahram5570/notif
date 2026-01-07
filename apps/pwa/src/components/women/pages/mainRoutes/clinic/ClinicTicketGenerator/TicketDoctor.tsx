import CustomImage from '@components/ui/CustomImage';
import Dark_Typography from '@components/ui/Dark_Typography';

import { TicketDoctorProps } from './types';

const TicketDoctor = ({ drName, drSpeciality, drImage, stylingTypes }: TicketDoctorProps) => {
  return (
    <div className="flex items-center gap-1">
      <div className="flex flex-col items-end gap-1">
        <Dark_Typography
          fontSize="Lable_Medium"
          className={`${stylingTypes === 'heading' ? 'text-impo_Primary_OnPrimary' : 'text-impo_Neutral_OnBackground'}`}
        >
          {drName}
        </Dark_Typography>

        <Dark_Typography
          fontSize="Body_Small"
          className={`${stylingTypes === 'heading' ? 'text-impo_Primary_OnPrimary' : 'text-impo_Neutral_OnBackground'}`}
        >
          {drName}
        </Dark_Typography>
      </div>

      <CustomImage src={drImage} width={56} height={56} className="rounded-full" />
    </div>
  );
};

export default TicketDoctor;
