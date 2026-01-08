import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';

import Dark_Typography from '@components/ui/Dark_Typography';
import useOperatingSystem from '@hooks/useOperatingSystem';

import { NoteTextareaPropsType } from './type';

const NoteTextarea = ({ description, label, name, onchangeHandler, value }: NoteTextareaPropsType) => {
  const { operatingSystem } = useOperatingSystem();
  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Body_Large', operatingSystem });

  return (
    <div className="p-2 pt-3 flex flex-col gap-2">
      <div className="flex gap-1 flex-row-reverse ">
        <Dark_Typography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
          {label}
        </Dark_Typography>

        {description && (
          <Dark_Typography fontSize="Lable_Large" className="text-impo_Surface_Outline">
            {description}
          </Dark_Typography>
        )}
      </div>

      <textarea
        rows={1}
        value={value ?? ''}
        placeholder="اینجا بنویس"
        style={{ ...typographyFontStyles, direction: 'rtl' }}
        onChange={(e) => onchangeHandler(e.target.value, name)}
        className="w-full max-h-[100px] text-impo_Neutral_OnBackground text-right bg-impo_Transparent resize-none outline-none"
      />
    </div>
  );
};

export default NoteTextarea;
