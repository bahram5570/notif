import emptyDr from '@assets/images/clinicLanding/emptyDr.webp';
import { fileImageUrl } from '@services/http';

import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import { DoctorHeadingProps } from '../types';

const DoctorHeading = (props: DoctorHeadingProps) => {
  return (
    <section className="[background:linear-gradient(245deg,_#FFF_24.63%,_#FFEEE9_90.72%)] px-4 pb-0 [clip-path:ellipse(120%_100%_at_50%_100%)] scale-y-[-1] min-h-[190px]">
      <div className="scale-y-[-1] grid grid-cols-2 items-center">
        <div className="border-r-1 pr-4 grid gap-y-2" style={{ borderRight: '1px solid #D0D0D0' }}>
          <CustomTypography fontSize="Lable_Large" tagType="h2" style={{ color: COLORS_LIST.Surface_InverseSurface }}>
            {props.name}
          </CustomTypography>
          <CustomTypography fontSize="Body_Small" tagType="p" style={{ color: COLORS_LIST.Surface_InverseSurface }}>
            {props.speciality}
          </CustomTypography>
          <CustomTypography fontSize="Body_Small" tagType="p" style={{ color: COLORS_LIST.Surface_InverseSurface }}>
            ش .ن: {props.nezam}
          </CustomTypography>
        </div>
        <div className="min-h-[156px]">
          <CustomImage
            alt={props.name}
            height={0}
            width={500}
            quality={99}
            src={props.bioImage ? fileImageUrl + props.bioImage : emptyDr}
            className={`object-cover w-full h-full`}
          />
        </div>
      </div>
    </section>
  );
};
export default DoctorHeading;
