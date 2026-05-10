'use client';

// @ts-ignore
import heicImage from '@assets/heic1.heic';
import jpegImage from '@assets/jpeg1.jpg';

import { CustomImage_NEW } from '@components/CustomImage_NEW';

const Cycle = () => {
  // return <CyclePage />;
  // 058450f7d5cc4eadbc1aa68a3de149ab.jpg

  return (
    <div className="w-full h-36 relative">
      <CustomImage_NEW
        hasPreviewImage
        // src={'https://s3.ir-tbz-sh1.arvanstorage.ir/impo/Avatar/Avatar11---.webp'}
        src={'https://s3.ir-tbz-sh1.arvanstorage.ir/impo/testBahram/heic1.heic'}
        // src={'e2a38a34908947d5ab51182401076a28.heic'}
        // src={'058450f7d5cc4eadbc1aa68a3de149ab.jpg'}
        // src={'/assets/jpeg1.jpg'}
        // src={'/assets/heic1.heic'}
        // src={jpegImage}
        // src={heicImage}
        alt=""
        // fill={true}
        // className="object-cover"
        width={200}
        height={200}
      />
    </div>
  );
};

export default Cycle;
