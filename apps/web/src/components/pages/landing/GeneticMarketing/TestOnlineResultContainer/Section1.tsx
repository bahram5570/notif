import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import { Section1Props } from './types';

const Section1 = ({ section, id, color }: Section1Props) => {
  return (
    <div
      className="rounded-[12px] py-4 px-3 text-center mt-4"
      style={{ border: `1px solid ${COLORS_LIST.Neutral_Surface}` }}
    >
      <CustomTypography fontSize="Lable_Large">دوست عزیز سلام!</CustomTypography>
      <CustomTypography fontSize="Body_Medium" className="mt-2">
        {section.intro}
      </CustomTypography>

      <CustomTypography
        fontSize="Lable_Large"
        className="mt-3"
        style={{ color: COLORS_LIST[color as keyof typeof COLORS_LIST] }}
      >
        {section.title}
      </CustomTypography>

      <CustomTypography fontSize="Body_Medium" className="mt-2">
        {section.text}
      </CustomTypography>

      <div className="flex justify-center gap-11 mt-4">
        {section.items.map((item, i) => (
          <div className="grid justify-items-center gap-y-2" key={i}>
            <div className="w-[58px] h-[58px]">
              <CustomImage
                src={item.icon}
                width={9999}
                height={9999}
                alt={item.icon}
                className="w-full h-full object-fill"
              />
            </div>
            <CustomTypography fontSize="Body_Medium" className="mt-2">
              {item.title}
            </CustomTypography>
          </div>
        ))}
      </div>

      <CustomTypography fontSize="Body_Medium" className="mt-6 mb-2">
        {section.textBottom}
      </CustomTypography>

      {id === 1 && (
        <div
          className="p-3 rounded-xl mt-6 text-center"
          style={{
            border: `1px solid ${COLORS_LIST.Warning_Warning}`,
            background: `${COLORS_LIST.Warning_Warning}20`,
          }}
        >
          <CustomTypography fontSize="Lable_Large">باید نگران باشم؟</CustomTypography>
          <CustomTypography fontSize="Body_Medium" className="mt-2">
            این به معنی قطعیت مشکل نیست، ولی نشونه‌ی مهمیه که لازمه دقیق‌تر بررسی بشه تا بتونی با خیال راحت تصمیم بگیری.
          </CustomTypography>
        </div>
      )}
    </div>
  );
};

export default Section1;
