export type AssociationType = {
  id: string;
  title: string;
  isFollowed: boolean;
  cover: string;
};

export type ShareExperienceResponseTypes = {
  groupsTitleText: string;
  otherTitleText: string;
  selfTitleText: string;
  inputText: string;
  text: string;
  bannerMedia: string;
  toastText: string;
  associationSectionTitle: string;
  topics: {
    coverImage: string;
    inputText: string;
    image: string;
    name: string;
    bio: string;
    id: string;
  }[];
  profile: {
    medicalNumber: string;
    avatarImage: string;
    expertise: string;
    biography: string;
    username: string;
    userId: string;
  };
  categories: {
    isSelected: boolean;
    title: string;
    icon: string;
    id: string;
    showAssociation: boolean;
  }[];
  associations: AssociationType[];
};
