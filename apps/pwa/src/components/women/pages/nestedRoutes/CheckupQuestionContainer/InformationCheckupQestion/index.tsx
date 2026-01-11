import Dark_Typography from '@components/ui/Dark_Typography';

import CheckupQuestionContainer from '../CheckupQuestionContainer';
import ReadMoreText from './ReadMoreText';
import { InformationCheckupQestionPropsType } from './type';

const InformationCheckupQestion = ({ information }: InformationCheckupQestionPropsType) => {
  if (!information) {
    return <></>;
  }

  return (
    <CheckupQuestionContainer>
      <div className=" px-4 py-2">
        <div className="flex flex-col justify-end items-end  divide-y-[1px]">
          <Dark_Typography fontSize="Lable_Large" className="py-2 text-impo_Neutral_OnBackground">
            {information.title}
          </Dark_Typography>

          <ReadMoreText maxLines={4} text={information.text || ''} />
        </div>
      </div>
    </CheckupQuestionContainer>
  );
};

export default InformationCheckupQestion;
