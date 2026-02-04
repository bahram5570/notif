const LoadingProgressBar = () => {
  return (
    <div className="fixed top-3 left-0 right-0 mx-auto overflow-hidden z-[80]">
      <div className="w-full h-[14px] p-[3px] flex items-center rounded-full bg-impo_White animate-pageNavigation">
        <div className="w-full h-full rounded-full bg-impo_Primary_Primary" />
      </div>
    </div>
  );
};

export default LoadingProgressBar;
