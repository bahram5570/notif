import { useState } from 'react';

import CancelIcon from '@assets/icons/cancel.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import Dark_Button from '@components/ui/Dark_Button';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import { CommenPropsType } from '../type';
import useSubmit from './__hooks__/useSubmit';

const SuggestionTopicChatModal = ({ onCloseModal }: CommenPropsType) => {
  const { submitHandler, isLoading } = useSubmit();
  const [description, setDescription] = useState<string>('');

  const valueHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const onClick = () => {
    submitHandler(description);
  };

  return (
    <div className="flex flex-col gap-3">
      <div
        onClick={onCloseModal}
        className="w-10 h-10  flex justify-center items-center rounded-full bg-impo_Neutral_Surface"
      >
        <CancelIcon className="w-6 h-auto stroke-impo_Surface_Outline" />
      </div>
      <div className="flex flex-col  rounded-2xl gap-3 items-end">
        <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
          هر موضوعی که دوست داری بنویس تا به تالارهای گفتگو با مونس اضافه بشه
        </CustomTypography>

        <textarea
          placeholder="نظرت رو اینجا بنویس.."
          style={{ direction: 'rtl' }}
          value={description}
          rows={4}
          onChange={valueHandler}
          className="relative w-full rounded-xl p-2 border-[1px] outline-none resize-none mt-2 mb-1 border-impo_Neutral_Surface bg-impo_Neutral_Surface text-impo_Neutral_OnSurface placeholder:text-impo_Surface_OutlineVariant"
        />

        <div
          className="w-full flex flex-col items-center justify-end gap-2   mx-auto "
          style={{ maxWidth: MAX_SCREEN_WIDTH }}
        >
          <Dark_Button
            onClick={onClick}
            isLoading={isLoading}
            isDisable={description.trim() === ''}
            fontSize="Lable_Large"
          >
            ثبت نظر
          </Dark_Button>
        </div>
      </div>
    </div>
  );
};

export default SuggestionTopicChatModal;
