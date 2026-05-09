'use client';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { scrollToIdHandler } from '@utils/navigation';

import { DOWNLOAD_APP_SECTION_ID } from '@components/DownloadApp/DownloadAppWomen/constants';
import CustomButton from '@components/ui/CustomButton';
import CustomImage from '@components/ui/CustomImage';
import { useSystem } from '@repo/core/hooks/useSystem';

import { TRACKER_HEADING_DATA } from './constants';

const MenShareExperienceHeading = () => {
  const { breakPoint } = useSystem();
  return (
    <div className="relative w-full h-[540px] md:h-[520px] lg:h-[680px] xl:h-[750px] flex flex-col items-end justify-center overflow-hidden">
      <div className="absolute left-0 right-0 bottom-0 flex justify-center">
        <div className="w-[700dvw] h-[700dvw] min-w-[700dvw] min-h-[700dvw] rounded-full flex items-end overflow-hidden">
          <div
            style={{ background: ' linear-gradient(to bottom right, #8CDDFE, #B5E7FB, #D1E3FE, #CDDAFD)' }}
            className={`
                        w-[100dvw]
                        h-[540px]
                        md:h-[520px]
                        lg:h-[680px]
                        xl:h-[750px]
                        mx-auto
                        flex
                        items-center
                        justify-center
                        !bg-cover
                        !bg-center
                        
                      `}
          >
            <div className="h-full w-full flex flex-col md:flex-row gap-2 md:gap-10 xl:gap-14 pt-[100px] md:pt-[160px] lg:pt-[100px]">
              <div className="w-full md:w-1/2 md:pt-[180px] px-4 md:pl-0 md:pr-[100px] xl:pr-[100px] 2xl:pr-[300px]">
                <div className="relative flex flex-col items-center md:items-start justify-center md:justify-start">
                  <CustomTypography
                    tagType="h1"
                    fontSize={breakPoint.tablet ? 'Headline_Medium' : 'Headline_Large'}
                    className="py-2 lg:pt-2 lg:pb-1 text-center md:text-right !text-impo_Neutral_OnBackground dark:!text-impo_Black"
                  >
                    تالار اشتراک تجربه‌ی آقایان
                  </CustomTypography>

                  <CustomTypography
                    tagType="span"
                    fontSize="Body_Large"
                    className="text-center md:text-right !text-impo_Surface_InverseSurface dark:!text-impo_Surface_InverseOnSurface"
                  >
                    یه دورهمیِ گرم مردونه…!
                  </CustomTypography>

                  <CustomButton
                    onClick={() => scrollToIdHandler(DOWNLOAD_APP_SECTION_ID)}
                    fontSize={breakPoint.laptop ? 'Lable_Large' : 'Title_Medium'}
                    className="
                    !w-[170px] 
                    lg:!w-[270px] 
                    h-[40px] 
                    lg:h-[60px] 
                    !mt-2 
                    lg:!mt-6 
                    !mb-8 
                    !bg-impo_PrimaryMan_PrimaryMan
                    !border-impo_PrimaryMan_PrimaryMan 
                    !text-impo_Primary_OnPrimary
                    hidden
                    lg:flex
                    md:flex
                  "
                  >
                    دانلود ایمپو آقایان
                  </CustomButton>
                </div>
              </div>
              <div className="w-full h-full md:w-1/2 flex justify-center md:justify-start md:pl-5 xl:pr-[40px] px-4 lg:px-0">
                <div
                  style={{ alignSelf: 'flex-end' }}
                  className={`relative w-full max-w-[440px] md:max-w-[400px] lg:max-w-[580px] `}
                >
                  <CustomImage
                    width={0}
                    height={0}
                    alt="impo"
                    src={TRACKER_HEADING_DATA.image}
                    sizes="100vw"
                    quality={100}
                    priority={true}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenShareExperienceHeading;
