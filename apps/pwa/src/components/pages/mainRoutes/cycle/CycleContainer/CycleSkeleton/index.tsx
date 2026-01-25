const CycleSkeleton = () => {
  const list = [1, 2, 3, 4];

  return (
    <div className="w-full animate-skeleton">
      <div className=" flex flex-col gap-4 p-4 w-full opacity-20">
        <div className="w-full flex justify-end gap-4 ">
          {list.map((item) => (
            <div className="w-16 h-16 rounded-full flex bg-impo_Surface_OutlineVariant" key={item} />
          ))}
        </div>

        <div className="w-full flex flex-col items-end gap-4">
          <div className="w-36 h-4 bg-impo_Surface_OutlineVariant" />

          {list.map((item) => (
            <div className="w-full h-4 bg-impo_Surface_OutlineVariant" key={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CycleSkeleton;
