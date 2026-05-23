import { CustomImage_NEW } from '../../ui/CustomImage_NEW';
import { CustomTypography } from '../../ui/CustomTypography';
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
          {drSpeciality}
        </CustomTypography>
      </div>

      <div className="relative w-14 h-14 rounded-full overflow-hidden ">
        <CustomImage_NEW src={drImage} fill={true} className="object-cover" />
      </div>
    </div>
  );
};

export default TicketDoctor;
