import { getCultureCookie } from '@actions/userCookies.actions';

export const GET = async () => {
  const culture = await getCultureCookie();

  return Response.json({ culture });
};
