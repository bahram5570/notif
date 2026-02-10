import { WidgetScaleModule } from '@repo/core/components/Widgets/WidgetScaleModule';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { colorFormatConverter } from '@repo/core/utils/scripts';

import { CycleScriptsProps } from './types';

const CycleScripts = ({ description, leading, textColor, title }: CycleScriptsProps) => {
  const color = colorFormatConverter(textColor);

  return (
    <WidgetScaleModule>
      <div className="flex flex-col justify-end items-center gap-3 px-4">
        <CustomTypography
          fontSize="Title_Small"
          style={{ color: color }}
          className="text-center dark:!text-impo_Neutral_OnBackground"
        >
          {leading}
        </CustomTypography>

        <CustomTypography
          fontSize="Headline_Small"
          style={{ color: color }}
          className="text-center dark:!text-impo_Neutral_OnBackground"
        >
          {title}
        </CustomTypography>

        <CustomTypography
          fontSize="Title_Small"
          style={{ color: color }}
          className="text-center dark:!text-impo_Neutral_OnBackground"
        >
          {description}
        </CustomTypography>
      </div>
    </WidgetScaleModule>
  );
};

export default CycleScripts;
