import Button from '@components/ui/Button';
import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { CommenPropsType } from '../type';
import useDelete from './__hooks__/useDelete';

const DeleteChatModal = ({ onCloseModal }: CommenPropsType) => {
  const { colors } = useTheme();
  const { isLoading, onDeleteHandler } = useDelete();

  const onClick = () => {
    onDeleteHandler();
  };
  return (
    <div className="px-4 flex flex-col gap-2 max-w-xs mt-4">
      <div className="flex flex-col justify-center items-center">
        <Dark_Typography className="text-impo_Black" fontSize="Title_Small">
          حذف مکالمه
        </Dark_Typography>
        <Dark_Typography className="text-impo_Surface_InverseSurface text-center" fontSize="Body_Medium">
          مطمئنی که میخوای همه پیام‌هات در این تالار رو با مونس حدف کنی؟
        </Dark_Typography>
      </div>

      <div className="flex w-full justify-between gap-2">
        <Dark_Button onClick={onClick} isLoading={isLoading} fontSize="Lable_Large">
          بله، مطمئنم
        </Dark_Button>
        <Dark_Button
          onClick={onCloseModal}
          className="text-impo_Neutral_OnBackground bg-impo_Surface_OutlineVariant !border-impo_Surface_OutlineVariant"
        >
          <Dark_Typography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
            نه، اشتباه شد
          </Dark_Typography>
        </Dark_Button>
      </div>
    </div>
  );
};

export default DeleteChatModal;
