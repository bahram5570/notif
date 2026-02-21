import { Fragment } from 'react';

import { toPersianNumbers } from '../../../../../utils/numbers';
import { typographyFontStylesMaker } from '../../../../../utils/system';

import { useSystem } from '../../../../../hooks/useSystem';
import { CustomImage } from '../../../../ui/CustomImage';
import { WidgetOvulationHistoryCardDescriptionDescriptionProps } from './types';

const WidgetOvulationHistoryCardDescription = ({
  isPdfDownloading,
  description,
  icon,
}: WidgetOvulationHistoryCardDescriptionDescriptionProps) => {
  const { operatingSystem } = useSystem();
  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Body_Small', operatingSystem });

  const descriptionList = description.split('،');

  return (
    <div className="w-full">
      {!isPdfDownloading && (
        <CustomImage src={icon} width={56} height={56} className="float-start mr-6 -mt-[14px] !overflow-visible" />
      )}

      <p
        style={{ ...typographyFontStyles, direction: 'rtl', textAlign: 'justify' }}
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
