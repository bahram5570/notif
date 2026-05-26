export interface MainFooterLinksProps {
  icons: { Dark: any; Light: any };
  onSelect: () => void;
  isSelected: boolean;
  title: string;
}

export interface MainFooterContainerProps {
  pathName: string;
}
