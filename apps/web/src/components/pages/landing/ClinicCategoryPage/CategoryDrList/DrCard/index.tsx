'use client';

import OnlineIcon from '@assets/icons/clinicLanding/online.svg';
import StarIcon from '@assets/icons/clinicLanding/star.svg';
import TimeIcon from '@assets/icons/clinicLanding/time.svg';
import UsersIcon from '@assets/icons/clinicLanding/users.svg';
import emptyProfile from '@assets/images/clinicLanding/emptyProfile.webp';
import { fileImageUrl } from '@services/http';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import { DrCardProps } from './types';

const DrCard = ({ active, id, name, nezam, rate, rateCount, image, speciality, params }: DrCardProps) => {
  return (
    <div className="rounded-xl px-3 pt-2 pb-4" style={{ backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}>
      <div className="flex px-2 py-1 rounded-xl items-center gap-x-1" style={{ backgroundColor: COLORS_LIST.White }}>
        <div className="relative w-[48px] h-[48px]">
          <CustomImage
            alt={''}
            height={48}
            width={48}
            quality={99}
            src={image ? fileImageUrl + image : emptyProfile}
            className="object-cover rounded-full h-full w-full"
          />
          {active && <OnlineIcon className="absolute left-0 bottom-0" />}
        </div>
        <div className="grid gap-y-1">
          <CustomTypography fontSize="Lable_Medium" tagType="h5" style={{ color: COLORS_LIST.Neutral_OnBackground }}>
            {name}
          </CustomTypography>
          <div className="flex items-center gap-x-2">
            <CustomTypography fontSize="Body_Small" tagType="p" style={{ color: COLORS_LIST.Surface_InverseSurface }}>
              {speciality}
            </CustomTypography>
            <span className="h-[18px] w-[1px] block bg-[#D0D0D0]"></span>
            <div>
              <CustomTypography
                fontSize="Body_Small"
                tagType="span"
                style={{ color: COLORS_LIST.Surface_InverseSurface }}
              >
                ش.ن:
              </CustomTypography>
              <CustomTypography
                fontSize="Body_Small"
                tagType="span"
                style={{ color: COLORS_LIST.Surface_InverseSurface }}
              >
                {nezam}
              </CustomTypography>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-x-2 mt-2 justify-around">
        <div className="grid p-1 justify-items-center">
          <TimeIcon className="mb-2" />
          <CustomTypography
            className="mb-1"
            fontSize="Lable_Small"
            tagType="span"
            style={{ color: COLORS_LIST.Surface_OnSurfaceVariant }}
          >
            میانگین پاسخگویی
          </CustomTypography>
          <CustomTypography
            fontSize="Lable_MediumProminet"
            tagType="span"
            style={{ color: COLORS_LIST.Surface_OnSurfaceVariant }}
          >
            1 تا 2 ساعت
          </CustomTypography>
        </div>
        <div className="grid p-1  justify-items-center">
          <StarIcon className="mb-2" />
          <CustomTypography
            className="mb-1"
            fontSize="Lable_Small"
            tagType="span"
            style={{ color: COLORS_LIST.Surface_OnSurfaceVariant }}
          >
            میانگین امتیازات
          </CustomTypography>
          <CustomTypography
            fontSize="Lable_MediumProminet"
            tagType="span"
            style={{ color: COLORS_LIST.Surface_OnSurfaceVariant }}
          >
            {rate || '-'}
          </CustomTypography>
        </div>
        <div className="grid p-1  justify-items-center">
          <UsersIcon className="mb-2" />
          <CustomTypography
            className="mb-1"
            fontSize="Lable_Small"
            tagType="span"
            style={{ color: COLORS_LIST.Surface_OnSurfaceVariant }}
          >
            تعداد مشاوره ها
          </CustomTypography>
          <CustomTypography
            fontSize="Lable_MediumProminet"
            tagType="span"
            style={{ color: COLORS_LIST.Surface_OnSurfaceVariant }}
          >
            {rateCount || '-'}
          </CustomTypography>
        </div>
      </div>
      <CustomLink
        href={`/landing/clinic/${params}/${id}`}
        className="h-[32px] p-5 flex items-center justify-center rounded-full mt-3"
        style={{ backgroundColor: COLORS_LIST.Primary_Primary }}
      >
        <CustomTypography fontSize="Lable_Medium" color="Primary_OnPrimary">
          دریافت مشاوره
        </CustomTypography>
      </CustomLink>
    </div>
  );
};

export default DrCard;
