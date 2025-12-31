import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import { Section1Props } from './types';

const Section1 = ({ section, id }: Section1Props) => {
  return (
    <div className="rounded-[12px] py-4 px-3 lg:px-4 text-center mt-4 border !border-impo_Surface_SurfaceVariant">
      <CustomTypography fontSize="Lable_Large" className="!text-impo_Neutral_OnBackground">
        دوست عزیز سلام!
      </CustomTypography>
      <CustomTypography fontSize="Body_Medium" className="mt-2 !text-impo_Neutral_OnBackground">
        {section.intro}
      </CustomTypography>

      <CustomTypography fontSize="Lable_Large" className="mt-3 !text-impo_Neutral_OnBackground">
        {section.title}
      </CustomTypography>

      <CustomTypography fontSize="Body_Medium" className="mt-2 !text-impo_Neutral_OnBackground">
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
            <CustomTypography fontSize="Body_Medium" className="mt-2 !text-impo_Neutral_OnBackground">
              {item.title}
            </CustomTypography>
          </div>
        ))}
      </div>

      <CustomTypography fontSize="Body_Medium" className="mt-6 mb-2 !text-impo_Neutral_OnBackground">
        {section.textBottom}
      </CustomTypography>

      {id === 1 && (
        <div className="p-3 rounded-xl mt-6 text-center border !border-impo_Warning_Warning !bg-impo_Yellow_200">
          <CustomTypography fontSize="Lable_Large" className="!text-impo_Neutral_OnBackground dark:!text-impo_Black">
            باید نگران باشم؟
          </CustomTypography>
          <CustomTypography
            fontSize="Body_Medium"
            className="mt-2 !text-impo_Neutral_OnBackground dark:!text-impo_Black"
          >
            این به معنی قطعیت مشکل نیست، ولی نشونه‌ی مهمیه که لازمه دقیق‌تر بررسی بشه تا بتونی با خیال راحت تصمیم بگیری.
          </CustomTypography>
        </div>
      )}
    </div>
  );
};

export default Section1;
