import { useState } from 'react';

import CancelIcon from '@assets/icons/cancel.svg';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

const CommentChatModal = ({ onCloseModal }: { onCloseModal: () => void }) => {
  const { colors, typography } = useTheme();
  const [description, setDescription] = useState<string>('');

  const valueHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  return (
    <div className="flex flex-col gap-3">
      <div
        onClick={onCloseModal}
        className="w-10 h-10  flex justify-center items-center rounded-full"
        style={{
          backgroundColor: colors.Blue_50,
        }}
      >
        <CancelIcon className="w-6 h-auto" />
      </div>
      <div className="flex flex-col  rounded-2xl gap-3 items-end">
        <Typography size="Large" scale="Lable">
          نظرت راجع به این گفتگو با مونس چیه؟
        </Typography>

        <textarea
          placeholder="نظرت رو اینجا بنویس.."
          style={{ ...typography.Body.Medium, borderColor: colors.Neutral_Surface, direction: 'rtl' }}
          value={description}
          rows={4}
          onChange={valueHandler}
          className={`relative w-full rounded-xl p-2 border-[1px] outline-none resize-none mt-2 mb-1 `}
        />

        <div
          className="w-full flex flex-col items-center justify-end gap-2 px-4  mx-auto "
          style={{ maxWidth: MAX_SCREEN_WIDTH, backgroundColor: colors.White }}
        >
          <Button
            variant="fill"
            size="medium"
            color="primary"
            onClick={() => {}}
            // isLoading={isLoading}
            isDisable={!description}
          >
            ثبت نظر
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentChatModal;
