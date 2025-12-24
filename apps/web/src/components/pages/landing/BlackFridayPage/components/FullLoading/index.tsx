import Spinner from '@components/ui/Spinner';

const FullLoading = () => {
  return (
    <div className="min-h-screen max-w-md mx-auto flex items-center justify-center">
      <Spinner size={60} />
    </div>
  );
};

export default FullLoading;
