import { createElement } from 'react';

import { ctaBannerListService } from '@services/ctaBannerServices';
import { toPersianNumbers } from '@utils/numbers';

import CtaBanner from '@components/CtaBanner';
import * as cheerio from 'cheerio';
import { ChildNode, Element } from 'domhandler';

import { ArticleSubjectListTypes } from './types';

const oldCtaList = [
  { name: 'between1M.', path: '/assets/images/betweenBanner' },
  { name: 'between2M.', path: '/assets/images/betweenBanner' },
  { name: 'between3M.', path: '/assets/images/betweenBanner' },
  { name: 'between4M.', path: '/assets/images/betweenBanner' },
  { name: 'between5M.', path: '/assets/images/betweenBanner' },
  { name: 'between6M.', path: '/assets/images/betweenBanner' },
  { name: 'between7M.', path: '/assets/images/betweenBanner' },
  { name: 'between8M.', path: '/assets/images/betweenBanner' },
  { name: 'between9M.', path: '/assets/images/betweenBanner' },
  { name: 'between10M.', path: '/assets/images/betweenBanner' },
  { name: 'between11M.', path: '/assets/images/betweenBanner' },
  { name: 'between12M.', path: '/assets/images/betweenBanner' },
  { name: 'between13M.', path: '/assets/images/betweenBanner' },
  { name: 'between14M.', path: '/assets/images/betweenBanner' },
  { name: 'between15M.', path: '/assets/images/betweenBanner' },
  { name: 'between16M.', path: '/assets/images/betweenBanner' },
  { name: 'between17M.', path: '/assets/images/betweenBanner' },
  { name: 'between18M.', path: '/assets/images/betweenBanner' },
  { name: 'between19M.', path: '/assets/images/betweenBanner' },
  { name: 'between1.', path: '/assets/images/betweenBanner' },
  { name: 'between2.', path: '/assets/images/betweenBanner' },
  { name: 'between3.', path: '/assets/images/betweenBanner' },
  { name: 'between4.', path: '/assets/images/betweenBanner' },
  { name: 'between5.', path: '/assets/images/betweenBanner' },
  { name: 'between6.', path: '/assets/images/betweenBanner' },
  { name: 'between7.', path: '/assets/images/betweenBanner' },
  { name: 'between8.', path: '/assets/images/betweenBanner' },
  { name: 'between9.', path: '/assets/images/betweenBanner' },
  { name: 'between10.', path: '/assets/images/betweenBanner' },
  { name: 'between11.', path: '/assets/images/betweenBanner' },
  { name: 'between12.', path: '/assets/images/betweenBanner' },
  { name: 'between13.', path: '/assets/images/betweenBanner' },
  { name: 'between14.', path: '/assets/images/betweenBanner' },
  { name: 'between15.', path: '/assets/images/betweenBanner' },
  { name: 'between16.', path: '/assets/images/betweenBanner' },
  { name: 'between17.', path: '/assets/images/betweenBanner' },
  { name: 'between18.', path: '/assets/images/betweenBanner' },
  { name: 'between19.', path: '/assets/images/betweenBanner' },
  { name: 'babyCheck.', path: '/assets/images/betweenBanner/new' },
  { name: 'babyCheck2.', path: '/assets/images/betweenBanner/new' },
  { name: 'bardari.', path: '/assets/images/betweenBanner/new' },
  { name: 'coverBgBanner.', path: '/assets/images/betweenBanner/new' },
  { name: 'coverBgBannerM.', path: '/assets/images/betweenBanner/new' },
  { name: 'eghdam.', path: '/assets/images/betweenBanner/new' },
  { name: 'eghdam2.', path: '/assets/images/betweenBanner/new' },
  { name: 'eghdam3.', path: '/assets/images/betweenBanner/new' },
  { name: 'eghdam4.', path: '/assets/images/betweenBanner/new' },
  { name: 'kit.', path: '/assets/images/betweenBanner/new' },
  { name: 'pishgiri.', path: '/assets/images/betweenBanner/new' },
  { name: 'pishgiri2.', path: '/assets/images/betweenBanner/new' },
  { name: 'pishgiri3.', path: '/assets/images/betweenBanner/new' },
  { name: 'sexTracker.', path: '/assets/images/betweenBanner/new' },
  { name: 'sexTracker2.', path: '/assets/images/betweenBanner/new' },
];

