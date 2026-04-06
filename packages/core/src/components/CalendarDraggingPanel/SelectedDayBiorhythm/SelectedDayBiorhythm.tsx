import InfoIcon from '../../../../../assets/src/shared/icons/info.svg';
import { CustomTypography } from '../../../components/ui/CustomTypography';
import { externalLink } from '../../../utils/navigation';

import { useSystem } from '../../../hooks/useSystem';

import { useAnalytics } from '../../../hooks/useAnalytics';
import { CalendarWidgetEnums } from '../__hooks__/useCalendarGetData/CalendarEnums';
import { BiorhythmContainer } from './BiorhythmContainer/BiorhythmContainer';
import { BiorhythmModal } from './BiorhythmModal/BiorhythmModal';
import { BIORHYTHM_STATUS, EXTRA_LINK } from './constant';
import { SelectedDayBiorhythmProps } from './type';

export const SelectedDayBiorhythm = ({ selectedDateInfo }: SelectedDayBiorhythmProps) => {
  const { inViewRef } = useAnalytics({ inView_eventName: 'BiorhythmSeenMoreThen5Secs' });
  const { appName } = useSystem();

  const biorhythmInfo = selectedDateInfo.items.find((item) => item.type === CalendarWidgetEnums.Biorythem);

  if (!biorhythmInfo) {
    return <></>;
  }

  return (
    <>
      {biorhythmInfo && (
        <div className="w-full h-fit rounded-2xl p-4 bg-impo_Neutral_Background" ref={inViewRef}>
          <div className="flex justify-between items-center border-b-[1px] border-impo_Neutral_Surface pb-2 mb-2">
            <div className="flex flex-col justify-end items-end w-full">
              <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
                بیوریتم امروز
              </CustomTypography>

              <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
                با کلیک روی هر کدوم از حالات، هینت مورد نظرت رو بگیر
              </CustomTypography>
            </div>
          </div>

          <div className="flex gap-2 justify-center items-center">
            {BIORHYTHM_STATUS.map((bio, index) => {
              const biorhythmPercent = biorhythmInfo.data.bio[bio.type];
              return <BiorhythmContainer {...bio} percent={biorhythmPercent} key={index} />;
            })}
          </div>
          <div className="flex flex-row-reverse justify-center items-center gap-1 mt-3">
            <InfoIcon
              className={`w-[17px] h-auto stroke-${appName === 'PWA' ? 'impo_Primary_Primary' : 'impo_PrimaryMan_PrimaryMan'}`}
            />

            <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
              درباره بیوریتم سوال داری؟
            </CustomTypography>

            <div onClick={() => externalLink(EXTRA_LINK, true)}>
              <CustomTypography
                fontSize="Lable_Medium"
                className={`text-${appName === 'PWA' ? 'impo_Primary_Primary' : 'impo_PrimaryMan_PrimaryMan'}`}
              >
                جوابش رو اینجا ببین
              </CustomTypography>
            </div>
          </div>

          <BiorhythmModal biorhythmInfo={biorhythmInfo} />
        </div>
      )}
    </>
  );
};
