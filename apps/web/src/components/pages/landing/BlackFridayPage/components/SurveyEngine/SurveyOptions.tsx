'use client';

import { FC } from 'react';

import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

type Props = {
  current: any;
  answers: any;
  subAnswers: any;
  survey: any;
};

const SurveyOptions: FC<Props> = ({ current, answers, subAnswers, survey }) => {
  const { setAnswer, setSubAnswer } = survey;

  return (
    <div className="space-y-4 flex-1">
      {current.options.map((opt: any) => {
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
                <CustomTypography tagType="span" fontSize="Body_Medium">
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

                {opt.subOptions?.map((s: any) => {
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
  );
};

export default SurveyOptions;
