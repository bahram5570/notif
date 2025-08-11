import LockIcon from '@assets/icons/LockKeyhole.svg';
import TickIcon from '@assets/icons/tickIcon.svg';
import { textShorter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';
import useWidgetActions from '@hooks/useWidgetActions';

import { ProgramWidgetItemStatusEnum } from '../../../enum';
import { IS_LAST_ROUTIN_ITEM, ROUTIN_STEP } from '../../constant';
import { RoutinDietsGeneratorProps } from './types';

const RoutinDietsGenerator = ({ item, index, isLastItem }: RoutinDietsGeneratorProps) => {
  const { actionHandler } = useWidgetActions();
  const { colors } = useTheme();

  const clickHandler = () => {
    localStorage.setItem(IS_LAST_ROUTIN_ITEM, isLastItem ? 'true' : 'false');

    if (!isLastItem) {
      localStorage.setItem(ROUTIN_STEP, JSON.stringify(index));
    }

    actionHandler(item.action);
  };

  return (
    <div className="flex flex-row-reverse justify-between items-center">
      <div className="w-full flex items-center justify-end gap-[10px] cursor-pointer" onClick={clickHandler}>
        <div className="flex flex-col items-end gap-1">
          <Typography scale="Lable" size="Medium">
            {item.title}
          </Typography>

          <Typography scale="Body" size="Small">
            {textShorter(item.subtitle, 40)}
          </Typography>
        </div>

        <div className="relative w-12 h-12 min-w-12 min-h-12 rounded-full">
          <div
            className={`w-full h-full rounded-xl ${item.status === ProgramWidgetItemStatusEnum.locked ? 'blur-[1px]' : ''} overflow-hidden`}
          >
            <CustomImage src={item.image} />
          </div>
        </div>
      </div>
      {item.status === ProgramWidgetItemStatusEnum.locked && (
        <LockIcon className="w-6 h-auto" style={{ stroke: colors.Surface_OutlineVariant }} />
      )}
      {item.status === ProgramWidgetItemStatusEnum.Compelet && (
        <TickIcon className="w-6 h-auto" style={{ fill: colors.Success_Success }} />
      )}
    </div>
  );
};

export default RoutinDietsGenerator;
