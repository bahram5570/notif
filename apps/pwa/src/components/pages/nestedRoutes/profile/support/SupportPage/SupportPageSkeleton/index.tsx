const LIST = [1, 2, 3, 4, 5, 6];

const SupportPageSkeleton = () => {
  return (
    <div className="w-full animate-skeleton py-4">
      <div className="w-full h-10 rounded-md bg-impo_Surface_OutlineVariant" />
      <div className="w-28 h-6 rounded-md bg-impo_Surface_OutlineVariant ml-auto mt-4 mb-6" />

      {LIST.map((item) => (
        <div
          key={item}
          className={`
                        w-full 
                        h-14 
                        flex 
                        items-center 
                        justify-center 
                        border-t-[1px] 
                        ${item === 1 ? 'border-t-transparent' : 'border-t-impo_Surface_OutlineVariant'}
                    `}
        >
          <div className="w-full h-6 rounded-md bg-impo_Surface_OutlineVariant" />
        </div>
      ))}
    </div>
  );
};

export default SupportPageSkeleton;
