import { CustomTextareaInputPropsType } from './type';

export const CustomTextareaInput = (props: CustomTextareaInputPropsType) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.onChangeHandler(e.target.value, props.name as string);
  };

  return (
    <textarea
      {...props}
      className={`w-full px-4 py-3 rounded-2xl focus-visible:outline-1 text-right focus-visible:outline placeholder:text-impo_Surface_OutlineVariant  resize-none bg-impo_Neutral_Surface text-impo_Neutral_OnSurface border border-impo_Neutral_Surface outline-impo_Neutral_Surface ${props.className}`}
      onChange={handleChange}
      dir="rtl"
    />
  );
};
