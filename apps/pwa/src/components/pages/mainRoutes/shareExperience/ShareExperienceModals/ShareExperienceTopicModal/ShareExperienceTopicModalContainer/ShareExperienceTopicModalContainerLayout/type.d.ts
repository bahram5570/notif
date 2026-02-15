export type ShareExperienceTopicModalContainerLayoutPropsTypes = {
  scrolled: boolean;
  coverImage: string | undefined;
  topicName: string | undefined;
  children: React.ReactNode;
  isLoading: boolean;
  bio: string | undefined;
  scrollRef: React.RefObject<HTMLDivElement>;
  markerRef: React.RefObject<HTMLDivElement>;
};
