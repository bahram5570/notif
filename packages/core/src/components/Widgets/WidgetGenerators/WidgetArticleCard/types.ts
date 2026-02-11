import { WidgetArticleCardTypes } from '../../../../providers/WidgetActionsProvider';

export interface WidgetArticleCardProps extends Pick<WidgetArticleCardTypes, 'data'> {}

type ItemsTypes = Pick<WidgetArticleCardProps, 'data'>['data']['items'][0];
export interface ArticleGeneratorProps extends ItemsTypes {}
