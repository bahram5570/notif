import { useWidgetActions } from '../../../../../../../hooks/useWidgetActions';
import { ActionTypeEnum, ActionTypes } from '../../../../../../../providers/WidgetActionsProvider';
import { UseWidgetHintCardLinkToTypes } from './types';

const useWidgetHintCardLinkTo = ({ internalLink, externalLink }: UseWidgetHintCardLinkToTypes) => {
  const { actionHandler } = useWidgetActions();

  const hasInternalLink = typeof internalLink === 'string' && internalLink.length > 0;
  const hasExternalLink = typeof externalLink === 'string' && externalLink.length > 0;
  const hasLink = hasExternalLink || hasInternalLink;

  const linkToHandler = () => {
    const action: ActionTypes = {
      api: '',
      internal: '',
      actionTypes: [],
      actionType: ActionTypeEnum.None,
      nextStep: { type: 0, isDismissible: false, delaySecond: 0, data: null },
    };

    if (hasInternalLink) {
      action.actionType = ActionTypeEnum.InternalRout;
      action.internal = internalLink;
    } else if (hasExternalLink) {
      action.actionType = ActionTypeEnum.ExternalRout;
      action.api = externalLink;
    }

    actionHandler(action);
  };

  return { hasLink, linkToHandler };
};

export default useWidgetHintCardLinkTo;
