import { actionRouteConverter } from '@providers/PwaWidgetActionsProvider/__utils__';

import { NextResponse } from 'next/server';

export const handleReferralLinksService = async (queryParams: string, requestUrl: string) => {
  const decodedQuery = queryParams.replace('rout=', '');
  const referralLinkQuery = '/' + decodeURIComponent(decodedQuery);
  const redireckUrl = await actionRouteConverter(referralLinkQuery);

  return NextResponse.redirect(new URL(redireckUrl, requestUrl));
};
