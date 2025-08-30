import { useState } from 'react';

import PaperPlaneRightIcon from '@assets/icons/PaperPlaneRight.svg';

import Button from '@components/ui/Button';
import Spinner from '@components/ui/Spinner';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

import useSubmit from './__hooks__/useSubmit';
import { CreateCommentPropsType } from './type';

const CreateComment = ({ commentPlaceholder, programId }: CreateCommentPropsType) => {
  const { colors, typography } = useTheme();
  const [commentText, setCommentText] = useState('');
  const { submitHandler, isLoading } = useSubmit({ programId });

  const onClick = () => {
    submitHandler({ commentText });
  };

  return (
    <div
      className="mt-auto fixed bottom-0 left-0 right-0 flex items-center gap-2 h-20 p-3  mx-auto z-50"
      style={{ maxWidth: MAX_SCREEN_WIDTH, backgroundColor: colors.White }}
    >
      <textarea
        placeholder={commentPlaceholder}
        className="w-full text-start px-4 py-3 rounded-full resize-none focus-visible:outline-1 focus-visible:outline "
        style={{
          ...typography.Body.Medium,
          border: `1px solid ${colors.Neutral_Surface}`,
          outlineColor: colors.PrimaryWoman_Primary,
          direction: 'rtl',
        }}
        rows={1}
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />

      <Button
        size="medium"
        variant="fill"
        color="FREE-STYLES"
        fullWidth={false}
        onClick={onClick}
        className=" !h-11 !w-11 rounded-full flex justify-center items-center"
        buttonColor={!commentText ? colors.Surface_SurfaceVariant : colors.PrimaryWoman_Primary}
        contentsColor={colors.PrimaryWoman_Primary}
        style={{
          cursor: !commentText ? 'not-allowed' : 'pointer',
        }}
      >
        {isLoading && (
          <div className="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center">
            <Spinner width={24} color="FREE-STYLES" borderColor={colors.PrimaryMan_OnPrimaryMan} />
          </div>
        )}
        {!isLoading && (
          <PaperPlaneRightIcon
            className="w-6 h-6"
            style={{ fill: !commentText ? colors.Surface_OutlineVariant : colors.PrimaryMan_OnPrimaryMan }}
          />
        )}
      </Button>
    </div>
  );
};

export default CreateComment;
