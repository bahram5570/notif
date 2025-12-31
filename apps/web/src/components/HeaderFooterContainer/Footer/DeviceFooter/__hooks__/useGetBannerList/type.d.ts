type btnDataType = {
  btnLabel: string;
  color: string[];
  btnUrl: string;
};

export type CategorybannerItemType = {
  id: string;
  title: string;
  logoUrl: string;
  catName: string;
  btnData: btnDataType;
  backgroundColor: string[];
};

export type CategorybannerResponseType = {
  items: CategorybannerItemType[];
};
