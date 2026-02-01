import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { InputValueType } from '../type';

const TestResult = ({ high = 0, low = 0 }: InputValueType) => {
  const generateResults = () => {
    return [
      {
        title: 'فشار خون نرمال',
        range: `140/90>`,
        background:
          high && low !== undefined && high <= 140 && low <= 90
            ? 'bg-impo_Success_SuccessContainer !text-impo_Black'
            : 'transparent !text-impo_Neutral_OnBackground',
        indicatorColor: 'bg-impo_Success_Success',
      },

      {
        title: 'فشارخون غیر نرمال ',
        range: `140/90<`,
        background:
          high > 140 || low > 90
            ? 'bg-impo_Error_ErrorContainer !text-impo_Black'
            : 'transparent !text-impo_Neutral_OnBackground',
        indicatorColor: 'bg-impo_Error_Error',
      },
    ];
  };

  const results = generateResults();

  return (
    <div className="p-3 w-full   flex flex-col gap-3 rounded-xl bg-impo_Neutral_Background ">
      <CustomTypography
        fontSize="Lable_Medium"
        className="w-full text-impo_Neutral_OnBackground  border-b border-b-impo_Neutral_Surface pb-3"
      >
        نتیجه تست فشارخون
      </CustomTypography>
      <div className="flex flex-col">
        {results.map((result, index) => (
          <div
            key={index}
            className={`flex flex-row-reverse justify-between items-center mt-2 px-3 py-2 rounded-lg  ${result.background}`}
          >
            <div className="flex flex-row-reverse items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${result.indicatorColor}`}></div>
              <CustomTypography fontSize="Body_Medium">{result.title}</CustomTypography>
            </div>
            <div className="flex flex-row-reverse gap-1">
              <CustomTypography fontSize="Lable_Medium">mmHg</CustomTypography>
              <CustomTypography fontSize="Lable_Medium">{result.range}</CustomTypography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestResult;
