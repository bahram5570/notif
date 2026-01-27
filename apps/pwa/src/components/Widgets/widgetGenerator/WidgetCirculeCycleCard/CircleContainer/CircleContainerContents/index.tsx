import { colorFormatConverter } from '@utils/scripts';

import styles from './styles.module.css';

import Dark_Typography from '@components/ui/Dark_Typography';

import Btn from './Btn';
import { CircleContainerContentsProps } from './types';

const CircleContainerContents = ({ textColor, description, leading, title, button }: CircleContainerContentsProps) => {
  const color = colorFormatConverter(textColor);

  return (
    <div className={styles.container}>
      <div className="relative flex h-[70%] flex-col justify-center items-center gap-3 px-10">
        <Dark_Typography
          style={{ color }}
          fontSize="Lable_Large"
          className="text-center dark:!text-impo_Neutral_OnBackground"
        >
          {leading}
        </Dark_Typography>

        <Dark_Typography
          style={{ color }}
          fontSize="Headline_Small"
          className="text-center dark:!text-impo_Neutral_OnBackground"
        >
          {title}
        </Dark_Typography>

        <Dark_Typography
          style={{ color }}
          fontSize="Body_Large"
          className="text-center dark:!text-impo_Neutral_OnBackground"
        >
          {description}
        </Dark_Typography>
      </div>

      <Btn button={button} />
    </div>
  );
};

export default CircleContainerContents;
