import { actionRouteConverter } from '@providers/WidgetActionsProvider/__hooks__/useActionTypes/useActionTypeInternalRout/__utils__/actionRouteConverter';

import { NextResponse } from 'next/server';

export const handleReferralLinksService = async (queryParams: string, requestUrl: string) => {
  const decodedQuery = queryParams.replace('rout=', '');
  const referralLinkQuery = '/' + decodeURIComponent(decodedQuery);
  const redireckUrl = await actionRouteConverter(referralLinkQuery);

  return NextResponse.redirect(new URL(redireckUrl, requestUrl));
};
