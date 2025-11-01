'use client';

import { fileImageUrl } from '@services/http';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { FOOTER_HEIGHT } from '@constants/app.constants';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { COLORS_LIST } from '@theme/colors';

import useGetBannerList from '../__hooks__/useGetBannerList';
import { FooterNavLinkTypes } from './types';

const FooterNavLink = ({ className }: FooterNavLinkTypes) => {
  const { items } = useGetBannerList();
  const { getQueryParams } = useQueryParamsHandler();
  const currentCategory = getQueryParams('currentCategory') ?? 'public';
  const findCurrentBanner = items ? items.find((item) => item.catName.includes(currentCategory)) : undefined;

  const backgroundHandler = (colorList: string[]) => {
    let bg;
    if (colorList.length > 1) {
      bg = `linear-gradient(127deg, ${colorList[0]} 0%, ${colorList[1]} 100%)`;
    } else {
      bg = colorList[0];
    }

    return bg;
  };

  if (!findCurrentBanner) {
    return <></>;
  }

  return (
    <div
      style={{
        bottom: FOOTER_HEIGHT,
        background: backgroundHandler(findCurrentBanner.backgroundColor),
      }}
      className={`fixed w-full h-[64px] flex items-center justify-between px-4 shadow-2xl z-10 bg-cover bg-no-repeat bg-center lg:hidden ${className}`}
    >
      <div className="flex items-center gap-2">
        <CustomImage
          src={fileImageUrl + findCurrentBanner.logoUrl}
          alt={findCurrentBanner.title}
          width={40}
          height={40}
        />

        <CustomTypography fontSize="Lable_Medium" color="Neutral_OnBackground">
          {findCurrentBanner.title}
        </CustomTypography>
      </div>

      <div id="install_sticky">
        <CustomLink
          target="_blank"
          id={findCurrentBanner.btnData.btnUrl}
          href={findCurrentBanner.btnData.btnUrl}
          style={{
            background: backgroundHandler(findCurrentBanner.btnData.color),
            borderColor: COLORS_LIST.Neutral_Surface,
          }}
          className="rounded-full w-fit px-4 py-3 h-[38px] flex items-center justify-center gap-2 relative z-10"
        >
          <CustomTypography fontSize="Lable_Medium" color="White">
            {findCurrentBanner.btnData.btnLabel}
          </CustomTypography>
        </CustomLink>
      </div>
    </div>
  );
};

export default FooterNavLink;
