import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { NoteTextareaPropsType } from './type';

const NoteTextarea = ({ description, label, name, onchangeHandler, value }: NoteTextareaPropsType) => {
  const { typography } = useTheme();

  return (
    <div className="p-2 pt-3 flex flex-col gap-2">
      <div className="flex gap-1 flex-row-reverse ">
        <Typography scale="Lable" size="Large">
          {label}
        </Typography>
        {description && (
          <Typography scale="Lable" size="Large" color="Surface_Outline">
            {description}
          </Typography>
        )}
      </div>

      <textarea
        rows={1}
        value={value ?? ''}
        placeholder="اینجا بنویس"
        style={{ ...typography.Body.Large, direction: 'rtl' }}
        onChange={(e) => onchangeHandler(e.target.value, name)}
        className="w-full max-h-[100px] text-right resize-none outline-none"
      />
    </div>
  );
};

export default NoteTextarea;
