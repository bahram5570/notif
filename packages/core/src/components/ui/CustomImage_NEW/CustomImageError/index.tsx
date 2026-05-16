import NoImageIcon from '@assets/shared/icons/noImage.svg';

const CustomImageError = () => {
  return (
    <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full bg-impo_Surface_SurfaceVariant z-10">
      <NoImageIcon className="w-3/5 max-w-[60px] h-fit stroke-impo_Surface_OutlineVariant" />
    </div>
  );
};

export default CustomImageError;
