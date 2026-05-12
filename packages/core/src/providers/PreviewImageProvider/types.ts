import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type PreviewImageShapeTypes = undefined | 'full' | 'circle';

export type PreviewImageTypes = { src: string | StaticImport; shape: PreviewImageShapeTypes };

export interface PreviewImageContainerProps extends PreviewImageTypes {}
