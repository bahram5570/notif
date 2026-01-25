import Dark_Typography from '@components/ui/Dark_Typography';

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
      border: 'border-[1px] border-impo_Success_Success',
      backgroundColor: 'bg-impo_Success_Success',
      result: 'فشار خون نرمال',
    },

    danger: {
      text: ' میزان فشار خونت بالاتر از حد نرماله. حتما برای کنترلش تحت نظر پزشک باش!',
      border: 'border-[1px] border-impo_Error_Error',
      backgroundColor: 'bg-impo_Error_Error',
      result: 'فشار خون غیرنرمال',
    },
  };

  if (!hasData) {
    <></>;
  }

  return (
    <>
      {hasData && (
        <div className="flex flex-col gap-4 p-2 border-t-[1px] border-t-impo_Surface_SurfaceVariant">
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
                  key={index}
                  className={`flex flex-col rounded-md items-end ${context.border} ${index === 0 ? 'mt-3' : ''}`}
                >
                  <div className={`p-2 rounded-bl-md rounded-tr ${context.backgroundColor}`}>
                    <Dark_Typography fontSize="Lable_Small" className="text-impo_White">
                      {`نتیجه تست ${index + 1} :${bloodPressureValue}mmHg- ${context.result}`}
                    </Dark_Typography>
                  </div>

                  <div className="p-2">
                    <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
                      {`${context.text}`}
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

export default BloodPressureListContainer;
