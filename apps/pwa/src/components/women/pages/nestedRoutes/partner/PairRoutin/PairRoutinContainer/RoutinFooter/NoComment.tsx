import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';

const NoComment = () => {
  const { colors } = useTheme();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  return (
    <div
      className=" rounded-xl w-full flex flex-row-reverse justify-between items-center px-4 py-3"
      style={{ background: colors.Grey_100 }}
    >
      <div className="flex flex-col items-end px-3 py-2 gap-2">
        <Typography scale="Lable" size="Medium" color="Neutral_OnBackground">
          هنوز نظرت رو ثبت نکردی؟
        </Typography>
        <Typography scale="Body" size="Small" color="Neutral_OnBackground">
          نظرت راجع به برنامه برامون مهمه!
        </Typography>
      </div>
      <Button
        color="primary"
        fullWidth={false}
        size="medium"
        onClick={() => newQueryParamsHandler({ [MODALS.MODAL_FEEDBACK]: 'true' })}
        variant="fill"
      >
        <Typography scale="Lable" size="Medium" color="PrimaryMan_OnPrimaryMan">
          ثبت نظر
        </Typography>
      </Button>
    </div>
  );
};

export default NoComment;
