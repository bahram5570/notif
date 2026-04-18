export const clinicProfileHandler = (queries: string) => {
  const queriesList = queries.split('&');
  const drId = queriesList?.[0]?.split('=')?.[1];
  const clinicInfo = queriesList?.[1]?.split('=')?.[1];

  return `/protected/clinic/doctor/${clinicInfo}/${drId}`;
};
