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
};

export type TestOnlineResultData = {
  id: number;
  header: HeaderType;
  section1: Section1Type;
};

export type HeaderBoxProps = {
  header: HeaderType;
  id: number;
  color: string;
};

export type Section1Props = {
  section: Section1Type;
  color: string;
};
