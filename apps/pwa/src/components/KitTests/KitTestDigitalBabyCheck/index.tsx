import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import Dark_Button from '@components/ui/Dark_Button';

import KitTestDigitalBabyCheckGenerator from './KitTestDigitalBabyCheckGenerator';
import useSelectedDigitalBabyCheck from './__hooks__/useSelectedDigitalBabyCheck';
import { KIT_TEST_DIGITAL_BABY_CHECK_LIST } from './constants';
import { KitTestDigitalBabyCheckProps } from './types';

const KitTestDigitalBabyCheck = ({ submitHandler, AnalytisId }: KitTestDigitalBabyCheckProps) => {
  const { selectedDigitalBabyCheck, selectedDigitalBabyCheckHandler } = useSelectedDigitalBabyCheck();

  const clickHandler = () => {
    if (selectedDigitalBabyCheck !== null) {
      submitHandler(selectedDigitalBabyCheck);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
        نتیجه تستت رو انتخاب کن:
      </CustomTypography>

      <div className="flex items-center justify-center gap-14 pt-4 pb-9">
        {KIT_TEST_DIGITAL_BABY_CHECK_LIST.map((item, index) => (
          <KitTestDigitalBabyCheckGenerator
            key={index}
            icon={item.icon}
            title={item.title}
            babyCheckResult={item.babyCheckResult}
            selectedDigitalBabyCheck={selectedDigitalBabyCheck}
            selectedDigitalBabyCheckHandler={selectedDigitalBabyCheckHandler}
          />
        ))}
      </div>

      <Dark_Button
        id={AnalytisId}
        fontSize="Lable_Large"
        onClick={clickHandler}
        isDisable={selectedDigitalBabyCheck === null}
      >
        ادامه
      </Dark_Button>
    </div>
  );
};

export default KitTestDigitalBabyCheck;
