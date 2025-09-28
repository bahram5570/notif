import { useMemo } from 'react';

import AndroidIcon from '@assets/icons/android.svg';
import AppleIcon from '@assets/icons/apple.svg';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import AddToHomeScreenContainer from './AddToHomeScreenContainer';
import useAddToHomeConstants from './__hooks__/useAddToHomeConstants';
import { AddToHomeScreenBrowserContentTypes } from './types';

const AddToHomeScreenBrowserContent = ({ browserInfo, operatingSystem }: AddToHomeScreenBrowserContentTypes) => {
  const { colors, typography } = useTheme();
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
        {data.type === 'ios' && <AppleIcon className="w-8 h-auto" style={{ fill: colors.Surface_OutlineVariant }} />}
        {data.type === 'android' && (
          <AndroidIcon className="w-8 h-auto" style={{ fill: colors.Surface_OutlineVariant }} />
        )}

        <Typography scale="Title" size="Small" color="Neutral_OnBackground" className="pt-1">
          {data.title}
        </Typography>
      </div>

      <div className="w-full flex flex-col items-center gap-6">
        {data.items.map((item, index) => (
          <div className="w-full" key={index}>
            {item.script && (
              <div className="w-full flex items-start gap-1 pb-4">
                {typeof item.no === 'number' && (
                  <div
                    style={{ backgroundColor: colors.PrimaryWoman_Primary }}
                    className="w-6 h-6 min-w-6 min-h-6 rounded-full flex items-center justify-center"
                  >
                    <Typography scale="Body" size="Large" color="White">
                      {item.no.toString()}
                    </Typography>
                  </div>
                )}

                <div style={{ ...typography.Body.Medium, color: colors.Neutral_OnBackground }} className="pt-[1px]">
                  {item.script}
                </div>
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
