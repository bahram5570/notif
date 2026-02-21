import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

import Image from 'next/image';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import { useSystem } from '@repo/core/hooks/useSystem';

import CustomWebModal from '../CustomWebModal';
import { CustomImagePreviewTypes } from './types';

const CustomImagePreview = ({ src, previewImage, previewBackground, closeHandler }: CustomImagePreviewTypes) => {
  const { operatingSystem } = useSystem();

  const ImageComponent = (
    <div
      className={`relative w-full h-full ${!previewBackground && '!bg-impo_Transparent'}`}
      style={{ backgroundColor: previewBackground }}
    >
      <Image
        alt=""
        src={src}
        width={0}
        height={0}
        sizes="100dvw"
        className="object-contain object-center w-[100dvw] h-[100dvh]"
      />
    </div>
  );

  const isIos = operatingSystem === 'ios';

  return (
    <>
      <CustomWebModal isOpen={previewImage} onClose={closeHandler}>
        <div className="relative w-[100dvw] h-[100dvh]">
          <CloseRoundedIcon
            onClick={closeHandler}
            className="absolute top-4 left-4 z-10 !fill-impo_White !stroke-impo_Surface_Outline"
            sx={{ width: 50, height: 50, strokeWidth: 1 }}
          />

          {isIos ? (
            ImageComponent
          ) : (
            <TransformWrapper>
              <TransformComponent>
                <>{ImageComponent}</>
              </TransformComponent>
            </TransformWrapper>
          )}
        </div>
      </CustomWebModal>
    </>
  );
};

export default CustomImagePreview;
