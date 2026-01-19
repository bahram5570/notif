import Dark_Spinner from '@components/ui/Dark_Spinner';

const StoriesLoading = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center pointer-events-none select-none">
      <Dark_Spinner className="border-impo_Neutral_Surface" />
    </div>
  );
};

export default StoriesLoading;
