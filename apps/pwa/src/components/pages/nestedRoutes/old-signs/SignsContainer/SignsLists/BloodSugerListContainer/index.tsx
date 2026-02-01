import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

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
      border: 'bg-impo_Success_Success',
      result: 'نرمال',
    },
    suspicious: {
      text: ' در محدوده مشکوک به دیابته. حتما رژیم غذاییت رو رعایت کن و بیشتر مراقب خودت باش',
      border: 'bg-impo_Warning_Warning',
      result: 'مشکوک به دیابت',
    },
    danger: {
      text: ' نشون میده که دیابت داری. حتما تحت نظر پزشک دارو مصرف کن',
      border: 'bg-impo_Error_Error',
      result: 'دیابت',
    },
  };

  if (!hasData) {
    return <></>;
  }

  return (
    <>
      {hasData && (
        <div className="flex flex-col gap-4 p-2">
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
                  className={`flex flex-col rounded-md items-end ${index === 0 ? 'mt-3' : ''}`}
                  key={index}
                  style={{
                    border: `1px solid ${context.border}`,
                  }}
                >
                  <div
                    style={{
                      background: context.border,
                    }}
                    className="p-2  rounded-bl-md"
                  >
                    <CustomTypography fontSize="Lable_Small" className="text-impo_White">
                      {`نتیجه تست ${index + 1}: ${bloodSuger.value}mg/dL-${context.result}`}
                    </CustomTypography>
                  </div>
                  <div className="p-2">
                    <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
                      {`نتیجه تست قند خون ${conditionType}  که انجام دادی،${context.text}`}
                    </CustomTypography>
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
