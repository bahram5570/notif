'use client';

import WomenPageLayout from '@components/WomenPageLayout';
import Dark_Typography from '@components/ui/Dark_Typography';

import LinkGenerator from './LinkGenerator';
import { LINK_SOCIAL_LIST } from './constants';

const AboutUsPage = () => {
  return (
    <WomenPageLayout
      paddingTop={0}
      rightElement="BackButton"
      rightElementScript="درباره ما"
      className="flex flex-col items-center justify-center gap-6 relative  z-0 bg-impo_Neutral_Background"
    >
      <div className="flex flex-col justify-center items-center w-3/4 gap-9">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-6">
              <Dark_Typography className="text-impo_Primary_Primary" fontSize="Headline_Large">
                Impo
              </Dark_Typography>

              <div className="flex flex-col items-center justify-center">
                <Dark_Typography className="text-impo_Surface_OnSurfaceVariant" fontSize="Lable_Large">
                  از دل این جمله بیرون اومده
                </Dark_Typography>

                <Dark_Typography className="text-impo_Primary_Primary" fontSize="Headline_Medium">
                  I am important
                </Dark_Typography>
                <Dark_Typography className="text-impo_Surface_OnSurfaceVariant" fontSize="Lable_Large">
                  یعنی من مهم هستم
                </Dark_Typography>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <Dark_Typography fontSize="Body_Medium" className="text-impo_Surface_OnSurfaceVariant">
              ایمپو در کنار شماست تا هر روز بهتون یادآوری کنه که باید بیشتر حواستون به خودتون باشه.
            </Dark_Typography>
            <Dark_Typography fontSize="Body_Medium" className="text-impo_Surface_OnSurfaceVariant">
              اینجاییم که با خودمون در صلح باشیم و سبک زندگیمون رو با تغییر نگرشمون تغییر بدیم
            </Dark_Typography>
            <Dark_Typography fontSize="Body_Medium" className="text-impo_Surface_OnSurfaceVariant">
              اینو یادت نره تو خیلی مهم و ارزشمندی!
            </Dark_Typography>
          </div>
        </div>

        <div className="flex flex-row ">
          {LINK_SOCIAL_LIST.map((item, index) => {
            return <LinkGenerator {...item} key={index} />;
          })}
        </div>
      </div>
    </WomenPageLayout>
  );
};

export default AboutUsPage;
