import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { MAX_LETTERS_COUNT } from '../constants';
import { FeedbackDescriptionPropsType } from './type';

const FeedbackDescription = ({ description, descriptionHandler }: FeedbackDescriptionPropsType) => {
  const { colors, typography } = useTheme();
  const lettersCount = description.trim().length;
  const lettersCountScript = `${lettersCount}/${MAX_LETTERS_COUNT}`;

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
      <Typography scale="Body" size="Medium" className="w-full">
        لطفا نظرت رو برامون بنویس تا بتونیم بررسی کنیم و در آینده سرویس بهتری ارائه بدیم.
      </Typography>

      <textarea
        placeholder="نظرت رو اینجا بنویس.."
        style={{ ...typography.Body.Medium, borderColor: colors.Neutral_Surface, direction: 'rtl' }}
        value={description}
        rows={4}
        onChange={valueHandler}
        className={`relative w-full rounded-xl p-2 border-[1px] outline-none resize-none mt-2 mb-1 `}
      />

      <Typography scale="Body" size="Medium" color="Surface_Outline" className="pb-10 mr-auto">
        {lettersCountScript}
      </Typography>
    </>
  );
};

export default FeedbackDescription;
