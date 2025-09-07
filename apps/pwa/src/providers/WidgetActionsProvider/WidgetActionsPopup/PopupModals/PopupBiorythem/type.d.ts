export type BiorhythemItem = {
  description: string;
  icon: string;
  title: string;
};

export interface PopupBiorythemProps {
  data: {
    description: string;
    items: BiorhythemItem[];
    title: string;
  };
}
