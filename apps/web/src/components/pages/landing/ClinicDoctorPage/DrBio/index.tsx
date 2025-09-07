import MonyIcon from '@assets/icons/clinicLanding/mony.svg';
import StarIcon from '@assets/icons/star.svg';

import style from '../../ClinicCategoryPage/CategoryDoctorContents/styles.module.css';

import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import { DrBioProps } from '../types';

const DrBio = ({ clinicPrice, rate, ticketCount, htmlDescription, isActive }: DrBioProps) => {
  return (
    <section className="mt-4 mx-7">
      <CustomTypography fontSize="Lable_Large" tagType="h3" style={{ color: COLORS_LIST.Neutral_OnBackground }}>
        بیوگرافی پزشک
      </CustomTypography>
      <span className="w-full block h-[1px] my-3 mx-0" style={{ background: COLORS_LIST.Neutral_Surface }}></span>
      <div dangerouslySetInnerHTML={{ __html: htmlDescription }} className={style.container}></div>
      <ul className="mr-8">
        <CustomTypography
          fontSize="Body_Medium"
          tagType="li"
          className="list-disc"
          style={{ color: COLORS_LIST.Neutral_OnBackground }}
        >
          <strong>{ticketCount}</strong> ویزیت در کلینیک ایمپو
        </CustomTypography>
      </ul>
      <div className="grid gap-x-3 mt-6 grid-cols-2">
        <div
          className="px-8 py-[9px] rounded-lg grid justify-items-center text-center"
          style={{ backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
        >
          <StarIcon className="fill-[#FFCC00] w-[20px] h-[20px] mb-2" />
          <CustomTypography
            fontSize="Body_Medium"
            tagType="h6"
            className="mb-1"
            style={{ color: COLORS_LIST.Neutral_OnBackground }}
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
        <div
          className="px-8 py-[9px] rounded-lg grid justify-items-center text-center"
          style={{ backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
        >
          <MonyIcon className="w-[20px] h-[20px] mb-2" />
          <CustomTypography
            fontSize="Body_Medium"
            tagType="h6"
            className="mb-1"
            style={{ color: COLORS_LIST.Neutral_OnBackground }}
          >
            هزینه مشاوره{' '}
          </CustomTypography>
          <CustomTypography
            fontSize="Lable_MediumProminet"
            tagType="span"
            style={{ color: COLORS_LIST.Surface_OnSurfaceVariant }}
          >
            {!isActive ? 'دکتر موقتا پاسخگو نیست' : clinicPrice.toLocaleString('fa-IR') + ' تومان '}{' '}
          </CustomTypography>
        </div>
      </div>
    </section>
  );
};
export default DrBio;
