import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import useDelete from './__hooks__/useDelete';

const DeleteChatModal = ({ onCloseModal }: { onCloseModal: () => void }) => {
  const { colors } = useTheme();
  const { isLoading, onDeleteHandler } = useDelete();

  const onClick = () => {
    onDeleteHandler();
  };
  return (
    <div className="px-4 flex flex-col gap-2 max-w-xs mt-4">
      <div className="flex flex-col justify-center items-center">
        <Typography size="Small" scale="Title">
          حذف مکالمه
        </Typography>
        <Typography scale="Body" size="Medium" color="Surface_InverseSurface" textAlign="center">
          مطمئنی که میخوای همه پیام‌هات در این تالار رو با مونس حدف کنی؟
        </Typography>
      </div>

      <div className="flex w-full justify-between gap-2">
        <Button size="medium" variant="fill" color="primary" onClick={onClick} isLoading={isLoading}>
          بله، مطمئنم
        </Button>
        <Button
          size="medium"
          variant="fill"
          color="FREE-STYLES"
          buttonColor={colors.Surface_OutlineVariant}
          contentsColor={colors.Neutral_OnBackground}
          onClick={onCloseModal}
        >
          <Typography scale="Lable" size="Large">
            نه، اشتباه شد
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default DeleteChatModal;
