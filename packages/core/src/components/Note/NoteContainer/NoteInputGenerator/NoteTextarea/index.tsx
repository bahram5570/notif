import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { typographyFontStylesMaker } from '@repo/core/utils/system';

import { useSystem } from '@repo/core/hooks/useSystem';

import { CustomTextareaInput } from '../../../../ui/CustomTextareaInput';
import { NoteTextareaPropsType } from './type';

export const NoteTextarea = ({ label, name, onchangeHandler, value }: NoteTextareaPropsType) => {
  const { operatingSystem } = useSystem();
  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Body_Large', operatingSystem });
  const hasBorder = name !== 'text';

  return (
    <div className={`p-2 pt-3 flex flex-col gap-2  ${hasBorder && 'border-b border-impo_Neutral_Surface'}`}>
      <div className="flex gap-1 flex-row-reverse ">
        <CustomTypography fontSize="Lable_Large" className="text-impo_Neutral_OnBackground">
          {label}
        </CustomTypography>

        {name === 'text' && (
          <CustomTypography fontSize="Lable_Large" className="text-impo_Surface_Outline">
            (اختیاری)
          </CustomTypography>
        )}
      </div>
      <CustomTextareaInput
        placeholder="اینجا بنویس"
        value={value ?? ''}
        onChangeHandler={onchangeHandler}
        name={name}
        rows={1}
        style={{ ...typographyFontStyles, direction: 'rtl' }}
        className="w-full max-h-[100px] !border-0 !outline-none text-impo_Neutral_OnBackground text-right bg-impo_Transparent resize-none"
      />
    </div>
  );
};
