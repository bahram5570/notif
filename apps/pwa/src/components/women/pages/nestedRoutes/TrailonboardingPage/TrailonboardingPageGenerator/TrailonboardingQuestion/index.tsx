import { useState } from 'react';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import TrailonboardingContainer from '../TrailonboardingContainer';
import { TrailonboardingQuestionPropsType } from './type';

const TrailonboardingQuestion = ({ data, goToNext }: TrailonboardingQuestionPropsType) => {
  const { colors } = useTheme();
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (index: number, answer: boolean) => {
    if (isAnswered) return;
    setSelectedIndex(index);
    setIsAnswered(answer);
  };

  return (
    <TrailonboardingContainer
      description={data.descripition}
      title={data.title}
      textBtn={data.textBtn}
      onClickHandler={goToNext}
    >
      <div className="flex flex-col gap-3 w-full my-8">
        {data.options.map((option, index) => {
          const isSelected = index === selectedIndex;
          const isCorrectAnswer = option.isCorrect === isAnswered;

          let bgColor = colors.Neutral_Surface;
          if (isSelected && isCorrectAnswer) bgColor = colors.Success_Success;
          else if (isSelected && !isCorrectAnswer) bgColor = colors.Error_Error;

          return (
            <div
              key={index}
              style={{
                backgroundColor: bgColor,
              }}
              className=" rounded-xl py-5 flex justify-end items-center px-4 "
              onClick={() => {
                handleClick(index, option.isCorrect);
              }}
            >
              <Typography scale="Body" size="Medium" color="Neutral_OnBackground">
                {option.title}
              </Typography>
            </div>
          );
        })}
      </div>
    </TrailonboardingContainer>
  );
};

export default TrailonboardingQuestion;
