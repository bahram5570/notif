import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';

import Dark_Typography from '@components/ui/Dark_Typography';
import useOperatingSystem from '@hooks/useOperatingSystem';

import { MAX_LETTERS_COUNT } from '../constants';
import { FeedbackDescriptionPropsType } from './type';

const FeedbackDescription = ({ description, descriptionHandler }: FeedbackDescriptionPropsType) => {
  const { operatingSystem } = useOperatingSystem();
  const lettersCount = description.trim().length;
  const lettersCountScript = `${lettersCount}/${MAX_LETTERS_COUNT}`;

  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Body_Medium', operatingSystem });

  const valueHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    if (lettersCount < MAX_LETTERS_COUNT) {
      descriptionHandler(value);
    } else {
      const valueLettersCount = value.length;

      if (valueLettersCount <= lettersCount) {
        descriptionHandler(value);
      }
    }
  };
  return (
    <>
      <Dark_Typography fontSize="Body_Medium" className="w-full text-impo_Neutral_OnBackground">
        لطفا نظرت رو برامون بنویس تا بتونیم بررسی کنیم و در آینده سرویس بهتری ارائه بدیم.
      </Dark_Typography>

      <textarea
        placeholder="نظرت رو اینجا بنویس.."
        style={{ ...typographyFontStyles }}
        value={description}
        rows={4}
        dir="rtl"
        onChange={valueHandler}
        className="relative w-full rounded-xl p-2 border-[1px] outline-none resize-none mt-2 mb-1 border-impo_Neutral_Surface bg-impo_Neutral_Background text-impo_Neutral_OnBackground"
      />
      <Dark_Typography fontSize="Body_Medium" className="pb-10 mr-auto text-impo_Surface_Outline">
        {lettersCountScript}
      </Dark_Typography>
    </>
  );
};

export default FeedbackDescription;
