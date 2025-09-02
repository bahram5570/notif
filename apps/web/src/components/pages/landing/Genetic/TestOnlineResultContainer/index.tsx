'use client';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import TestOnlineWrapper from '../TestOnlineWrapper';
import useTestOnlineResult from './__hooks__/useTestOnlineResult';

const TestOnlineResultContainer = () => {
  const { data } = useTestOnlineResult();

  return (
    <TestOnlineWrapper>
      {data && (
        <div className="relative w-full h-[100dvh] pt-28">
          <div
            className={`rounded-[12px]`}
            style={{ border: `1px solid ${COLORS_LIST[data.header.color as keyof typeof COLORS_LIST]}` }}
          >
            <div
              style={{ backgroundColor: COLORS_LIST[data.header.color as keyof typeof COLORS_LIST] }}
              className="rounded-t-[10px] rounded-b-[0] !text-white"
            >
              <CustomTypography fontSize="Body_Medium" className="!text-center !text-white py-2">
                نتیجه تست شما:
              </CustomTypography>
            </div>
            <div className="bg-white rounded-b-[11px]">
              <CustomTypography fontSize="Title_Small" tagType="h2" className="py-2 text-center">
                {data.header.title}
              </CustomTypography>
              <CustomTypography fontSize="Body_Medium" className="!text-center pb-3">
                {data.header.description}
              </CustomTypography>
            </div>
          </div>
          <div
            className="rounded-[12px] py-4 px-3 text-center mt-4"
            style={{ border: `1px solid ${COLORS_LIST.Neutral_Surface}` }}
          >
            <CustomTypography fontSize="Lable_Large">ستاره عزیز سلام!</CustomTypography>
            <CustomTypography fontSize="Body_Medium" className="mt-2">
              {data.sections.intro}
            </CustomTypography>
            <CustomTypography fontSize="Lable_Large" className="mt-3">
              {data.sections.title}
            </CustomTypography>
            <CustomTypography fontSize="Body_Medium" className="mt-2">
              {data.sections.text}
            </CustomTypography>
            <div className="flex justify-center gap-11 mt-4">
              {data.sections.items.map((item, i) => {
                return (
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
                );
              })}
            </div>
            <CustomTypography fontSize="Body_Medium" className="mt-6 mb-2">
              {data.sections.textBottom}
            </CustomTypography>
          </div>

          <div className="absolute left-0 right-0 bottom-8">
            <CustomLink
              href="/landing/genetic/testOnline"
              className="w-fit px-[62px] py-[12px] rounded-full flex justify-self-center"
              style={{ backgroundColor: COLORS_LIST.Primary_Primary }}
            >
              <CustomTypography fontSize="Lable_Medium" color={'White'}>
                متوجه شدم
              </CustomTypography>
            </CustomLink>
          </div>
        </div>
      )}
    </TestOnlineWrapper>
  );
};

export default TestOnlineResultContainer;
