import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { ClinicStateEnums } from '../enumbs';
import { TicketBigLabelProps } from './types';

const TicketBigLabel = ({ state, stylingTypes }: TicketBigLabelProps) => {
  let script = '';

  switch (state) {
    case ClinicStateEnums.NeedYourAnswer:
      script = 'نیاز به پاسخ دهی شما';
      break;
    case ClinicStateEnums.Closed:
      script = 'امتیاز به متخصص';
      break;
  }

  return (
    <div
      className={`
                  w-full 
                  h-10 
                  rounded-lg 
                  flex 
                  items-center 
                  justify-center 
                  ${stylingTypes === 'heading' ? 'bg-impo_Primary_OnPrimary' : 'bg-impo_Primary_Primary'}
                `}
    >
      <CustomTypography
        fontSize="Lable_Large"
        className={`${stylingTypes === 'heading' ? 'text-impo_Primary_Primary' : 'text-impo_Primary_OnPrimary'}`}
      >
        {script}
      </CustomTypography>
    </div>
  );
};

export default TicketBigLabel;
