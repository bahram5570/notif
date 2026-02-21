import MonyIcon from '@assets/icons/clinicLanding/mony.svg';
import StarIcon from '@assets/icons/star.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { toPersianNumbers } from '@utils/numbers';

import style from '../../../../pages/articleId/ArticleIdPageContainer/ArticleIdContents/styles.module.css';

import { DrBioProps } from '../types';

const DrBio = ({ clinicPrice, rate, ticketCount, htmlDescription, isActive }: DrBioProps) => {
  return (
    <section className="mt-4 mx-7">
      <CustomTypography fontSize="Lable_Large" tagType="h3" className="!text-impo_Neutral_OnBackground">
        بیوگرافی پزشک
      </CustomTypography>
      <span className="w-full block h-[1px] my-3 mx-0 bg-impo_Neutral_Surface"></span>
      <div
        dangerouslySetInnerHTML={{ __html: toPersianNumbers(htmlDescription) }}
        className={`${style.container} !text-impo_Neutral_OnBackground`}
      ></div>
      <ul className="mr-8">
        <CustomTypography fontSize="Body_Medium" tagType="li" className="list-disc !text-impo_Neutral_OnBackground">
          <strong>{ticketCount}</strong> ویزیت در کلینیک ایمپو
        </CustomTypography>
      </ul>
      <div className="grid gap-x-3 mt-6 grid-cols-2">
        <div className="px-8 py-[9px] rounded-lg lg:rounded-3xl grid justify-items-center text-center bg-impo_Neutral_Surface">
          <StarIcon className="fill-[#FFCC00] w-[20px] h-[20px] mb-2" />
          <CustomTypography fontSize="Body_Medium" tagType="h6" className="mb-1 !text-impo_Neutral_OnBackground">
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
        <div className="px-8 py-[9px] rounded-lg lg:rounded-3xl grid justify-items-center text-center bg-impo_Neutral_Surface">
          <MonyIcon className="w-[20px] h-[20px] mb-2" />
          <CustomTypography fontSize="Body_Medium" tagType="h6" className="mb-1 !text-impo_Neutral_OnBackground">
            هزینه مشاوره
          </CustomTypography>
          <CustomTypography
            fontSize="Lable_MediumProminet"
            tagType="span"
            className="!text-impo_Surface_OnSurfaceVariant"
          >
            {!isActive ? 'دکتر موقتا پاسخگو نیست' : clinicPrice.toLocaleString('fa-IR') + ' تومان '}{' '}
          </CustomTypography>
        </div>
      </div>
    </section>
  );
};
export default DrBio;
