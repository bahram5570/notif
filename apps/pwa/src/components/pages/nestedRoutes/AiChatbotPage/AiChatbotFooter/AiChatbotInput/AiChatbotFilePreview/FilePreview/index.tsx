import RefreshIcon from '@assets/icons/Restart.svg';
import CancelIcon from '@assets/icons/cancel.svg';
import { CustomImage } from '@repo/core/components/ui/CustomImage';

import style from './styles.module.css';

import { FilePreviewPropsType } from './type';

const FilePreview = (props: FilePreviewPropsType) => {
  const onRemoveHandler = () => {
    if (props.url) {
      props.removeFileHandler(props.url);
    }
  };

  return (
    <div style={{ width: 116, height: 116 }} className=" relative rounded-[20px]">
      <div
        className=" absolute top-0  left-0 right-0 bottom-0 w-full h-full rounded-2xl flex justify-center items-center z-30"
        style={{
          background: ' linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))',
        }}
      >
        {props.loading && (
          <div className={style.loader} aria-label="Loading">
            <i></i>
          </div>
        )}
      </div>

      {props.error && (
        <div className=" absolute top-0  left-0 right-0 bottom-0 w-full h-full  flex justify-center items-center z-30">
          <div
            className="w-8 absolute  h-8 flex flex-col justify-center items-center rounded-full bg-impo_Surface_OutlineVariant"
            onClick={props.retryUploadHandler}
          >
            <RefreshIcon />
          </div>
        </div>
      )}

      <div
        onClick={onRemoveHandler}
        className="w-6 h-6 absolute right-0 m-2 flex justify-center items-center rounded-full z-30 bg-impo_Neutral_Surface"
      >
        <CancelIcon className="w-4 h-auto stroke-impo_Neutral_OnBackground" />
      </div>

      <CustomImage
        width={116}
        height={116}
        src={props.url}
        className="w-full h-full rounded-2xl"
        // objectFit="cover"
        hasPreviewImage={true}
      />
    </div>
  );
};

export default FilePreview;
