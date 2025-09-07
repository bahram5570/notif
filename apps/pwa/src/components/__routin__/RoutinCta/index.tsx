import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import useWidgetActions from '@hooks/useWidgetActions';
import { ActionTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import { RoutinCtaPropsType } from './type';

const RoutinCta = ({ cta }: RoutinCtaPropsType) => {
  const { actionHandler } = useWidgetActions();
  return (
    <div
      className="rounded-2xl my-5 mt-7"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(170, 255, 250, 0.6) 0%, rgba(231, 181, 255, 0.6) 51.56%, rgba(255, 155, 191, 0.6) 100%), url('/assets/images/selectNameHeartsMask.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="px-4 py-4 flex flex-col items-end gap-2">
        <Typography scale="Lable" size="Medium">
          {cta.ctaBtnLabel}
        </Typography>
        <div className="w-full flex justify-start">
          <Button
            size="medium"
            variant="fill"
            className="w-fit"
            color="primary"
            fullWidth={false}
            onClick={() => actionHandler(cta.action)}
            isDisable={cta.action.actionType === ActionTypeEnum.None}
          >
            {cta.ctaBtnLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoutinCta;
