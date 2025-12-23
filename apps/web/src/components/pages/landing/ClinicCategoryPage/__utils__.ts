import * as cheerio from 'cheerio';

export const handleAnchorStyling = (body: string) => {
  const $ = cheerio.load(body);

  $('a').each((_, element) => {
    const el = $(element);

    el.addClass('!text-impo_Primary_Primary');
  });

  return $.html();
};
