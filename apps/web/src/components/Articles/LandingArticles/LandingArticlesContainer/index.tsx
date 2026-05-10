'use client';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import ArticleCardGenerator from '@components/Articles/ArticleCardGenerator';
import CustomLink from '@components/ui/CustomLink';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { LandingArticlesContainerTypes } from './types';

const LandingArticlesContainer = ({ data, title, subTitle, showAllArticlesLinkTo }: LandingArticlesContainerTypes) => {
  const hasSubtitle = typeof subTitle !== 'undefined';

  return (
    <div className="w-full max-w-[100vw] overflow-hidden flex flex-col items-center py-8 lg:py-9 bg-impo_Neutral_Surface">
      <CustomTypography
        tagType="h2"
        fontSize="Title_Medium"
        className={`text-center w-[350px] lg:w-[370px] !text-impo_Neutral_OnBackground ${!hasSubtitle && 'pb-6 lg:pb-10'}`}
      >
        {title}
      </CustomTypography>

      {hasSubtitle && (
        <CustomTypography
          tagType="span"
          fontSize="Body_Large"
          className="pt-2 lg:pt-4 pb-6 lg:pb-10 text-center w-[360px] lg:w-[610px] !text-impo_Surface_OnSurfaceVariant"
        >
          {subTitle}
        </CustomTypography>
      )}

      {data && (
        <section className="w-full pb-6 lg:pb-20">
          <Swiper slidesPerView={'auto'} freeMode={true} modules={[FreeMode]}>
            {data.map((item, index) => (
              <SwiperSlide key={index} className="w-fit px-3">
                <ArticleCardGenerator data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}

      <CustomLink
        href={showAllArticlesLinkTo}
        className="h-[40px] lg:h-[60px] p-6 flex items-center justify-center rounded-full bg-impo_Primary_Primary"
      >
        <CustomTypography fontSize="Lable_Large" className="!text-impo_Primary_OnPrimary">
          مشاهده همه مقالات
        </CustomTypography>
      </CustomLink>
    </div>
  );
};

export default LandingArticlesContainer;
