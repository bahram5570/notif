import EmptyState from './EmptyState';
import HasFile from './HasFile';
import { FileInputProps } from './type';

const FileInput = ({ fileName, valuesHandler }: FileInputProps) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div
        className={`px-5 w-full border  ${fileName ? 'rounded-lg bg-impo_Surface_SurfaceVariant border-impo_Surface_SurfaceVariant' : 'rounded-full bg-impo_Neutral_Background border-impo_Surface_OutlineVariant'} `}
      >
        {fileName === '' && <EmptyState valuesHandler={valuesHandler} />}

        {fileName !== '' && <HasFile fileName={fileName} valuesHandler={valuesHandler} />}
      </div>
    </div>
  );
};
export default FileInput;
