import Dark_Typography from '@components/ui/Dark_Typography';

import { InputValueType } from '../type';

const TestResult = ({ high = 0, low = 0 }: InputValueType) => {
  const generateResults = () => {
    return [
      {
        title: 'فشار خون نرمال',
        range: `140/90>`,
        background:
          high && low !== undefined && high <= 140 && low <= 90 ? 'bg-impo_Success_SuccessContainer' : 'transparent',
        indicatorColor: 'bg-impo_Success_Success',
      },

      {
        title: 'فشارخون غیر نرمال ',
        range: `140/90<`,
        background: high > 140 || low > 90 ? 'bg-impo_Error_ErrorContainer' : 'transparent',
        indicatorColor: 'bg-impo_Error_Error',
      },
    ];
  };

  const results = generateResults();

  return (
    <div className="p-3 w-full divide-y-[1px] flex flex-col gap-3 rounded-xl bg-impo_Neutral_Background">
      <Dark_Typography fontSize="Lable_Medium" className="w-full text-impo_Neutral_OnBackground">
        نتیجه تست فشارخون
      </Dark_Typography>
      <div className="flex flex-col">
        {results.map((result, index) => (
          <div
            key={index}
            className={`flex flex-row-reverse justify-between items-center mt-2 px-3 py-2 rounded-lg  ${result.background}`}
          >
            <div className="flex flex-row-reverse items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${result.indicatorColor}`}></div>
              <Dark_Typography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground">
                {result.title}
              </Dark_Typography>
            </div>
            <div className="flex flex-row-reverse gap-1">
              <Dark_Typography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
                mmHg
              </Dark_Typography>
              <Dark_Typography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
                {result.range}
              </Dark_Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestResult;
