import { articleImageUrl } from '@services/http';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { useSystem } from '@repo/core/hooks/useSystem';

import { ArticleCardGeneratorTypes } from './types';

const ArticleCardGenerator = ({ data }: ArticleCardGeneratorTypes) => {
  const { breakPoint } = useSystem();

  const imageUrl = data.imageCover ? articleImageUrl + data.imageCover : '/assets/images/notLoaded.svg';

  return (
    <CustomLink
      href={`/${data.url}`}
      aria-label="ArticleCardGenerator"
      className="w-[280px] lg:w-[380px] h-[300px] lg:h-[340px] flex flex-col items-center rounded-2xl overflow-hidden bg-impo_Neutral_Background"
    >
      <div className="relative w-full h-[160px] lg:h-[210px]">
        <CustomImage
          fill={true}
          src={imageUrl}
          alt={data.imageCoverAlt}
          className="object-cover w-full h-auto"
          sizes="(max-width: 1024px) 400px, 500px"
        />
      </div>

      <div className="px-4">
        <CustomTypography
          className="pt-4 pb-2 !text-impo_Surface_Outline"
          fontSize={breakPoint.laptop ? 'Lable_Medium' : 'Body_Medium'}
        >
          {data.categories[0].title}
        </CustomTypography>

        <CustomTypography
          className="!text-impo_Neutral_OnBackground"
          fontSize={breakPoint.laptop ? 'Lable_Large' : 'Title_Small'}
        >
          {data.title}
        </CustomTypography>
      </div>
    </CustomLink>
  );
};

export default ArticleCardGenerator;
