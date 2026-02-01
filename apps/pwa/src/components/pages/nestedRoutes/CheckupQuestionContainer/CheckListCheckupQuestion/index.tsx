import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CheckupQuestionContainer from '../CheckupQuestionContainer';
import { CheckListCheckupQuestionPropsType } from './type';

const CheckListCheckupQuestion = ({ checkList }: CheckListCheckupQuestionPropsType) => {
  if (!checkList) {
    return <></>;
  }

  return (
    <CheckupQuestionContainer>
      <div className=" px-4 py-2 w-full">
        <div className="flex flex-col justify-end items-end w-full">
          <CustomTypography
            fontSize="Lable_Large"
            className="py-2 border-b border-b-impo_Neutral_Surface w-full text-impo_Neutral_OnBackground"
          >
            {checkList.title}
          </CustomTypography>
          <div>
            <ul className="list-disc text-impo_Neutral_OnBackground px-5 py-2" style={{ direction: 'rtl' }}>
              {checkList.items.map((item, index) => {
                return (
                  <li key={index} className="t">
                    <CustomTypography className="text-impo_Neutral_OnBackground" fontSize="Body_Medium">
                      {item}
                    </CustomTypography>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </CheckupQuestionContainer>
  );
};

export default CheckListCheckupQuestion;
