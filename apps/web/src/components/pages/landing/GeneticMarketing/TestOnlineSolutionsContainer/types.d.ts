export type Section2ItemType = {
  icon: string;
  title: string;
  text: string;
  btnName: string;
  btnUrl: string;
};

export type Section3ItemType = {
  icon: string;
  title: string;
  text: string;
};

export type FooterType = {
  title: string;
  text: string;
};

export type TestOnlineResultData = {
  id: number;
  section2: Section2ItemType[];
  section3: Section3ItemType[];
  footer: FooterType;
};

export type Section2Props = {
  section: Section2ItemType[];
  color: string;
};

export type Section3Props = {
  section: Section3ItemType[];
  id: number;
  color: string;
};

export type FooterBoxProps = {
  footer: FooterType;
};
