import { useState } from 'react';

import PaperPlaneRightIcon from '@assets/icons/PaperPlaneRight.svg';
import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';
import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';

import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import { useOperatingSystem } from '@repo/core/hooks/useOperatingSystem';

import useSubmit from './__hooks__/useSubmit';
import { CreateCommentPropsType } from './type';

const CreateComment = ({ commentPlaceholder, programId }: CreateCommentPropsType) => {
  const { operatingSystem } = useOperatingSystem();
  const [commentText, setCommentText] = useState('');
  const { submitHandler, isLoading } = useSubmit({ programId });

  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Body_Small', operatingSystem });
  const onClick = () => {
    submitHandler({ commentText });
    setCommentText('');
  };

  return (
    <div
      className="mt-auto fixed bottom-0 left-0 right-0 flex items-center gap-2 h-20 p-3  mx-auto z-50 bg-impo_Neutral_Background"
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
    >
      <textarea
        placeholder={commentPlaceholder}
        className="w-full text-start px-4 py-3 rounded-full resize-none focus-visible:outline-1 focus-visible:outline border border-impo_Neutral_Surface outline-impo_Primary_Primary bg-impo_Neutral_Background text-impo_Neutral_OnBackground"
        style={{
          ...typographyFontStyles,
          direction: 'rtl',
        }}
        rows={1}
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />

      <button
        onClick={onClick}
        className={` !h-11 !w-11 rounded-full flex justify-center items-center text-impo_Primary_Primary ${!commentText ? 'bg-impo_Surface_SurfaceVariant' : 'bg-impo_Primary_Primary'}`}
        style={{
          cursor: !commentText ? 'not-allowed' : 'pointer',
        }}
      >
        {isLoading && (
          <div className="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center">
            <CustomSpinner size={24} className="border-impo_PrimaryMan_OnPrimaryMan" />
          </div>
        )}
        {!isLoading && (
          <PaperPlaneRightIcon
            className={`w-6 h-6 ${!commentText ? 'fill-impo_Surface_OutlineVariant' : 'fill-impo_PrimaryMan_OnPrimaryMan'}`}
          />
        )}
      </button>
    </div>
  );
};

export default CreateComment;
