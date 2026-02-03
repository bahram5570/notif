import { Fragment } from 'react';

import { toPersianNumbers } from '@repo/core/utils/numbers';
import { typographyFontStylesMaker } from '@repo/core/utils/system';

import CustomImage from '@components/ui/CustomImage';
import { useOperatingSystem } from '@repo/core/hooks/useOperatingSystem';

import { WidgetOvulationHistoryCardDescriptionDescriptionProps } from './types';

const WidgetOvulationHistoryCardDescription = ({
  isPdfDownloading,
  description,
  icon,
}: WidgetOvulationHistoryCardDescriptionDescriptionProps) => {
  const { operatingSystem } = useOperatingSystem();
  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Body_Small', operatingSystem });

  const descriptionList = description.split('،');

  return (
    <div className="w-full">
      {!isPdfDownloading && (
        <CustomImage src={icon} width={56} height={56} className="float-start mr-6 -mt-[14px] !overflow-visible" />
      )}

      <p
        style={{
          ...typographyFontStyles,
          direction: 'rtl',
          textAlign: 'justify',
        }}
        className="text-impo_Neutral_OnBackground"
      >
        {isPdfDownloading && toPersianNumbers(description)}

        {!isPdfDownloading &&
          descriptionList.map((ch, index) => (
            <Fragment key={index}>
              {toPersianNumbers(ch)}
              {descriptionList.length - 1 > index && (
                <>
                  ، <br />
                </>
              )}
            </Fragment>
          ))}
      </p>
    </div>
  );
};

export default WidgetOvulationHistoryCardDescription;
