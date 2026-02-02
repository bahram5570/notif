import { CustomBackButton } from '@repo/core/components/ui/CustomBackButton';

const ActivationBackBtn = () => {
  return (
    <div className="absolute top-4 right-4 w-12 h-12 flex justify-center items-center z-20 ">
      <CustomBackButton />
    </div>
  );
};

export default ActivationBackBtn;
