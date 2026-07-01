import { useMemo } from 'react';

import { CustomImage_NEW } from '../../../components/ui/CustomImage_NEW';
import { CustomTypography } from '../../../components/ui/CustomTypography';
import AndroidIcon from '@assets/shared/icons/android.svg';
import AppleIcon from '@assets/shared/icons/apple.svg';

import { useSystem } from '../../../hooks/useSystem';
import AddToHomeScreenContainer from './AddToHomeScreenContainer';
import useAddToHomeConstants from './__hooks__/useAddToHomeConstants';
import { AddToHomeScreenBrowserContentTypes } from './types';

const AddToHomeScreenBrowserContent = ({ browserInfo, operatingSystem }: AddToHomeScreenBrowserContentTypes) => {
  const { appName } = useSystem();
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
                  <div
                    className={`
                                w-6 
                                h-6 
                                min-w-6 
                                min-h-6 
                                rounded-full 
                                flex 
                                items-center 
                                justify-center 
                                ${appName === 'MEN_PWA' ? 'bg-impo_PrimaryMan_PrimaryMan' : 'bg-impo_Primary_Primary'}
                              `}
                  >
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
              <CustomImage_NEW src={item.image} width={600} height={0} sizes="100dvw" className="w-full h-auto" />
            )}
          </div>
        ))}
      </div>
    </AddToHomeScreenContainer>
  );
};

export default AddToHomeScreenBrowserContent;
