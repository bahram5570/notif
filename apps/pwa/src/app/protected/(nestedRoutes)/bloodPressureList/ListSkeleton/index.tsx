const ListSkeleton = () => {
  return (
    <div className="w-full h-[100dvh] flex flex-col items-center mt-11 gap-3 px-4 animate-skeleton">
      <div className="w-full h-[100px] rounded-md mt-5 bg-impo_Surface_SurfaceVariant" />
      <div className="w-full h-[100px] rounded-md mt-5 bg-impo_Surface_SurfaceVariant" />
      <div className="w-full h-[100px] rounded-md mt-5 bg-impo_Surface_SurfaceVariant" />
      <div className="w-full h-[100px] rounded-md mt-5 bg-impo_Surface_SurfaceVariant" />
    </div>
  );
};

export default ListSkeleton;
