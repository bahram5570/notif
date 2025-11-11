import { StoryPreviewPorps } from '../../types';

export type UseListStoryTypes = Pick<StoryPreviewPorps, 'storyList'>['storyList'];

export type NavigateStoryHandlerTypes = (goToNextStory: boolean) => void;
