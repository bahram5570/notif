import Spinner from '@components/ui/Spinner';

const FullLoading = () => {
  return (
    <div className="min-h-screen max-w-md mx-auto flex items-center justify-center">
      <Spinner color={'Primary_Primary'} size={60} />
    </div>
  );
};

export default FullLoading;
