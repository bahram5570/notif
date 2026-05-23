import { useEffect, useState } from 'react';

import { PREVIEW_IMAGE } from '../../../../../constants/modal.constants';
import { usePageNavigationLoading } from '../../../../../hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '../../../../../hooks/useQueryParamsHandler';
import { PreviewImageTypes } from '../../../../../providers/PreviewImageProvider/types';
import { PreviewImageHandlerTypes } from './types';

const usePreviewImage = () => {
  const { pageNavigationHandler, navigationLoadingId } = usePageNavigationLoading();
  const { getQueryParams, newQueryParamsHandler } = useQueryParamsHandler();
  const [previewImageLoading, setPreviewImageLoading] = useState(false);

  const isPreview = getQueryParams(PREVIEW_IMAGE);
  const isLoading = navigationLoadingId === PREVIEW_IMAGE;

  const previewImageHandler: PreviewImageHandlerTypes = ({ shape, src, hasPreviewImage }) => {
    if (hasPreviewImage && !isLoading) {
      pageNavigationHandler({ id: PREVIEW_IMAGE });
      setPreviewImageLoading(true);

      const result: PreviewImageTypes = { shape, src };
      newQueryParamsHandler({ [PREVIEW_IMAGE]: JSON.stringify(result) });
    }
  };

  useEffect(() => {
    if (isPreview) {
      setPreviewImageLoading(false);
    }
  }, [isPreview]);

  return { previewImageHandler, previewImageLoading };
};

export default usePreviewImage;
