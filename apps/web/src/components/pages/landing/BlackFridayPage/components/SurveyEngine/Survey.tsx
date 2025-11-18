'use client';

import { FC } from 'react';

import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';
import { useRouter } from 'next/navigation';

import GoBack from '../GoBack';
import { useSurvey } from './useSurvey';

type Props = {
  survey: ReturnType<typeof useSurvey>;
  nextRoute: string;
};

const Survey: FC<Props> = ({ survey, nextRoute }) => {
  const router = useRouter();
  const { step, questions, current, answers, subAnswers, setAnswer, setSubAnswer, next, back } = survey;

  const main = answers[current.id] || null;
  const selectedOption = current.options.find((o) => o.value === main);
  const ready = !!main && (!selectedOption?.subOptions || !!subAnswers[current.id]);
  const isLast = step === questions.length - 1;

  const handleNext = () => {
    if (!ready) return;
    if (isLast) router.push(nextRoute);
    else next();
  };

  return (
    <div className="w-full max-w-[500px] h-[100dvh] relative px-7 py-6">
      <GoBack />

      <CustomTypography className="text-center my-6" tagType="p" fontSize="Title_Small">
        {current.title}
      </CustomTypography>

      <div className="space-y-4 flex-1">
        {current.options.map((opt) => {
          const isSelected = answers[current.id] === opt.value;

          return (
            <div key={opt.value} className="w-full">
              {!isSelected && (
                <button
                  onClick={() => setAnswer(current.id, opt.value)}
                  style={{ background: COLORS_LIST.Surface_SurfaceVariant }}
                  className="w-full text-right border border-transparent px-4 py-4 rounded-xl
                  flex justify-between items-center"
                >
                  <CustomTypography tagType="span" fontSize="Lable_Medium">
                    {opt.label}
                  </CustomTypography>
                </button>
              )}

              {isSelected && (
                <div
                  className="bg-[#FEF3F5] border rounded-2xl px-4 py-4"
                  style={{ borderColor: COLORS_LIST.Primary_Primary }}
                >
                  <div className="flex justify-between items-center">
                    <CustomTypography tagType="span" fontSize="Lable_Medium">
                      {opt.label}
                    </CustomTypography>
                  </div>

                  {opt.subOptions?.length ? <div className="h-[1px] my-2 bg-pink-200" /> : null}

                  {opt.subOptions?.map((s) => {
                    const isSubSelected = subAnswers[current.id] === s.value;

                    return (
                      <button
                        key={s.value}
                        onClick={() => setSubAnswer(current.id, s.value)}
                        className="w-full flex gap-x-2 items-center py-2"
                      >
                        <span
                          className={`relative w-4 h-4 rounded-full border 
                            ${isSubSelected ? 'border-[#F24584] border-[1.5px]' : 'border-gray-400'}`}
                        >
                          {isSubSelected && <span className="absolute inset-[2px] rounded-full bg-[#F24584]" />}
                        </span>

                        <CustomTypography tagType="span" fontSize="Body_Medium">
                          {s.label}
                        </CustomTypography>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center mt-8">
        {step > 0 ? (
          <button onClick={back} className="text-gray-600 text-sm px-3 py-2">
            ← برگشت
          </button>
        ) : (
          <span />
        )}

        <button
          disabled={!ready}
          onClick={handleNext}
          className="bg-pink-600 text-white py-3 px-6 rounded-xl disabled:opacity-40"
        >
          {isLast ? 'دیدن نتیجه' : 'ادامه'}
        </button>
      </div>
    </div>
  );
};

export default Survey;
