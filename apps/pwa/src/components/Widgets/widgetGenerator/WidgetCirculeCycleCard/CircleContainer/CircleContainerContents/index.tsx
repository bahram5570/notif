import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { colorFormatConverter } from '@repo/core/utils/scripts';

import styles from './styles.module.css';

import Btn from './Btn';
import { CircleContainerContentsProps } from './types';

const CircleContainerContents = ({ textColor, description, leading, title, button }: CircleContainerContentsProps) => {
  const color = colorFormatConverter(textColor);

  return (
    <div className={styles.container}>
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
