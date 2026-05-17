import { ActionTypes } from '../../providers/WidgetActionsProvider';
import { ShareExperienceStateEnum } from './enum';

export type SelectedCategoryHandlerTypes = (id: string, showAssociation: boolean) => void;
export type ApiInfoTypes = { userId: string; isFollow: boolean; userName: string };
export type FollowHandlerTypes = (props: ApiInfoTypes) => void;

export type AccessType = { access: { isBan: boolean; textMessage: string; btnText: string } };
export type PageType = {
  page: {
    firstId: string;
    lastId: string;
    hasNext: boolean;
  };
};

export type PageInfoType = Pick<PageType, 'page'>['page'];
export type AssociationType = {
  id: string;
  title: string;
  isFollowed: boolean;
  cover: string;
};

export type TopicsType = {
  coverImage: string;
  inputText: string;
  image: string;
  name: string;
  bio: string;
  id: string;
};

export type ProfileType = {
  medicalNumber: string;
  avatarImage: string;
  expertise: string;
  biography: string;
  username: string;
  userId: string;
};

export type CategoriesType = {
  isSelected: boolean;
  title: string;
  icon: string;
  id: string;
  showAssociation: boolean;
};

export type ErrorType = {
  message: string;
  btnLabel: string;
};

//# response of

export type ShareExperienceResponseTypes = AccessType &
  PageType & {
    failure: boolean;
    error: ErrorType;
    groupsTitleText: string;
    otherTitleText: string;
    selfTitleText: string;
    inputText: string;
    text: string;
    bannerMedia: string;
    toastText: string;
    associationSectionTitle: string;
    topics: TopicsType[];
    profile: ProfileType;
    categories: CategoriesType[];
    associations: AssociationType[];
  };

export type TagType = { title: string; action: ActionTypes | null };

export type ExperienceType = {
  state: ShareExperienceStateEnum;
  approvedProfile: boolean;
  selfExperience: boolean;
  prohibtComment: boolean;
  isBookmarked: boolean;
  commentCount: number;
  createTime: string;
  isFollow: boolean;
  topicName: string;
  isDelete: boolean;
  likeCount: number;
  disliked: number;
  isEdit: boolean;
  userId: string;
  avatar: string;
  isPin: boolean;
  image: string;
  self: boolean;
  text: string;
  name: string;
  id: string;
  tags?: TagType[];
};

export type ExperiencesResponseTypes = AccessType &
  PageType & {
    groupsTitleText: string;
    otherTitleText: string;
    selfTitleText: string;
    totalCount: number;
    inputText: string;
    text: string;
    expirences: ExperienceType[];
  };

export type TopicExperiencesResponseTypes = AccessType &
  PageType & {
    totalCount: number;
    id: string;
    coverImage: string;
    inputText: string;
    bio: string;
    prohibtShareExp: boolean;
    name: string;
    image: string;
    expirences: ExperienceType[];
  };

export type CommentsRepliesTypes = {
  id: string;
  name: string;
  text: string;
  self: boolean;
  state: number;
  avatar: string;
  userId: string;
  isEdit: boolean;
  disliked: number;
  isDelete: boolean;
  likeCount: number;
  createTime: string;
  selfExperience: boolean;
  approvedProfile: boolean;
}[];

export type CommentsListTypes = {
  id: string;
  text: string;
  name: string;
  image: string;
  userId: string;
  avatar: string;
  isEdit: boolean;
  disliked: number;
  isDelete: boolean;
  likeCount: number;
  createTime: string;
  selfComment: boolean;
  repliesCount: number;
  approvedProfile: boolean;
  replies: CommentsRepliesTypes;
  state: ShareExperienceStateEnum;
}[];

export type CommentsResponseTypes = AccessType &
  PageType & {
    name: string;
    text: string;
    image: string;
    self: boolean;
    valid: boolean;
    avatar: string;
    userId: string;
    likeCount: number;
    topicName: string;
    isFollow: boolean;
    createTime: string;
    dislikeCount: number;
    commentCount: number;
    isBookmarked: boolean;
    approvedProfile: boolean;
    comments: CommentsListTypes;
    state: ShareExperienceStateEnum;
    toast: string;
    canSendComment: boolean;
    canSendReply: boolean;
  };

type SelfTypes = ExperienceType & {
  isDelete: boolean;
  biography: string;
};

export type ProfileResponsePropsType = AccessType & {
  storyCount: number;
  isNotificationActive: boolean;
  notificationActivationMessage: string;
  topicsTitleText: string;
  selfTitleText: string;
  activitiesTitleText: string;
  isSelf: boolean;
  usernameHintText: string;
  isDr: boolean;
  self: SelfTypes[];
  activities: ExperienceType[];
  showMoreActivity: boolean;
  showMoreStory: boolean;
  isFollow: boolean;
  profile: {
    id: string;
    username: string;
    expertise: string;
    biography: string;
    avatarImage: string;
    avatars: string[];
    selectedIndex: number;
  };
  followCount: {
    followerCount: number;
    followingCount: number;
  };
};
