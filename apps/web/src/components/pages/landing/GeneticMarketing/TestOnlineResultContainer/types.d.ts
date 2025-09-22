export type HeaderType = {
  title: string;
  description: string;
};

export type Section1ItemType = {
  icon: string;
  title: string;
};

export type Section1Type = {
  intro: string;
  title: string;
  text: string;
  items: Section1ItemType[];
  textBottom: string;
};

export type Section2ItemType = {
  icon: string;
  title: string;
  text: string;
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
  header: HeaderType;
  section1: Section1Type;
  section2: Section2ItemType[];
  section3: Section3ItemType[];
  footer: FooterType;
};

export type HeaderBoxProps = {
  header: HeaderType;
  id: number;
  color: string;
};

export type Section1Props = {
  section: Section1Type;
  id: number;
  color: string;
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
