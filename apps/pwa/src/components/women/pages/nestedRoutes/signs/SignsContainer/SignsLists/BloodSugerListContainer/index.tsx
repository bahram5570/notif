import Dark_Typography from '@components/ui/Dark_Typography';

import { BloodSugerListPropsType, CheckBloodSugerStatusType, InitailBloodSugerContextType } from './type';

const BloodSugerListContainer = ({ bloodSugerList }: BloodSugerListPropsType) => {
  const hasData = bloodSugerList && bloodSugerList.length > 0;

  const checkBloodSugerStatus: CheckBloodSugerStatusType = (condition, value) => {
    let result: keyof InitailBloodSugerContextType = 'normal';

    const range = condition === 0 ? 95 : 120;

    if (value < range) {
      result = 'normal';
    } else if (value >= range && value <= range + 10) {
      result = 'suspicious';
    } else {
      result = 'danger';
    }
    return result;
  };

  const initailBloodSugerContext: InitailBloodSugerContextType = {
    normal: {
      text: 'نرماله. عالیه همینطور پیش برو و مثل همیشه مراقب خودت باش',
      border: 'border-[1px] border-impo_Success_Success',
      backgroundColor: 'bg-impo_Success_Success',
      result: 'نرمال',
    },
    suspicious: {
      text: ' در محدوده مشکوک به دیابته. حتما رژیم غذاییت رو رعایت کن و بیشتر مراقب خودت باش',
      border: 'border-[1px] border-impo_Warning_Warning',
      backgroundColor: 'bg-impo_Warning_Warning',
      result: 'مشکوک به دیابت',
    },
    danger: {
      text: ' نشون میده که دیابت داری. حتما تحت نظر پزشک دارو مصرف کن',
      border: 'border-[1px] border-impo_Error_Error',
      backgroundColor: 'bg-impo_Error_Error',
      result: 'دیابت',
    },
  };

  if (!hasData) {
    return <></>;
  }

  return (
    <>
      {hasData && (
        <div className="flex flex-col gap-4 p-2 border-t-[1px] border-t-impo_Surface_SurfaceVariant">
          {bloodSugerList &&
            bloodSugerList.map((bloodSuger, index) => {
              const result: keyof InitailBloodSugerContextType = checkBloodSugerStatus(
                bloodSuger.condition,
                bloodSuger.value,
              );

              const context = initailBloodSugerContext[result];
              const conditionType = bloodSuger.condition === 0 ? 'ناشتا' : 'دو ساعت بعد از غذا';

              return (
                <div
                  key={index}
                  className={`flex flex-col rounded-md items-end ${context.border} ${index === 0 ? 'mt-3' : ''}`}
                >
                  <div className={`p-2 rounded-bl-md rounded-tr  ${context.backgroundColor}`}>
                    <Dark_Typography fontSize="Lable_Small" className="text-impo_White">
                      {`نتیجه تست ${index + 1}: ${bloodSuger.value}mg/dL-${context.result}`}
                    </Dark_Typography>
                  </div>

                  <div className="p-2">
                    <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
                      {`نتیجه تست قند خون ${conditionType}  که انجام دادی،${context.text}`}
                    </Dark_Typography>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default BloodSugerListContainer;
