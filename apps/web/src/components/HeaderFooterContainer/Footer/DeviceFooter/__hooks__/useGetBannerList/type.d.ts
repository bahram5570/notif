type btnDataType = {
  btnLabel: string;
  color: string[];
  btnUrl: string;
};

export type CategorybannerItemType = {
  id: string;
  title: string;
  logoUrl: string;
  btnData: btnDataType;
  backgroundColor: string[];
  catName: string;
};

export type CategorybannerResponseType = {
  items: CategorybannerItemType[];
};
