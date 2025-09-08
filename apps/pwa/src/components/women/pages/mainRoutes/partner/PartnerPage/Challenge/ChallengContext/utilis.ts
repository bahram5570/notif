export enum PartnerTypeLink {
  form,
  history,
  memory,
  messenger,
  chat,
  web,
  pair,
}

type LinkType = { type: number; url: string };

export const buttonLinkHandler = (link: LinkType) => {
  switch (link.type) {
    case PartnerTypeLink.form:
      return '/protected/challenge';
    case PartnerTypeLink.history:
      return '/protected/ChallengeHistory';
    case PartnerTypeLink.memory:
      return '/common/goToApp/memory';
    case PartnerTypeLink.messenger:
      return '/common/goToApp/message';
    case PartnerTypeLink.chat:
      return `/protected/challenge/${link.url}`;
    case PartnerTypeLink.web:
      return `${link.url}`;
    case PartnerTypeLink.pair:
      return '/protected/partnerStart';
    default:
      return '/common/goToApp/mate';
  }
};
