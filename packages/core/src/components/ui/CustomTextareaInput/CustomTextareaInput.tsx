import { CustomTextareaInputPropsType } from './type';

export const CustomTextareaInput = (props: CustomTextareaInputPropsType) => {
  const onchange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (props.name) {
      props.onChangeHandler(e.target.value, props.name);
    } else {
      props.onChangeHandler(e.target.value);
    }
  };
  return (
    <textarea
      placeholder={props.placeholder}
      className={`w-full px-4 py-3 rounded-2xl focus-visible:outline-1 text-right focus-visible:outline placeholder:text-impo_Surface_OutlineVariant  resize-none bg-impo_Neutral_Surface text-impo_Neutral_OnSurface border border-impo_Neutral_Surface outline-impo_Neutral_Surface ${props.className}`}
      rows={props.rows}
      value={props.value}
      maxLength={props.maxLength}
      style={props.style}
      onChange={onchange}
      name={props.name}
      dir="rtl"
    />
  );
};
