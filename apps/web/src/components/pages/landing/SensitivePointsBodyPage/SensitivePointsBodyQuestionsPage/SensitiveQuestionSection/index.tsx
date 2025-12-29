import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import SensitiveAnswersItem from '../SensitiveAnswersItem';
import { SensitiveQuestionSectionPropsType } from './type';

const SensitiveQuestionSection = ({
  currentQuestion,
  selectedIndex,
  selectedIndexHandler,
}: SensitiveQuestionSectionPropsType) => {
  return (
    <>
      <div className="px-4 flex flex-col gap-6">
        <CustomTypography fontSize="Lable_Large">{currentQuestion.question}</CustomTypography>
        <div className="flex flex-col gap-4">
          {currentQuestion.answers.map((answer) => {
            return (
              <SensitiveAnswersItem
                {...answer}
                key={answer.score}
                selectedIndex={selectedIndex}
                selectHandler={selectedIndexHandler}
              />
            );
          })}
        </div>
      </div>

      <div
        className="  flex justify-center mt-auto    [clip-path:ellipse(120%_100%_at_50%_100%)] min-h-[190px]   lg:max-h-96  !bg-repeat !bg-cover"
        style={{
          background:
            " url('/assets/images/sensitive/bg.webp'),linear-gradient(135deg, rgba(186, 39, 255, 0.2), rgba(133, 25, 218, 0.2))",
        }}
      >
        <CustomImage
          src={currentQuestion.image}
          key={currentQuestion.image}
          height={0}
          width={500}
          alt={currentQuestion.question}
          className=" relative p-4"
        />
      </div>
    </>
  );
};

export default SensitiveQuestionSection;
