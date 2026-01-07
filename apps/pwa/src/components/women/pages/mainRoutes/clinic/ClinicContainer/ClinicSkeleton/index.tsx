const ClinicSkeleton = () => {
  const list = [1, 2, 3, 4];

  return (
    <div className="w-full flex flex-col items-center gap-2 animate-skeleton">
      <div className="w-36 h-4 rounded bg-impo_Surface_SurfaceVariant" />

      {list.map((_, index) => (
        <div className="w-full h-[100px] rounded-xl bg-impo_Surface_SurfaceVariant" key={index} />
      ))}
    </div>
  );
};

export default ClinicSkeleton;
