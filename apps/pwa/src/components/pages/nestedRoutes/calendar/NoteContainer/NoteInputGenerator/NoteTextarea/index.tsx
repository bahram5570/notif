import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { useOperatingSystem } from '@repo/core/hooks/useOperatingSystem';

import { NoteTextareaPropsType } from './type';

const NoteTextarea = ({ description, label, name, onchangeHandler, value, isLastItem }: NoteTextareaPropsType) => {
  const { operatingSystem } = useOperatingSystem();
  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Body_Large', operatingSystem });

  return (
    <div className={`p-2 pt-3 flex flex-col gap-2  ${!isLastItem && 'border-b border-impo_Neutral_Surface'}`}>
      <div className="flex gap-1 flex-row-reverse ">
        <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
          {label}
        </CustomTypography>

        {description && (
          <CustomTypography fontSize="Lable_Large" className="text-impo_Surface_Outline">
            {description}
          </CustomTypography>
        )}
      </div>

      <textarea
        rows={1}
        value={value ?? ''}
        placeholder="اینجا بنویس"
        style={{ ...typographyFontStyles, direction: 'rtl' }}
        onChange={(e) => onchangeHandler(e.target.value, name)}
        className="w-full max-h-[100px] text-impo_Neutral_OnBackground text-right bg-impo_Transparent resize-none outline-none placeholder:text-impo_Surface_SurfaceVariant"
      />
    </div>
  );
};

export default NoteTextarea;
