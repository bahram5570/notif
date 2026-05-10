export const actionRouteConverter = async (serverLink: string) => {
  const baseRoute = serverLink.split('?')[0];
  const queries = serverLink.split('?')[1];
  let result = '';

  switch (baseRoute) {
    case '/calendar':
      result = '/protected/calendar';
      break;

    case '/partner':
      result = '/protected/partner';
      break;

    case '/profile':
      result = '/protected/profile';
      break;

    case '/support':
      result = '/protected/support';
      break;

    case '/partner/messenger':
      result = '/protected/partnerMessage';
      break;

    case '/partner/memory':
      result = '/protected/memory';
      break;

    case '/partner/challenge/daly':
      result = '/protected/challenge';
      break;

    case '/chat':
      result = '/protected/challenge';
      break;

    case '/partner/challenge/archive':
      result = '/protected/challengeHistory';
      break;

    case '/reminder':
      result = '';
      break;

    case '/subscription':
      result = '/protected/subscription';
      break;

    case '/reports':
      result = '/protected/healthReport';
      break;

    case '/clinic':
      result = '/protected/clinic';
      break;

    case '/healthRoutine':
      result = `/protected/routin?searchData=${encodeURIComponent(queries)}`;
      break;

    case '/healthRoutine/item':
      result = `/protected/routin/routinItem?searchData=${encodeURIComponent(queries)}`;
      break;
    case '/routine':
      result = `/protected/pairRoutin?searchData=${encodeURIComponent(queries)}`;
      break;
    case '/routine/item':
      result = `/protected/pairRoutin/pairRoutinItem?searchData=${encodeURIComponent(queries)}`;
      break;

    case '/note':
      result = '/protected/note/addNote';
      break;
  }

  return result;
};
