'use client';

import emptyDr from '@assets/images/clinicLanding/emptyDr.webp';
import { fileImageUrl } from '@services/http';

import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import { useSystem } from '@repo/core/hooks/useSystem';

import { DoctorHeadingProps } from '../types';

const DoctorHeading = (props: DoctorHeadingProps) => {
  const { breakPoint } = useSystem();

  return (
    <section className="dark:!bg-impo_Neutral_Surface dark:!bg-none bg-[linear-gradient(245deg,_#FFF_24.63%,_#FFEEE9_90.72%)] px-4 pb-0 [clip-path:ellipse(120%_100%_at_50%_100%)] min-h-[190px] scale-y-[-1]  lg:max-h-80">
      <div className="scale-y-[-1] grid grid-cols-2 items-center lg:h-72 lg:pr-6">
        <div className="border-r-1 pr-4 grid gap-y-3" style={{ borderRight: '1px solid #D0D0D0' }}>
          <CustomTypography
            fontSize={breakPoint.desktop ? 'Title_Medium' : 'Lable_Large'}
            tagType="h2"
            className="!text-impo_Surface_InverseSurface"
          >
            {props.name}
          </CustomTypography>
          <div className="grid gap-y-2">
            <CustomTypography
              fontSize={breakPoint.desktop ? 'Body_Large' : 'Body_Small'}
              tagType="p"
              className="!text-impo_Surface_InverseSurface"
            >
              {props.speciality}
            </CustomTypography>
            <CustomTypography
              fontSize={breakPoint.desktop ? 'Body_Large' : 'Body_Small'}
              tagType="p"
              className="!text-impo_Surface_InverseSurface"
            >
              ش .ن: {props.nezam}
            </CustomTypography>
          </div>
        </div>

        <div className="min-h-[156px] lg:h-auto">
          <CustomImage
            alt={props.name}
            height={0}
            width={500}
            src={props.bioImage ? fileImageUrl + props.bioImage : emptyDr}
            className={`object-cover w-full h-full lg:scale-75`}
          />
        </div>
      </div>
    </section>
  );
};
export default DoctorHeading;
