import { handleNewCommentDisable, handleNewCommentValidation } from './__utils__';

import CustomButton from '@components/ui/CustomButton';
import CustomInput from '@components/ui/CustomInput';
import CustomTypography from '@components/ui/CustomTypography';
import useCustomToast from '@hooks/useCustomToast';
import { useSystem } from '@repo/core/hooks/useSystem';

import ArticleIdNewRate from './ArticleIdNewRate';
import ArticleIdNewTextarea from './ArticleIdNewTextarea';
import ArticleIdNewTitleGenerator from './ArticleIdNewTitleGenerator';
import useNewComment from './__hooks__/useNewComment';
import { ArticleIdCommentsNewCommentTypes } from './types';

const ArticleIdCommentsNewComment = ({ articleId }: ArticleIdCommentsNewCommentTypes) => {
  const { onToast } = useCustomToast();
  const { breakPoint } = useSystem();
  const { submitNewCommentHandler, isLoading, commentPayload, commentPayloadHandler, ratePayload, ratePayloadHandler } =
    useNewComment(articleId);

  const submitHandler = () => {
    const invalidMessage = handleNewCommentValidation({ commentPayload, ratePayload });

    if (typeof invalidMessage === 'undefined') {
      submitNewCommentHandler();
    } else {
      onToast({ type: 'error', message: invalidMessage });
    }
  };

  const isDisable = handleNewCommentDisable({ commentPayload, ratePayload });

  return (
    <div className="w-full">
      <CustomTypography
        className="pb-6 !text-impo_Surface_InverseSurface"
        fontSize={breakPoint.mobile ? 'Headline_Small' : 'Headline_Medium'}
      >
        ثبت نظر
      </CustomTypography>

      <div className="w-full flex flex-col gap-5">
        <div className="w-full">
          <ArticleIdNewTitleGenerator title="به مقاله امتیاز بدید و دیدگاه خود را بنویسید" hasStar={true} />

          <ArticleIdNewTextarea
            message={commentPayload.message}
            messageHandler={(v) => commentPayloadHandler(v, 'message')}
          />
        </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-8">
          <div className="w-full">
            <ArticleIdNewTitleGenerator title="نام کامل" hasStar={true} />

            <CustomInput
              hasOutline={true}
              fontSize="Body_Medium"
              value={commentPayload.name}
              onValue={(v) => commentPayloadHandler(v, 'name')}
              className="w-full p-4 rounded-xl outline-impo_Primary_Primary bg-impo_Surface_SurfaceVariant !text-impo_Neutral_OnBackground"
            />
          </div>

          <div className="w-full">
            <ArticleIdNewTitleGenerator title="شماره" hasStar={true} />

            <CustomInput
              hasOutline={true}
              fontSize="Body_Medium"
              value={commentPayload.phone}
              onValue={(v) => commentPayloadHandler(v, 'phone')}
              className="w-full p-4 rounded-xl outline-impo_Primary_Primary bg-impo_Surface_SurfaceVariant !text-impo_Neutral_OnBackground"
            />
          </div>
        </div>

        <div className="w-full">
          <ArticleIdNewTitleGenerator title="به مقاله امتیاز بدید" hasStar={true} />

          <ArticleIdNewRate rate={ratePayload.rate} rateHandler={ratePayloadHandler} />
        </div>
      </div>

      <div className="w-full flex justify-center pt-10">
        <CustomButton
          isLoading={isLoading}
          isDisable={isDisable}
          fontSize="Body_Large"
          onClick={submitHandler}
          spinnerClassName="!border-impo_Primary_Primary"
          className="bg-impo_Transparent !text-impo_Primary_Primary w-[170px]"
        >
          ثبت دیدگاه
        </CustomButton>
      </div>
    </div>
  );
};

export default ArticleIdCommentsNewComment;
