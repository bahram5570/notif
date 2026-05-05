import React from 'react';

import CommentsGenerator from './CommentsGenerator';
import CommentsListEmpty from './CommentsListEmpty';
import { CommentsListProps } from './types';

const CommentsList: React.FC<CommentsListProps> = ({ comments, id, canSendReply, self }) => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <>
        {comments.length === 0 && <CommentsListEmpty self={self} />}

        {comments.map((comment, index) => (
          <CommentsGenerator
            {...comment}
            shareId={id}
            isFirstIndex={index === 0}
            key={index}
            canSendComment={canSendReply}
          />
        ))}
      </>
    </div>
  );
};

export default CommentsList;
