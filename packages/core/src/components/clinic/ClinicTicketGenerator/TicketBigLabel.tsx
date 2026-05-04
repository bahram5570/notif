import { useSystem } from '../../../hooks/useSystem';
import { CustomTypography } from '../../ui/CustomTypography';
import { ClinicStateEnums } from '../enums';
import { TicketBigLabelProps } from './types';

const TicketBigLabel = ({ state, stylingTypes }: TicketBigLabelProps) => {
  let script = '';
  const { appName } = useSystem();
  const isMan = appName === 'MEN_PWA';

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
                  rounded-full 
                  flex 
                  items-center 
                  justify-center 
                  ${stylingTypes === 'heading' ? 'bg-impo_Primary_OnPrimary' : isMan ? `${state === ClinicStateEnums.Closed ? 'bg-impo_PrimaryMan_PrimaryContainerMan' : 'bg-impo_PrimaryMan_PrimaryMan'}` : 'bg-impo_Primary_Primary'}
                `}
    >
      <CustomTypography
        fontSize="Lable_Large"
        className={`${stylingTypes === 'heading' ? (isMan ? 'text-impo_PrimaryMan_PrimaryMan' : 'text-impo_Primary_Primary') : `${state === ClinicStateEnums.Closed && isMan ? 'text-impo_PrimaryMan_PrimaryMan' : 'text-impo_Primary_OnPrimary'}`}`}
      >
        {script}
      </CustomTypography>
    </div>
  );
};

export default TicketBigLabel;
