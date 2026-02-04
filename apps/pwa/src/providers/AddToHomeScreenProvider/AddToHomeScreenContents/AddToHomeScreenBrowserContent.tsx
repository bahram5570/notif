import { useMemo } from 'react';

import AndroidIcon from '@assets/icons/android.svg';
import AppleIcon from '@assets/icons/apple.svg';
import { CustomImage } from '@repo/core/components/ui/CustomImage';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import AddToHomeScreenContainer from './AddToHomeScreenContainer';
import useAddToHomeConstants from './__hooks__/useAddToHomeConstants';
import { AddToHomeScreenBrowserContentTypes } from './types';

const AddToHomeScreenBrowserContent = ({ browserInfo, operatingSystem }: AddToHomeScreenBrowserContentTypes) => {
  const { browserData } = useAddToHomeConstants();

  const data = useMemo(() => {
    if (operatingSystem === 'ios') {
      if (browserInfo.browser === 'Chrome') {
        return browserData.chromeIos;
      }

      if (browserInfo.browser === 'Safari') {
        const majorVersion = +browserInfo.version.split('0')[0];

        if (majorVersion >= 26) {
          return browserData.safariNew;
        } else {
          return browserData.safariOld;
        }
      }
    }

    if (operatingSystem === 'android') {
      if (browserInfo.browser === 'Chrome') {
        return browserData.chromeAndroid;
      }
    }

    return browserData.other;
  }, [operatingSystem, browserInfo]);

  return (
    <AddToHomeScreenContainer className="py-[100px]">
      <div className="w-full flex items-center gap-3 pb-6">
        {data.type === 'ios' && <AppleIcon className="w-8 h-auto fill-impo_Surface_OutlineVariant" />}
        {data.type === 'android' && <AndroidIcon className="w-8 h-auto fill-impo_Surface_OutlineVariant" />}

        <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground pt-1">
          {data.title}
        </CustomTypography>
      </div>

      <div className="w-full flex flex-col items-center gap-6">
        {data.items.map((item, index) => (
          <div className="w-full" key={index}>
            {item.script && (
              <div className="w-full flex items-start gap-1 pb-4">
                {typeof item.no === 'number' && (
                  <div className="w-6 h-6 min-w-6 min-h-6 rounded-full flex items-center justify-center bg-impo_Primary_Primary">
                    <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_Background">
                      {item.no.toString()}
                    </CustomTypography>
                  </div>
                )}

                <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnBackground pt-[1px]">
                  {item.script}
                </CustomTypography>
              </div>
            )}

            {item.image && (
              <div className="px-4">
                <CustomImage src={item.image} />
              </div>
            )}
          </div>
        ))}
      </div>
    </AddToHomeScreenContainer>
  );
};

export default AddToHomeScreenBrowserContent;
