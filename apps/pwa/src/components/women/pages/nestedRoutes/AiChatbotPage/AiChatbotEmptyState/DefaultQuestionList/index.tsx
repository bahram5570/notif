import Dark_Typography from '@components/ui/Dark_Typography';

import { DefaultQuestionListPropType } from './type';

const DefaultQuestionList = ({ defaultQustionHandler, questions }: DefaultQuestionListPropType) => {
  const onClick = (question: string) => {
    defaultQustionHandler(question);
  };

  return (
    <div className="flex flex-col items-center p-0 gap-2 flex-none order-1 self-stretch flex-grow-0">
      {Array.from({ length: Math.ceil(questions.length / 2) }, (_, rowIndex) => {
        const rowQuestions = questions.slice(rowIndex * 2, rowIndex * 2 + 2);
        return (
          <div
            key={rowIndex}
            className="flex flex-row gap-2 items-center flex-none justify-center order-0 self-stretch flex-grow-0"
          >
            {rowQuestions.map((question, index) => (
              <div
                className="glass-card dark:!bg-impo_Neutral_Surface dark:shadow-xl dark:!border-none w-fit justify-center items-center rounded-full flex flex-col"
                key={index}
                onClick={() => onClick(question)}
              >
                <Dark_Typography className="p-2 text-impo_Surface_InverseSurface" fontSize="Lable_SmallProminet">
                  {question}
                </Dark_Typography>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default DefaultQuestionList;
