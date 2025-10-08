import { EventName, Properties } from 'posthog-js';

export type UseAnalyticsCallEventTypes = (event_name: EventName, properties?: Properties) => void;

export interface UseAnalyticsTypes {
  inView_eventName?: string;
  pageView_eventName?: string;
  mountTimer_eventName?: string;
}

export interface UseAnalyticsPageViewTypes extends Pick<UseAnalyticsTypes, 'pageView_eventName'> {
  callEvent: UseAnalyticsCallEventTypes;
}

export interface UseAnalyticsInViewTypes extends Pick<UseAnalyticsTypes, 'inView_eventName'> {
  callEvent: UseAnalyticsCallEventTypes;
}

export interface UseAnalyticsMountTimerTypes extends Pick<UseAnalyticsTypes, 'mountTimer_eventName'> {
  callEvent: UseAnalyticsCallEventTypes;
}
