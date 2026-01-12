import { Fragment } from 'react';

import { toPersianNumbers } from '@utils/numbers';

import CustomImage from '@components/ui/CustomImage';
import useTheme from '@hooks/useTheme';

import { WidgetBabyCheckHistoryCardDescriptionProps } from './types';

const WidgetBabyCheckHistoryCardDescription = ({
  isPdfDownloading,
  description,
  icon,
}: WidgetBabyCheckHistoryCardDescriptionProps) => {
  const { typography } = useTheme();
  const fontStyle = typography.Body.Small;

  const descriptionList = description.split('،');

  return (
    <div className="w-full">
      {!isPdfDownloading && <CustomImage src={icon} width={56} height={56} className="float-start mr-6 -mt-5" />}

      <p
        style={{
          ...fontStyle,
          direction: 'rtl',
          textAlign: 'justify',
        }}
        className="text-impo_Neutral_OnBackground"
      >
        {isPdfDownloading && toPersianNumbers(description)}

        {!isPdfDownloading &&
          descriptionList.map((ch, index) => (
            <Fragment key={index}>
              {ch}
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

export default WidgetBabyCheckHistoryCardDescription;
