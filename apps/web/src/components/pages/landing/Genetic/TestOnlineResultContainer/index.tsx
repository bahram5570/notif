'use client';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { COLORS_LIST } from '@theme/colors';

import TestOnlineResultWrapper from './TestOnlineResultWrapper';
import useTestOnlineResult from './__hooks__/useTestOnlineResult';

const TestOnlineResultContainer = () => {
  const { data } = useTestOnlineResult();

  return (
    <TestOnlineResultWrapper>
      {data && (
        <div className="relative w-full h-full pt-28">
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
              {data.section1.intro}
            </CustomTypography>
            <CustomTypography fontSize="Lable_Large" className="mt-3">
              {data.section1.title}
            </CustomTypography>
            <CustomTypography fontSize="Body_Medium" className="mt-2">
              {data.section1.text}
            </CustomTypography>
            <div className="flex justify-center gap-11 mt-4">
              {data.section1.items.map((item, i) => {
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
              {data.section1.textBottom}
            </CustomTypography>
          </div>
          <div
            className="rounded-[12px] pt-4 pb-6 px-3 text-center mt-4"
            style={{ border: `1px solid ${COLORS_LIST.Neutral_Surface}` }}
          >
            <CustomTypography fontSize="Lable_Large">باید چکار کنم؟</CustomTypography>
            {/* divider */}
            <div className="h-[1px] w-full bg-[#F2F4FB] my-[12px]"></div>
            <div className="mt-1">
              <div className="flex gap-x-3 items-center mb-[10px]">
                <div className="w-[64px] h-[64px]">
                  <CustomImage
                    src={data.section2[0].icon}
                    width={9999}
                    height={9999}
                    alt={data.section2[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CustomTypography fontSize="Lable_Medium">{data.section2[0].title}</CustomTypography>
              </div>
              <CustomTypography fontSize="Body_Medium" className="text-right">
                {data.section2[0].text}
              </CustomTypography>
              <CustomLink
                href={'#'}
                className="mt-4 rounded-xl w-full block py-[8px]"
                style={{ backgroundColor: COLORS_LIST.Primary_PrimaryContainer }}
              >
                <CustomTypography fontSize="Lable_Medium" style={{ color: `${COLORS_LIST.Primary_Primary}` }}>
                  مشاوره با متخصص ژنتیک ایمپو
                </CustomTypography>
              </CustomLink>
            </div>
            <div className="mt-6">
              <div className="flex gap-x-3 items-center mb-[10px]">
                <div className="w-[64px] h-[64px]">
                  <CustomImage
                    src={data.section2[1].icon}
                    width={9999}
                    height={9999}
                    alt={data.section2[1].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CustomTypography fontSize="Lable_Medium">{data.section2[1].title}</CustomTypography>
              </div>
              <CustomTypography fontSize="Body_Medium" className="text-right">
                {data.section2[1].text}
              </CustomTypography>
            </div>
            <div className="mt-6">
              <div className="flex gap-x-3 items-center mb-[10px]">
                <div className="w-[64px] h-[64px]">
                  <CustomImage
                    src={data.section2[2].icon}
                    width={9999}
                    height={9999}
                    alt={data.section2[2].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CustomTypography fontSize="Lable_Medium">{data.section2[2].title}</CustomTypography>
              </div>
              <CustomTypography fontSize="Body_Medium" className="text-right">
                {data.section2[2].text}
              </CustomTypography>
            </div>
          </div>
          <div
            className="rounded-[12px] pt-4 pb-6 px-3 text-center mt-4"
            style={{ border: `1px solid ${COLORS_LIST.Neutral_Surface}` }}
          >
            <div className="mt-1">
              <div className="flex gap-x-3 items-center mb-[10px]">
                <div className="w-[64px] h-[64px]">
                  <CustomImage
                    src={data.section3[0].icon}
                    width={9999}
                    height={9999}
                    alt={data.section3[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CustomTypography fontSize="Lable_Medium">{data.section3[0].title}</CustomTypography>
              </div>
              <CustomTypography fontSize="Body_Medium" className="text-right">
                {data.section3[0].text}
              </CustomTypography>
            </div>
            <div className="mt-6">
              <div className="flex gap-x-3 items-center mb-[10px]">
                <div className="w-[56px] h-[56px]">
                  <CustomImage
                    src={data.section3[1].icon}
                    width={9999}
                    height={9999}
                    alt={data.section3[1].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid justify-items-start">
                  <CustomTypography fontSize="Lable_Medium">{data.section3[1].title}</CustomTypography>
                  <CustomTypography fontSize="Body_Medium" className="text-right">
                    {data.section3[1].text}
                  </CustomTypography>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex gap-x-3 items-center mb-[10px]">
                <div className="w-[56px] h-[56px]">
                  <CustomImage
                    src={data.section3[2].icon}
                    width={9999}
                    height={9999}
                    alt={data.section3[2].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid justify-items-start">
                  <CustomTypography fontSize="Lable_Medium">{data.section3[2].title}</CustomTypography>
                  <CustomTypography fontSize="Body_Medium" className="text-right">
                    {data.section3[2].text}
                  </CustomTypography>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
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
    </TestOnlineResultWrapper>
  );
};

export default TestOnlineResultContainer;
