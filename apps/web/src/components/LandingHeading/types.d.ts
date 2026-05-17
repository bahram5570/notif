export interface LandingHeadingTypes {
  image: string;
  className?: string;
  imageClassName?: string;
  backgroundImage?: string;
  contentElement: JSX.Elemen;
  imagePosition: 'center' | 'bottom';
}

export interface LandingHeadingImageTypes extends Pick<
  LandingHeadingTypes,
  'image' | 'imageClassName' | 'imagePosition'
> {
  alt?: string;
}

export interface LandingHeadingContentsTypes extends Pick<LandingHeadingTypes, 'contentElement'> {}
