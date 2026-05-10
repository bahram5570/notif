import { useEffect, useState } from 'react';

import { PREVIEW_IMAGE } from '@repo/core/constants/modal.constants';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import { PreviewImageTypes } from '../../../../../../../packages/core/dist/providers/PreviewImageProvider/types';
// !
import { PreviewImageHandlerTypes } from './types';

const usePreviewImage = () => {
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();
  const { getQueryParams, newQueryParamsHandler } = useQueryParamsHandler();
  const [previewImageLoading, setPreviewImageLoading] = useState(false);

  const hasQueryPreview = getQueryParams(PREVIEW_IMAGE);
  const isQueryLoading = pageNavigationLoading === PREVIEW_IMAGE;

  const previewImageHandler: PreviewImageHandlerTypes = ({ shape, src, hasPreviewImage }) => {
    if (hasPreviewImage && !isQueryLoading) {
      pageNavigationHandler({ showProgressBar: false, id: PREVIEW_IMAGE });
      setPreviewImageLoading(true);

      const result: PreviewImageTypes = { shape, src };
      newQueryParamsHandler({ [PREVIEW_IMAGE]: JSON.stringify(result) });
    }
  };

  useEffect(() => {
    if (hasQueryPreview) {
      setPreviewImageLoading(false);
    }
  }, [hasQueryPreview]);

  return { previewImageHandler, previewImageLoading };
};

export default usePreviewImage;
