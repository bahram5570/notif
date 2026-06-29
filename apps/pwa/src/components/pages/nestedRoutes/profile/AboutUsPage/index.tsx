'use client';

import { useEffect, useState } from 'react';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { getFirebaseTokenCookie } from '@actions/userCookies.actions';

import LinkGenerator from './LinkGenerator';
import { LINK_SOCIAL_LIST } from './constants';

const AboutUsPage = () => {
  return (
    <MainPageLayout
      paddingTop={0}
      rightElement="BackButton"
      rightElementScript="درباره ما"
      className="flex flex-col items-center justify-center gap-6 relative  z-0 bg-impo_Neutral_Background"
    >
      <div className="flex flex-col justify-center items-center w-3/4 gap-9">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-6">
              <CustomTypography className="text-impo_Primary_Primary" fontSize="Headline_Large">
                Impo
              </CustomTypography>

              <div className="flex flex-col items-center justify-center">
                <CustomTypography className="text-impo_Surface_OnSurfaceVariant" fontSize="Lable_Large">
                  از دل این جمله بیرون اومده
                </CustomTypography>

                <CustomTypography className="text-impo_Primary_Primary" fontSize="Headline_Medium">
                  I am important
                </CustomTypography>
                <CustomTypography className="text-impo_Surface_OnSurfaceVariant" fontSize="Lable_Large">
                  یعنی من مهم هستم
                </CustomTypography>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <CustomTypography fontSize="Body_Medium" className="text-impo_Surface_OnSurfaceVariant">
              ایمپو در کنار شماست تا هر روز بهتون یادآوری کنه که باید بیشتر حواستون به خودتون باشه.
            </CustomTypography>
            <CustomTypography fontSize="Body_Medium" className="text-impo_Surface_OnSurfaceVariant">
              اینجاییم که با خودمون در صلح باشیم و سبک زندگیمون رو با تغییر نگرشمون تغییر بدیم
            </CustomTypography>
            <CustomTypography fontSize="Body_Medium" className="text-impo_Surface_OnSurfaceVariant">
              اینو یادت نره تو خیلی مهم و ارزشمندی!
            </CustomTypography>
          </div>
        </div>

        <div className="flex flex-row ">
          {LINK_SOCIAL_LIST.map((item, index) => {
            return <LinkGenerator {...item} key={index} />;
          })}
        </div>

        <Tem />
      </div>
    </MainPageLayout>
  );
};

export default AboutUsPage;

const Tem = () => {
  const [access, setAccess] = useState(false);
  const [ft, setFt] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const token = await getFirebaseTokenCookie();
      const acc = Notification.permission === 'granted';

      setAccess(acc);
      setFt(Boolean(token));
    };

    getData();
  }, []);

  return (
    <div className="flex gap-2">
      {access && <div className="w-1 h-1 bg-green-400" />}
      {ft && <div className="w-1 h-1 bg-red-400" />}
    </div>
  );
};
