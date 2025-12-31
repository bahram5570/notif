import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { Section2Props } from './types';

const Section2 = ({ section }: Section2Props) => {
  return (
    <div className="rounded-[12px] pt-4 pb-6 px-3 lg:px-4 text-center mt-4 border !border-impo_Surface_SurfaceVariant">
      <CustomTypography fontSize="Lable_Large" className="!text-impo_Neutral_OnBackground">
        باید چکار کنم؟
      </CustomTypography>
      <div className="h-[1px] w-full bg-impo_Surface_SurfaceVariant my-[12px]"></div>

      {section.map((item, i) => (
        <div key={i} className="mt-6 first:mt-1">
          <div className="flex gap-x-3 items-center mb-[10px]">
            <div className="w-[64px] h-[64px]">
              <CustomImage
                src={item.icon}
                width={9999}
                height={9999}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CustomTypography fontSize="Lable_Medium" className="!text-impo_Neutral_OnBackground">
              {item.title}
            </CustomTypography>
          </div>
          <CustomTypography fontSize="Body_Medium" className="text-right !text-impo_Neutral_OnBackground">
            {item.text}
          </CustomTypography>

          {i === 0 && (
            <CustomLink
              href={'https://weareimpo.ir/referal?type=220&id=18'}
              className="mt-4 rounded-full w-full block py-[8px] bg-impo_Primary_Primary"
            >
              <CustomTypography fontSize="Lable_Medium" className="!text-impo_Primary_OnPrimary">
                مشاوره با متخصص ژنتیک ایمپو
              </CustomTypography>
            </CustomLink>
          )}
        </div>
      ))}
    </div>
  );
};

export default Section2;
