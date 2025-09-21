import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import { Section3Props } from './types';

const Section3 = ({ section, id }: Section3Props) => {
  return (
    <div
      className="rounded-[12px] pt-4 pb-6 px-3 text-center mt-4"
      style={{ border: `1px solid ${COLORS_LIST.Neutral_Surface}` }}
    >
      <div className="mt-1">
        <div className="flex gap-x-3 items-center mb-[10px]">
          <div className="w-[64px] h-[64px]">
            <CustomImage
              src={section[0].icon}
              width={9999}
              height={9999}
              alt={section[0].title}
              className="w-full h-full object-cover"
            />
          </div>
          <CustomTypography fontSize="Lable_Medium">{section[0].title}</CustomTypography>
        </div>
        <CustomTypography fontSize="Body_Medium" className="text-right">
          {section[0].text}
        </CustomTypography>
      </div>

      {id !== 1 && (
        <>
          {section.slice(1).map((item, i) => (
            <div key={i} className="mt-6">
              <div className="grid grid-cols-[auto_1fr] gap-x-3 items-center mb-[10px]">
                <div className="w-[56px] h-[56px]">
                  <CustomImage
                    src={item.icon}
                    width={9999}
                    height={9999}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid justify-items-start">
                  <CustomTypography fontSize="Lable_Medium">{item.title}</CustomTypography>
                  <CustomTypography fontSize="Body_Medium" className="text-right">
                    {item.text}
                  </CustomTypography>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Section3;