export const handleBodyUpdate = async (body: string) => {
  const { renderToString } = await import('react-dom/server');
  let result = body;

  // # Setting up old Cta
  oldCtaList.forEach((item) => {
    const regex = new RegExp(`src="(?!data:)[^"]*${item.name}[^"]*"`, 'g');
    result = result.replaceAll(regex, `src="${item.path}/${item.name}webp"`);
    result = result.replace(/\s*srcset\s*=\s*(['"])[^'"]*\1/g, '');
  });

  // # Setting up Cta banners
  const { ctaData } = await ctaBannerListService();

  if (ctaData) {
    const ctaRegex = /\*\*\*(.*?)\*\*\*/g; // # ***name***
    const matches = Array.from(result.matchAll(ctaRegex));

    for (const match of matches) {
      const targetName = `***${match[1].toLocaleLowerCase().trim()}***`;
      const selectedCta = ctaData.find((item) => item.name.toLocaleLowerCase().trim() === targetName);

      if (selectedCta) {
        const ctaElement = createElement(CtaBanner, { ...selectedCta });
        const ctaScript = renderToString(ctaElement);

        // # Select target with any kinds of tags
        const regexTargetName = targetName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const targetRegex = new RegExp(`<([a-zA-Z0-9]+)(\\s[^>]*)?>\\s*${regexTargetName}\\s*<\\/\\1>`, 'g');

        result = result.replace(targetRegex, ctaScript);
      }
    }
  }

  // # Remove Landing components IDs
  const landingRegex = /\^\^\^(.*?)\^\^\^/g; // # ^^^name^^^
  const landingMatches = Array.from(result.matchAll(landingRegex));

  for (const match of landingMatches) {
    const targetName = `^^^${match[1].trim()}^^^`;
    const regexTargetName = targetName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const targetRegex = new RegExp(`<([a-zA-Z0-9]+)(\\s[^>]*)?>\\s*${regexTargetName}\\s*<\\/\\1>`, 'g');

    result = result.replace(targetRegex, '');
  }

  const $ = cheerio.load(result);

  let articleSubjectIdCount = 1;
  const articleSubjectList: ArticleSubjectListTypes = [];

  $('p, span, a, section, td, th, ol, ul, li, h1, h2, h3, h4, h5, h6').each((_, element) => {
    const currentElement = $(element);

    const isH2 = currentElement.is('h2');
    const isH3 = currentElement.is('h3');
    const isTd = currentElement.is('td');
    const isTh = currentElement.is('th');
    const isLink = currentElement.is('a');
    const isImg = currentElement.is('img');
    const isNoCheerioStyling = currentElement.attr('data-no-cheerio-styling');

    // # Making subjects list (table of contents - TOC)
    if (isH2 || isH3) {
      const title = currentElement.text().trim();
      const id = `article-subject-${articleSubjectIdCount}-id`;

      if (isH2) {
        articleSubjectList.push({ id, title, tagType: 'h2' });
      }

      if (isH3) {
        articleSubjectList.push({ id, title, tagType: 'h3' });
      }

      currentElement.attr('id', id);
      articleSubjectIdCount++;
    }

    // # Styling tables
    if (isTd || isTh) {
      currentElement.addClass('!border-[1px] !border-impo_Neutral_OnBackground !px-2 !py-4 !bg-transparent');
    }

    // # Styling images
    if (isImg) {
      currentElement.attr('loading', 'lazy');
    }

    // # Styling links
    if (isLink) {
      currentElement.addClass('!text-impo_Primary_Primary');
    }

    // # Skip Cheerio styling for elements when `data-no-cheerio-styling` is present
    if (!isNoCheerioStyling) {
      currentElement.addClass('!text-impo_Neutral_OnBackground');
    }
  });

  // # Convert english numbers to persian
  const convertNumbersHandler = (node: Element | ChildNode) => {
    const children = $(node).contents();

    children.each((_, child) => {
      if (child.type === 'text') {
        const currentText = $(child).text();
        $(child).replaceWith(toPersianNumbers(currentText));
        return;
      }

      if (child.type === 'tag') {
        convertNumbersHandler(child);
      }
    });
  };

  convertNumbersHandler($.root()[0]);

  // # Separate article to before and after its abstract
  const html = $.html();
  const endOfAbstract = $('h2, h3').first().prop('outerHTML') || '';
  const htmlList = html.split(endOfAbstract);

  let abstractBody = htmlList[0];
  let articleBody = endOfAbstract + htmlList[1];

  const $abstract = cheerio.load(abstractBody);
  const $article = cheerio.load(articleBody);

  const firstImageBlock = $abstract('p:has(img), figure:has(img)').first();

  if (firstImageBlock.length) {
    const insertTarget = $article('h2, h3').first();
    const cloned = firstImageBlock.clone();
    insertTarget.length ? insertTarget.before(cloned) : $article('body').prepend(cloned);
    firstImageBlock.remove();
  }

  // # Final results
  abstractBody = $abstract.html();
  articleBody = $article.html();

  return { abstractBody, articleBody, articleSubjectList };
};
