import { colorFormatConverter } from '../../../../../../utils/scripts';

import { CustomTypography } from '../../../../../ui/CustomTypography';
import Btn from './Btn';
import { CircleContainerContentsProps } from './types';

const CircleContainerContents = ({ textColor, description, leading, title, button }: CircleContainerContentsProps) => {
  const color = colorFormatConverter(textColor);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 m-auto overflow-hidden rounded-full animate-widgetCurculeCycle">
      <div className="relative flex h-[70%] flex-col justify-center items-center gap-3 px-10">
        <CustomTypography
          style={{ color }}
          fontSize="Lable_Large"
          className="text-center dark:!text-impo_Neutral_OnBackground"
        >
          {leading}
        </CustomTypography>

        <CustomTypography
          style={{ color }}
          fontSize="Headline_Small"
          className="text-center dark:!text-impo_Neutral_OnBackground"
        >
          {title}
        </CustomTypography>

        <CustomTypography
          style={{ color }}
          fontSize="Body_Large"
          className="text-center dark:!text-impo_Neutral_OnBackground"
        >
          {description}
        </CustomTypography>
      </div>

      <Btn button={button} />
    </div>
  );
};

export default CircleContainerContents;
