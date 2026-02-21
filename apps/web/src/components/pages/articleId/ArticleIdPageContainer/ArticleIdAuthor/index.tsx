'use client';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';

import { ArticleIdAuthorTypes } from './types';

const ArticleIdAuthor = ({ authorName, authorPic, id }: ArticleIdAuthorTypes) => {
  return (
    <CustomLink href={`/author/${id}`} className="flex items-center">
      <div className="flex gap-3 items-center">
        <div className="relative w-16 h-16">
          <CustomImage className="rounded-full object-cover" alt={authorName || ''} src={authorPic} fill={true} />
        </div>

        <div className="flex flex-col gap-2">
          <CustomTypography
            fontSize="Body_Small"
            className={`!text-impo_Neutral_OnBackground`}
          >{`نویسنده: ${authorName}`}</CustomTypography>
        </div>
      </div>
    </CustomLink>
  );
};

export default ArticleIdAuthor;
