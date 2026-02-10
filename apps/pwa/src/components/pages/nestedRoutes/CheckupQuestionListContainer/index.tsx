'use client';

import { MainPageLayout } from '@repo/core/components/MainPageLayout';

import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import QuestionCheckupItem from './QuestionCheckupItem';
import { ItemType } from './QuestionCheckupItem/type';

const CheckupQuestionListContainer = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const questionItems = getQueryParams('items');
  const questionTitle = getQueryParams('title');
  const questionCheckupItemList: ItemType[] = (questionItems && JSON.parse(questionItems)) || [];

  return (
    <MainPageLayout
      rightElement="BackButton"
      rightElementScript={questionTitle || ''}
      className="px-3 bg-impo_Neutral_Surface"
    >
      <div className="rounded-lg  px-3 bg-impo_Neutral_Background">
        {questionCheckupItemList.map((item, index) => {
          return <QuestionCheckupItem key={index} {...item} lastIndex={questionCheckupItemList.length === index} />;
        })}
      </div>
    </MainPageLayout>
  );
};

export default CheckupQuestionListContainer;
