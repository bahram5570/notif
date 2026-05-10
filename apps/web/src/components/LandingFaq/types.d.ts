type FaqTypes = { title: string; description: string };

export interface LandingFaqTypes {
  title?: string;
  list: FaqTypes[];
}

export interface LandingFaqGeneratorTypes extends FaqTypes {
  isSelected: boolean;
  selectHandler: () => void;
}
