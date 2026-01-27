import { colorFormatConverter } from '@utils/scripts';

import WidgetScaleModule from '@components/Widgets/WidgetScaleModule';
import Dark_Typography from '@components/ui/Dark_Typography';

import { CycleScriptsProps } from './types';

const CycleScripts = ({ description, leading, textColor, title }: CycleScriptsProps) => {
  const color = colorFormatConverter(textColor);

  return (
    <WidgetScaleModule>
      <div className="flex flex-col justify-end items-center gap-3 px-4">
        <Dark_Typography
          fontSize="Title_Small"
          style={{ color: color }}
          className="text-center dark:!text-impo_Neutral_OnBackground"
        >
          {leading}
        </Dark_Typography>

        <Dark_Typography
          fontSize="Headline_Small"
          style={{ color: color }}
          className="text-center dark:!text-impo_Neutral_OnBackground"
        >
          {title}
        </Dark_Typography>

        <Dark_Typography
          fontSize="Title_Small"
          style={{ color: color }}
          className="text-center dark:!text-impo_Neutral_OnBackground"
        >
          {description}
        </Dark_Typography>
      </div>
    </WidgetScaleModule>
  );
};

export default CycleScripts;
