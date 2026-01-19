const SavedHintsContainerSkeleton = () => {
  const list = [1, 2];

  return (
    <div className="w-full flex flex-col gap-4 animate-skeleton">
      {list.map((item) => (
        <div className="w-full h-[160px] rounded-2xl p-4 bg-impo_White" key={item} />
      ))}
    </div>
  );
};

export default SavedHintsContainerSkeleton;
