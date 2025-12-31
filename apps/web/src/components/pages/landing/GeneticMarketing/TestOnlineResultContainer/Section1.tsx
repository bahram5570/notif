import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { Section1Props } from './types';

const Section1 = ({ section, color }: Section1Props) => {
  const geneticUserData = JSON.parse(localStorage.getItem('geneticUserData') || '');

  return (
    <div className="rounded-[12px] py-4 px-3 text-center mt-4 border !border-impo_Surface_SurfaceVariant">
      <CustomTypography fontSize="Lable_Large" className="!text-impo_Neutral_OnBackground">
        دوست عزیز سلام!
      </CustomTypography>
      <CustomTypography fontSize="Body_Medium" className="mt-2 !text-impo_Neutral_OnBackground">
        {section.intro}
      </CustomTypography>

      <CustomTypography fontSize="Lable_Large" className={`mt-3 !text-impo_${color}`}>
        {section.title}
      </CustomTypography>

      <CustomTypography fontSize="Body_Medium" className="mt-2 !text-impo_Neutral_OnBackground">
        {section.text}
      </CustomTypography>
      <div className="w-full flex justify-center mt-4">
        <CustomLink
          href="/landing/geneticMarketing/solutions"
          className="w-full px-10 py-[12px] rounded-full flex justify-center !bg-impo_Primary_Primary"
        >
          <CustomTypography fontSize="Lable_Large" className="!text-impo_Primary_OnPrimary">
            {geneticUserData.womanStatus === 'pregnancy'
              ? 'برای تجربه یک بارداری و اقدام امن کلیک کن '
              : 'راهکارها رو از اینجا ببین'}
          </CustomTypography>
        </CustomLink>
      </div>
    </div>
  );
};

export default Section1;
