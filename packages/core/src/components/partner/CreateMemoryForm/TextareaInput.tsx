import { TextareaInputPropsType } from './type';

export const TextareaInput = ({
  value,
  onChangeHandler,
  placeholder,
  rows,
  name,
  className,
}: TextareaInputPropsType) => {
  const onchange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChangeHandler(e.target.value, name);
  };
  return (
    <>
      <textarea
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-2xl focus-visible:outline-1 text-right focus-visible:outline placeholder:text-impo_Surface_OutlineVariant  resize-none bg-impo_Neutral_Surface text-impo_Neutral_OnSurface border border-impo_Neutral_Surface outline-impo_Neutral_Surface ${className}`}
        rows={rows}
        value={value}
        maxLength={400}
        onChange={onchange}
        name={name}
        dir="rtl"
      />
    </>
  );
};
