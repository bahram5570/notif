import { useState } from 'react';

import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import useAnalytics from '@hooks/useAnalytics';

import QuestionGenerator from './QuestionGenerator';
import useSubmit from './__hooks__/useSubmit';
import { QuestionCheckupPropsType } from './type';

const QuestionCheckup = ({ question }: QuestionCheckupPropsType) => {
  const { callEvent } = useAnalytics();
  const { isLoading, submitHandler } = useSubmit();
  const [selectedValueList, setSelectedValueList] = useState<{ [key: string]: number }>({});

  const handleSelectionChange = (key: string, selectedValue: number) => {
    setSelectedValueList((prevState) => ({
      ...prevState,
      [key]: selectedValue,
    }));
  };

  if (!question) {
    return <></>;
  }

  const clickHandler = () => {
    submitHandler({ selectedValues: selectedValueList, type: question?.type });
    callEvent('PregnancyCheckAnswer');
  };

  const checkEmptySelectedValueList = Object.keys(selectedValueList).length === 0;
  return (
    <>
      <div className="rounded-xl w-full flex flex-row relative bg-impo_Neutral_Background">
        <div className="w-full p-3">
          <div className="flex flex-col justify-end items-end  ">
            <Dark_Typography
              fontSize="Lable_Large"
              className="py-2 text-impo_Neutral_OnBackground border-b border-b-impo_Neutral_Surface"
            >
              {question.title}
            </Dark_Typography>
            <div className="w-full">
              {question.questions.map((question, index) => {
                return (
                  <div key={index}>
                    <QuestionGenerator
                      options={question.options}
                      text={question.text}
                      handleSelectionChange={handleSelectionChange}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Dark_Button
        onClick={clickHandler}
        className="mt-auto"
        isLoading={isLoading}
        isDisable={checkEmptySelectedValueList}
        fontSize="Lable_Large"
      >
        ثبت اطلاعات
      </Dark_Button>
    </>
  );
};

export default QuestionCheckup;
