import InfoIcon from '@assets/icons/info.svg';
import { externalLink } from '@utils/navigation';

import Dark_Typography from '@components/ui/Dark_Typography';
import useAnalytics from '@hooks/useAnalytics';

import { CalendarWidgetEnums } from '../../__hooks__/useCalendarGetData/CalendarEnums';
import BiorhythmContainer from './BiorhythmContainer';
import BiorhythmModal from './BiorhythmModal';
import { BIORHYTHM_STATUS, EXTRA_LINK } from './constant';
import { SelectedDayBiorhythmProps } from './type';

const SelectedDayBiorhythm = ({ selectedDateInfo }: SelectedDayBiorhythmProps) => {
  const { inViewRef } = useAnalytics({ inView_eventName: 'BiorhythmSeenMoreThen5Secs' });

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
              <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
                بیوریتم امروز
              </Dark_Typography>

              <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
                با کلیک روی هر کدوم از حالات، هینت مورد نظرت رو بگیر
              </Dark_Typography>
            </div>
          </div>

          <div className="flex gap-2 justify-center items-center">
            {BIORHYTHM_STATUS.map((bio, index) => {
              const biorhythmPercent = biorhythmInfo.data.bio[bio.type];
              return <BiorhythmContainer {...bio} percent={biorhythmPercent} key={index} />;
            })}
          </div>

          <div className="flex flex-row-reverse justify-center items-center gap-1 mt-3">
            <InfoIcon className="w-[17px] h-auto stroke-impo_Primary_Primary" />

            <Dark_Typography fontSize="Title_Small" className="text-impo_Neutral_OnBackground">
              درباره بیوریتم سوال داری؟
            </Dark_Typography>

            <div onClick={() => externalLink(EXTRA_LINK, true)}>
              <Dark_Typography fontSize="Lable_Medium" className="text-impo_Primary_Primary">
                جوابش رو اینجا ببین
              </Dark_Typography>
            </div>
          </div>

          <BiorhythmModal biorhythmInfo={biorhythmInfo} />
        </div>
      )}
    </>
  );
};

export default SelectedDayBiorhythm;
