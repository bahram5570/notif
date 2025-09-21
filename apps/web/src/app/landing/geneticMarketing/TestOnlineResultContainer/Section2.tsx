import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import { Section2Props } from './types';

const Section2 = ({ section }: Section2Props) => {
  return (
    <div
      className="rounded-[12px] pt-4 pb-6 px-3 text-center mt-4"
      style={{ border: `1px solid ${COLORS_LIST.Neutral_Surface}` }}
    >
      <CustomTypography fontSize="Lable_Large">باید چکار کنم؟</CustomTypography>
      <div className="h-[1px] w-full bg-[#F2F4FB] my-[12px]"></div>

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
            <CustomTypography fontSize="Lable_Medium">{item.title}</CustomTypography>
          </div>
          <CustomTypography fontSize="Body_Medium" className="text-right">
            {item.text}
          </CustomTypography>

          {i === 0 && (
            <CustomLink
              href={'#'}
              className="mt-4 rounded-full w-full block py-[8px]"
              style={{ backgroundColor: COLORS_LIST.Primary_PrimaryContainer }}
            >
              <CustomTypography fontSize="Lable_Medium" style={{ color: `${COLORS_LIST.Primary_Primary}` }}>
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
