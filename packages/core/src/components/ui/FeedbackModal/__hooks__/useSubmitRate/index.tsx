import { UseSubmitRateProps } from './type';

const useSubmitRate = ({ rate, description, onSubmit }: UseSubmitRateProps) => {
  const submitHandler = () => {
    onSubmit({
      ...(description.trim() && { description: description.trim() }),
      rate,
    });
  };

  return { submitHandler };
};

export default useSubmitRate;
