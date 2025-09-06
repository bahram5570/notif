import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';

const ShortcutItem = ({ title, imageUrl }: { title: string; imageUrl: string }) => {
  return (
    <div className="flex flex-col">
      <CustomImage src={imageUrl} width={72} height={72} />
      <Typography scale="Lable" size="Medium">
        {title}
      </Typography>
    </div>
  );
};

export default ShortcutItem;
