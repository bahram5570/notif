import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

const TestResult = ({ condition, value }: { condition: number | null; value: number | null }) => {
  const generateResults = () => {
    const range = condition === 0 ? 95 : 120;
    const isNormal = value && value < range ? true : false;
    const isSusspicious = value && value >= range && value <= range + 10 ? true : false;
    const isDibet = value && value > range + 10 ? true : false;

    return [
      {
        title: 'نرمال',
        range: `${range}>`,
        background: isNormal ? 'bg-impo_Success_SuccessContainer' : 'bg-impo_Transparent',
        textColor: isNormal ? 'text-impo_Black' : 'text-impo_Neutral_OnBackground',
        indicatorColor: 'bg-impo_Success_Success',
      },
      {
        title: 'مشکوک به دیابت',
        range: `${range}-${range + 10}`,
        background: isSusspicious ? 'bg-impo_Warning_WarininContainer' : 'bg-impo_Transparent',
        textColor: isSusspicious ? 'text-impo_Black' : 'text-impo_Neutral_OnBackground',
        indicatorColor: 'bg-impo_Warning_Warning',
      },
      {
        title: 'دیابت',
        range: `${range + 10}>`,
        background: isDibet ? 'bg-impo_Error_ErrorContainer' : 'bg-impo_Transparent',
        textColor: isDibet ? 'text-impo_Black' : 'text-impo_Neutral_OnBackground',
        indicatorColor: 'bg-impo_Error_Error',
      },
    ];
  };

  const results = generateResults();

  return (
    <div className="w-full flex flex-col gap-3 p-3 rounded-xl bg-impo_Neutral_Background">
      <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground w-full">
        نتیجه تست قندخون
      </CustomTypography>

      <div className="flex flex-col border-t-[1px] border-t-impo_Surface_OutlineVariant">
        {results.map((result, index) => (
          <div
            key={index}
            className={`flex flex-row-reverse justify-between items-center mt-2 px-3 py-2 rounded-lg ${result.background}`}
          >
            <div className="flex flex-row-reverse items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${result.indicatorColor}`} />

              <CustomTypography fontSize="Body_Medium" className={`${result.textColor}`}>
                {result.title}
              </CustomTypography>
            </div>

            <div className="flex flex-row-reverse gap-1">
              <CustomTypography fontSize="Lable_Medium" className={`${result.textColor}`}>
                mg/dL
              </CustomTypography>

              <CustomTypography fontSize="Lable_Medium" className={`${result.textColor}`}>
                {result.range}
              </CustomTypography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestResult;
