'use client';

import { useState } from 'react';

import ArrowIcon from '@assets/icons/clinicLanding/arrowRight.svg';

import CustomButton2 from '@components/ui/CustomButton2';
import CustomTypography from '@components/ui/CustomTypography';

import { CommentsTypes } from '../types';
import CommentItem from './CommentItem';

const CommentList = ({ comments }: { comments: CommentsTypes[] }) => {
  const [visibleCount, setVisibleCount] = useState(10);
  const hasMore = comments.length > visibleCount;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <>
      <div className="mt-4 grid gap-y-3">
        {comments.slice(0, visibleCount).map((item, i) => (
          <CommentItem
            key={i}
            userText={item.text}
            userRate={item.rate}
            userCommentNegitive={item.negitive}
            userCommentPositive={item.positive}
          />
        ))}
      </div>

      {hasMore && (
        <div className="text-center mt-4 flex justify-center">
          <CustomButton2
            fontSize="Lable_Medium"
            onClick={handleShowMore}
            className="bg-impo_Transparent border-impo_Transparent"
          >
            <CustomTypography
              fontSize="Lable_Medium"
              className="flex justify-center gap-x-1 items-center !text-impo_Primary_Primary"
            >
              <ArrowIcon className="stroke-impo_Primary_Primary" />
              مشاهده نظرات بیشتر
            </CustomTypography>
          </CustomButton2>
        </div>
      )}
    </>
  );
};

export default CommentList;
