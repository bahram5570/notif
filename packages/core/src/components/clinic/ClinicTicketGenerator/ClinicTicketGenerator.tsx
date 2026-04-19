import { useMemo } from 'react';

import { useSystem } from '../../../hooks/useSystem';
import { ClinicStateEnums } from '../enums';
import TicketArrow from './TicketArrow';
import TicketBigLabel from './TicketBigLabel';
import TicketDoctor from './TicketDoctor';
import TicketSmallLabel from './TicketSmallLabel';
import TicketTime from './TicketTime';
import useClinicTicketNavigation from './__hooks__/useClinicTicketNavigation';
import { ClinicTicketGeneratorProps } from './types';

export const ClinicTicketGenerator = (props: ClinicTicketGeneratorProps) => {
  const { navigateTicketHandler } = useClinicTicketNavigation(props);
  const { appName } = useSystem();

  const theme = useMemo<{ backgroundcolor1: string; backgroundcolor2: string }>(() => {
    switch (appName) {
      case 'MEN_PWA':
        return {
          backgroundcolor1: 'bg-impo_PrimaryMan_PrimaryMan',
          backgroundcolor2: 'bg-impo_Blue_400',
        };

      default:
        return {
          backgroundcolor1: 'bg-impo_Primary_Primary',
          backgroundcolor2: 'bg-impo_Pink_400',
        };
    }
  }, [appName]);

  const showArrow =
    ClinicStateEnums.NeedYourAnswer === props.state || (ClinicStateEnums.Closed === props.state && props.rate === 0);

  return (
    <div className="w-full cursor-pointer" onClick={navigateTicketHandler}>
      <div
        className={`
                    w-full 
                    px-2 
                    py-3 
                    rounded-xl 
                    pointer-events-none 
                    ${props.stylingTypes === 'heading' ? theme.backgroundcolor1 : 'bg-impo_Neutral_Surface'}
                  `}
      >
        <div className="flex items-center justify-between">
          {!showArrow && <TicketArrow stylingTypes={props.stylingTypes} />}

          {showArrow && (
            <div className="flex flex-col justify-between gap-1">
              <div style={{ opacity: props.state === ClinicStateEnums.Closed ? '1' : '0' }}>
                <TicketSmallLabel stylingTypes={props.stylingTypes} state={props.state} rate={props.rate} />
              </div>

              <TicketTime createTime={props.createTime} stylingTypes={props.stylingTypes} />
            </div>
          )}

          <TicketDoctor
            drName={props.drName}
            drImage={props.drImage}
            drSpeciality={props.drSpeciality}
            stylingTypes={props.stylingTypes}
          />
        </div>

        <div
          className={`
                      w-full 
                      h-[1px] 
                      my-2
                      ${props.stylingTypes === 'heading' ? theme.backgroundcolor2 : 'bg-impo_Neutral_Surface dark:bg-impo_Surface_SurfaceVariant'}
                      ${showArrow ? 'opacity-0' : 'opacity-100'}
                    `}
        />

        <div className="w-full flex items-center justify-between">
          {!showArrow && (
            <>
              <TicketTime createTime={props.createTime} stylingTypes={props.stylingTypes} />
              <TicketSmallLabel stylingTypes={props.stylingTypes} state={props.state} rate={props.rate} />
            </>
          )}

          {showArrow && <TicketBigLabel stylingTypes={props.stylingTypes} state={props.state} />}
        </div>
      </div>
    </div>
  );
};
