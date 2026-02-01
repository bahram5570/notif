import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { BloodPressureListPropsType, CheckBloodPressureStatusType, InitailBloodPressureContextType } from './type';

const BloodPressureListContainer = ({ bloodPressureList }: BloodPressureListPropsType) => {
  const hasData = bloodPressureList && bloodPressureList.length > 0;

  const checkBloodPressure: CheckBloodPressureStatusType = (high, low) => {
    let result: keyof InitailBloodPressureContextType = 'normal';

    if (high && low !== undefined && high <= 140 && low <= 90) {
      result = 'normal';
    } else {
      result = 'danger';
    }
    return result;
  };

  const initailBloodPressureContext: InitailBloodPressureContextType = {
    normal: {
      text: 'میزان فشار خونت نرماله. مثل همیشه مراقب خودت باش!',
      border: 'bg-impo_Success_Success',
      result: 'فشار خون نرمال',
    },

    danger: {
      text: ' میزان فشار خونت بالاتر از حد نرماله. حتما برای کنترلش تحت نظر پزشک باش!',
      border: 'bg-impo_Error_Error',
      result: 'فشار خون غیرنرمال',
    },
  };

  if (!hasData) {
    <></>;
  }

  return (
    <>
      {hasData && (
        <div className="flex flex-col gap-4 p-2">
          {bloodPressureList &&
            bloodPressureList.map((bloodPressure, index) => {
              const result: keyof InitailBloodPressureContextType = checkBloodPressure(
                bloodPressure.high,
                bloodPressure.low,
              );
              const context = initailBloodPressureContext[result];
              const bloodPressureValue = `${bloodPressure.high}/${bloodPressure.low}`;

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
                      {`نتیجه تست ${index + 1} :${bloodPressureValue}mmHg- ${context.result}`}
                    </CustomTypography>
                  </div>
                  <div className="p-2">
                    <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
                      {`${context.text}`}
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

export default BloodPressureListContainer;
