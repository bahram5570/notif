export type ItemType = {
  categoryTitle: string;
  programs: ProgramType[];
};

export type CategorizedRoutinResponseType = {
  items: ItemType[];
};
