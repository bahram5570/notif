import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { MoreActionBtnPropsType } from './type';

const MoreActionBtn = ({ onClickHandler, title, isDeleteBtn = false, Icon }: MoreActionBtnPropsType) => {
  const { colors } = useTheme();

  const backgroundColor = isDeleteBtn ? colors.Error_ErrorContainer : colors.Surface_OutlineVariant;
  const stroke = isDeleteBtn ? colors.Error_Error : '';
  const fill = !isDeleteBtn ? colors.Neutral_OnSurface : '';

  return (
    <div className="flex flex-row-reverse items-center gap-2" onClick={onClickHandler}>
      <div className="flex justify-center items-center rounded-full w-[34px] h-[34px]" style={{ backgroundColor }}>
        <Icon className="w-[18px] h-[18px]" style={{ stroke, fill }} />
      </div>
      <Typography scale="Lable" size="Medium">
        {title}
      </Typography>
    </div>
  );
};

export default MoreActionBtn;
