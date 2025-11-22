import RefreshIcon from '@assets/icons/Restart.svg';
import CancelIcon from '@assets/icons/cancel.svg';

import style from './styles.module.css';

import CustomImage from '@components/ui/CustomImage';
import useTheme from '@hooks/useTheme';

import { FilePreviewPropsType } from './type';

const FilePreview = (props: FilePreviewPropsType) => {
  const { colors } = useTheme();
  return (
    <div style={{ width: 116, height: 116 }} className="mx-4 relative rounded-2xl">
      {props.loading && (
        <div
          className=" absolute top-0  left-0 right-0 bottom-0 w-full h-full rounded-2xl flex justify-center items-center z-30"
          style={{
            background: ' linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))',
          }}
        >
          <div className={style.loader} aria-label="Loading">
            <i></i>
          </div>
        </div>
      )}

      {props.error && (
        <div className=" absolute top-0  left-0 right-0 bottom-0 w-full h-full  flex justify-center items-center z-30">
          <div
            className="w-8 absolute  h-8 flex flex-col justify-center items-center rounded-full"
            style={{ backgroundColor: colors.Surface_OutlineVariant }}
          >
            <RefreshIcon />
          </div>
        </div>
      )}

      <div
        // onClick={onCloseModal}
        className="w-6 h-6 absolute right-0 m-2 flex justify-center items-center rounded-full z-30"
        style={{
          backgroundColor: colors.Neutral_Surface,
        }}
      >
        <CancelIcon className="w-4 h-auto" style={{ stroke: colors.Neutral_OnBackground }} />
      </div>

      <CustomImage src={props.url} className="w-full h-full rounded-2xl" hasPreviewImage={true} />
    </div>
  );
};

export default FilePreview;
