import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

const DeleteChatModal = ({ onCloseModal }: { onCloseModal: () => void }) => {
  const { colors } = useTheme();
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
        <Button
          size="medium"
          variant="fill"
          color="primary"
          onClick={() => {
            console.log('');
            // rejectHandler(id);
          }}
        >
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
