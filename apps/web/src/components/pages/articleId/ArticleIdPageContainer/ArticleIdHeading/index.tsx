'use client';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { articleImageUrl } from '@services/http';

import CustomImage from '@components/ui/CustomImage';
import { useSystem } from '@repo/core/hooks/useSystem';

import { ArticleIdHeadingTypes } from './types';

const ArticleIdHeading = ({ imageCover, title }: ArticleIdHeadingTypes) => {
  const { breakPoint } = useSystem();

  const imageUrl = imageCover ? articleImageUrl + imageCover : '/assets/images/notLoaded.svg';

  return (
    <div className="w-full flex flex-col gap-6 md:gap-8">
      <CustomTypography
        tagType="h1"
        className="!text-impo_Neutral_OnBackground"
        fontSize={breakPoint.mobile ? 'Headline_Small' : 'Headline_Medium'}
      >
        {title}
      </CustomTypography>

      <div className="relative w-full aspect-video">
        <CustomImage
          fill={true}
          alt={title}
          quality={100}
          src={imageUrl}
          priority={true}
          className="w-full h-auto rounded-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default ArticleIdHeading;
