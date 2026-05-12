import { CustomSpinner } from '../../CustomSpinner';

const CustomImagePreviewLoading = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-sm">
      <CustomSpinner size={24} className="border-impo_Neutral_Surface" />
    </div>
  );
};

export default CustomImagePreviewLoading;
