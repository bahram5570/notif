import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import { Section1Props } from './types';

const Section1 = ({ section, color }: Section1Props) => {
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
      <div className="w-full flex justify-center mt-4">
        <CustomLink
          href="/landing/geneticMarketing/solutions"
          className="w-full px-10 py-[12px] rounded-full flex justify-center"
          style={{ backgroundColor: COLORS_LIST.Primary_PrimaryContainer }}
        >
          <CustomTypography fontSize="Lable_Large" color={'Primary_Primary'}>
            راهکارها رو از اینجا ببین
          </CustomTypography>
        </CustomLink>
      </div>
    </div>
  );
};

export default Section1;
