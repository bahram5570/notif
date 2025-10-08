import Button from '@components/ui/Button';
import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import { useRouter } from 'next/navigation';

const EmptyState = () => {
  const router = useRouter();

  const onClick = () => {
    router.back();
  };
  return (
    <div className="p-4 flex flex-col gap-4">
      <CustomImage src="/assets/images/empty state.webp" />
      <div className="flex justify-center items-center">
        <Button color="onSurface" hasArrow fullWidth={false} size="medium" onClick={onClick} variant="fill">
          <Typography scale="Lable" size="Large" color="PrimaryMan_OnPrimaryMan">
            بریم مرحله قبل
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default EmptyState;
