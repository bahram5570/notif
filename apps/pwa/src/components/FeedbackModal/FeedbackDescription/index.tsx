import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useOperatingSystem from '@repo/core/hooks/useOperatingSystem';

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
      <CustomTypography className="text-impo_Neutral_OnBackground w-full" fontSize="Body_Medium">
        لطفا نظرت رو برامون بنویس تا بتونیم بررسی کنیم و در آینده سرویس بهتری ارائه بدیم.
      </CustomTypography>

      <textarea
        placeholder="نظرت رو اینجا بنویس.."
        style={{ ...typographyFontStyles, direction: 'rtl' }}
        value={description}
        rows={4}
        dir="rtl"
        onChange={valueHandler}
        className={`relative w-full rounded-xl p-2 border-[1px] outline-none resize-none mt-2 mb-1 placeholder:text-impo_Surface_OutlineVariant border-impo_Neutral_Surface bg-impo_Neutral_Background text-impo_Neutral_OnBackground`}
      />

      <CustomTypography className="text-impo_Surface_Outline pb-10 mr-auto" fontSize="Body_Medium">
        {lettersCountScript}
      </CustomTypography>
    </>
  );
};

export default FeedbackDescription;
