import { WidgetsTypes } from '@repo/core/providers/WidgetActionsProvider';

export type KnowledgeResponseType = {
  valid: boolean;
  widgets: WidgetsTypes[];
  items: [
    {
      title: string;
      category: string[];
      description: string;
      link2: string;
      pubDate: string;
    },
  ];
};
