import NoImageIcon from '@assets/icons/noImage.svg';

const CustomImageError = () => {
  return (
    <div className="flex justify-center items-center w-full aspect-square bg-impo_Surface_SurfaceVariant z-10">
      <NoImageIcon className="w-3/5 max-w-[60px] h-fit stroke-impo_Surface_OutlineVariant" />
    </div>
  );
};

export default CustomImageError;
