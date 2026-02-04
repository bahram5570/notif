import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomModal } from '@repo/core/components/ui/CustomModal';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { typographyFontStylesMaker } from '@repo/core/utils/system';

import styles from './RatingDescriptionModal.module.css';

import { useOperatingSystem } from '@repo/core/hooks/useOperatingSystem';

import { MAX_LETTERS_COUNT } from './constants';
import { RatingDescriptionModalProps } from './types';

const RatingDescriptionModal = ({ descriptionHandler, description, onClick }: RatingDescriptionModalProps) => {
  const { operatingSystem } = useOperatingSystem();
  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Body_Medium', operatingSystem });

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
    <CustomModal isSlidingMode={true}>
      <>
        <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          لطفا نظرت رو برامون بنویس تا بتونیم بررسی کنیم و در آینده سرویس بهتری ارائه بدیم.
        </CustomTypography>

        <textarea
          placeholder="نظرت رو اینجا بنویس.."
          style={{ ...typographyFontStyles, direction: 'rtl' }}
          value={description}
          rows={4}
          onChange={valueHandler}
          className={`relative w-full rounded-xl p-2 border-[1px] outline-none resize-none mt-2 mb-1 bg-impo_Neutral_Background text-impo_Neutral_OnBackground border-impo_Neutral_Surface${styles.textarea}`}
        />

        <CustomTypography fontSize="Body_Medium" className="pb-10 mr-auto text-impo_Surface_Outline">
          {lettersCountScript}
        </CustomTypography>

        <CustomButton fontSize="Lable_Large" onClick={onClick}>
          ارسال بازخورد
        </CustomButton>
      </>
    </CustomModal>
  );
};

export default RatingDescriptionModal;
