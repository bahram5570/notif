import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import useWidgetActions from '@hooks/useWidgetActions';
import { ActionTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import { RoutinCtaPropsType } from './type';

const RoutinCta = ({ cta }: RoutinCtaPropsType) => {
  const { actionHandler } = useWidgetActions();
  return (
    <div
      className="rounded-2xl my-5 mt-7 dark:!bg-impo_Neutral_Surface dark:!bg-none"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(170, 255, 250, 0.6) 0%, rgba(231, 181, 255, 0.6) 51.56%, rgba(255, 155, 191, 0.6) 100%), url('/assets/images/selectNameHeartsMask.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="px-4 py-4 flex flex-col items-end gap-2">
        <Dark_Typography className="text-impo_Neutral_OnSurface" fontSize="Lable_Medium">
          {cta.ctaBtnLabel}
        </Dark_Typography>

        <div className="w-full flex justify-start">
          <Dark_Button
            className="max-w-fit"
            fontSize="Lable_Large"
            onClick={() => actionHandler(cta.action)}
            isDisable={cta.action.actionType === ActionTypeEnum.None}
          >
            {cta.ctaBtnLabel}
          </Dark_Button>
        </div>
      </div>
    </div>
  );
};

export default RoutinCta;
