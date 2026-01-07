import { TextareaInputPropsType } from './type';

const TextareaInput = ({ value, onchange }: TextareaInputPropsType) => {
  return (
    <>
      <textarea
        placeholder={`اسم خاطره‌ت رو اینجا بنویس `}
        className="w-full text-end px-4 py-3 rounded-2xl focus-visible:outline-1 focus-visible:outline placeholder:text-sm resize-none bg-impo_Neutral_Surface text-impo_Neutral_OnSurface border border-impo_Neutral_Surface outline-impo_Neutral_Surface"
        rows={1}
        value={value.title}
        maxLength={400}
        onChange={(e) => onchange(e.target.value, 'title')}
      />
      <textarea
        placeholder={`متن خاطره‌ت رو اینجا بنویس `}
        className="w-full text-end px-4 py-3 rounded-2xl focus-visible:outline-1 focus-visible:outline placeholder:text-sm resize-none bg-impo_Neutral_Surface text-impo_Neutral_OnSurface border border-impo_Neutral_Surface outline-impo_Neutral_Surface"
        rows={4}
        value={value.text}
        maxLength={400}
        onChange={(e) => onchange(e.target.value, 'text')}
      />
    </>
  );
};

export default TextareaInput;
