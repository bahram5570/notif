'use client';

import { useMemo, useRef, useState } from 'react';

import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import { AlphabetBtnsTypes } from './types';

const AlphabetBtns = ({ title, description, list, textColor, bgColor1, bgColor2 }: AlphabetBtnsTypes) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToBtnsHandler = () => {
    const el = ref.current;

    if (el) {
      const elPosition = el.getBoundingClientRect().top;
      const top = elPosition + window.scrollY;

      window.scrollTo({ top, behavior: 'smooth' });
      setIsScrolled(false);
    }
  };

  const selectHandler = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      const elPosition = el.getBoundingClientRect().top;
      const top = elPosition + window.scrollY - 120;

      window.scrollTo({ top, behavior: 'smooth' });
      setIsScrolled(true);
    }
  };

  const alphabetsList = useMemo(() => {
    const dataEntries = Object.entries(list);
    const result = dataEntries.map((item) => ({
      label: item[1].category,
      value: item[0],
    }));

    return result;
  }, []);

  return (
    <>
      {isScrolled && (
        <div className="fixed right-2 bottom-4 cursor-pointer" onClick={scrollToBtnsHandler}>
          <CustomImage width={100} height={100} alt="impo" src="/assets/images/toUp.webp" />
        </div>
      )}

      <div className="w-full flex flex-col gap-2 md:gap-3  mx-auto px-3 pb-12" ref={ref}>
        <CustomTypography tagType="h2" fontSize="Headline_Medium" color={'Neutral_OnBackground'}>
          {title}
        </CustomTypography>

        <CustomTypography fontSize="Body_Large" color={'Surface_InverseSurface'}>
          {description}
        </CustomTypography>

        <div
          className="w-full sm:max-w-[390px] mx-auto rounded-2xl overflow-hidden "
          style={{ backgroundColor: COLORS_LIST[bgColor1] }}
        >
          <div
            className=" rounded-b-[100%] pt-4 pb-2 text-center h-[70px]"
            style={{ background: COLORS_LIST[bgColor2] }}
          >
            <CustomTypography fontSize="Title_Small" color={textColor}>
              فیلتر براساس حروف
            </CustomTypography>
          </div>

          <div className="grid grid-cols-5 gap-2 px-2 py-2">
            {alphabetsList.map((item) => {
              return (
                <div
                  key={item.value}
                  onClick={() => selectHandler(item.value)}
                  style={{ backgroundColor: COLORS_LIST[bgColor2] }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center cursor-pointer"
                >
                  <CustomTypography
                    color={textColor}
                    fontSize="Title_Small"
                    className="!underline !underline-offset-[6px]"
                  >
                    {item.label}
                  </CustomTypography>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AlphabetBtns;
