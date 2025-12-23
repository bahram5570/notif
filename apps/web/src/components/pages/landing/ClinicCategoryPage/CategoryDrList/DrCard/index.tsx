'use client';

import OnlineIcon from '@assets/icons/clinicLanding/online.svg';
import StarIcon from '@assets/icons/clinicLanding/star.svg';
import TimeIcon from '@assets/icons/clinicLanding/time.svg';
import UsersIcon from '@assets/icons/clinicLanding/users.svg';
import emptyProfile from '@assets/images/clinicLanding/emptyProfile.webp';
import { fileImageUrl } from '@services/http';
import { StaticImageData } from 'next/image';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import { DrCardProps } from './types';

const DrCard = ({ active, id, name, nezam, rate, rateCount, image, speciality, params }: DrCardProps) => {
  let imageLink: StaticImageData | string = emptyProfile;

  if (image) {
    if (image.includes('http')) {
      imageLink = image;
    } else {
      imageLink = fileImageUrl + image;
    }
  }
  return (
    <div className="rounded-xl px-3 pt-2 pb-4 bg-impo_Neutral_Surface">
      <div className="flex px-2 py-1 rounded-xl items-center gap-x-1 bg -impo_White">
        <div className="relative w-[48px] h-[48px]">
          <CustomImage alt={''} fill={true} src={imageLink} className="object-cover rounded-full h-full w-full" />
          {active && <OnlineIcon className="absolute left-0 bottom-0" />}
        </div>
        <div className="grid gap-y-1">
          <CustomTypography fontSize="Lable_Medium" tagType="h5" className="!text-impo_Neutral_OnBackground">
            {name}
          </CustomTypography>
          <div className="flex items-center gap-x-2">
            <CustomTypography fontSize="Body_Small" tagType="p" className="!text-impo_Surface_InverseSurface">
              {speciality}
            </CustomTypography>
            <span className="h-[18px] w-[1px] block bg-[#D0D0D0]"></span>
            <div>
              <CustomTypography fontSize="Body_Small" tagType="span" className="!text-impo_Surface_InverseSurface">
                ش.ن:
              </CustomTypography>
              <CustomTypography fontSize="Body_Small" tagType="span" className="!text-impo_Surface_InverseSurface">
                {nezam}
              </CustomTypography>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-x-2 mt-2 justify-around">
        <div className="grid p-1 justify-items-center">
          <TimeIcon className="mb-2" />
          <CustomTypography className="mb-1 !text-impo_Surface_OnSurfaceVariant" fontSize="Lable_Small" tagType="span">
            میانگین پاسخگویی
          </CustomTypography>
          <CustomTypography
            fontSize="Lable_MediumProminet"
            tagType="span"
            className="!text-impo_Surface_OnSurfaceVariant"
          >
            1 تا 2 ساعت
          </CustomTypography>
        </div>
        <div className="grid p-1  justify-items-center">
          <StarIcon className="mb-2" />
          <CustomTypography className="mb-1 !text-impo_Surface_OnSurfaceVariant" fontSize="Lable_Small" tagType="span">
            میانگین امتیازات
          </CustomTypography>
          <CustomTypography
            fontSize="Lable_MediumProminet"
            tagType="span"
            className="!text-impo_Surface_OnSurfaceVariant"
          >
            {rate || '-'}
          </CustomTypography>
        </div>
        <div className="grid p-1  justify-items-center">
          <UsersIcon className="mb-2" />
          <CustomTypography className="mb-1 !text-impo_Surface_OnSurfaceVariant" fontSize="Lable_Small" tagType="span">
            تعداد مشاوره ها
          </CustomTypography>
          <CustomTypography
            fontSize="Lable_MediumProminet"
            tagType="span"
            className="!text-impo_Surface_OnSurfaceVariant"
          >
            {rateCount || '-'}
          </CustomTypography>
        </div>
      </div>
      <CustomLink
        href={`/landing/clinic/${params}/${id}`}
        className="h-[32px] p-5 flex items-center justify-center rounded-full mt-3 !bg-impo_Primary_Primary"
      >
        <CustomTypography fontSize="Lable_Medium" className="!text-impo_Primary_OnPrimary">
          دریافت مشاوره
        </CustomTypography>
      </CustomLink>
    </div>
  );
};

export default DrCard;
