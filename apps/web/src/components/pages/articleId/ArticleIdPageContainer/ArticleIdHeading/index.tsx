'use client';

import { articleImageUrl } from '@services/http';

import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import useBreakPoint from '@hooks/useBreakPoint';

import { ArticleIdHeadingTypes } from './types';

const ArticleIdHeading = ({ imageCover, title }: ArticleIdHeadingTypes) => {
  const { breakPoint } = useBreakPoint();

  const imageUrl = imageCover ? articleImageUrl + imageCover : '/assets/images/notLoaded.svg';

  return (
    <div className="w-full flex flex-col gap-6 md:gap-8">
      <CustomTypography fontSize={breakPoint.mobile ? 'Headline_Small' : 'Headline_Medium'} tagType="h1">
        {title}
      </CustomTypography>

      <CustomImage
        width={960}
        alt={title}
        height={960}
        src={imageUrl}
        priority={true}
        className="w-full h-auto rounded-2xl"
      />
    </div>
  );
};

export default ArticleIdHeading;
