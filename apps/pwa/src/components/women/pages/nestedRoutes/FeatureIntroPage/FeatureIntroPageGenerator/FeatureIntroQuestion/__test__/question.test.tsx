import { PORTAL_ID } from '@constants/app.constants';
import ModalsQueryParamsProvider from '@providers/ModalsQueryParamsProvider';
import { QuestionDataType } from '@providers/__featureIntro__/FeatureIntroProvider/__hooks__/useGetData/type';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';

import FeatureIntroQuestion from '..';

const client = new QueryClient();

const data: Pick<QuestionDataType, 'data'>['data'] = {
  descripition: '',
  fail: { btnText: '', description: '', title: '' },
  options: [{ isCorrect: false, title: '' }],
  successFull: { btnText: '', description: '', title: '' },
  textBtn: '',
  title: '',
};

describe('test NoteItemList', () => {
  it('t1', async () => {
    render(
      <QueryClientProvider client={client}>
        <ModalsQueryParamsProvider />
        <FeatureIntroQuestion data={data} goToNext={() => {}} />
        <div id={PORTAL_ID} />
      </QueryClientProvider>,
    );

    expect(screen.queryByTestId('reward-modal-trailonboarding')).not.toBeInTheDocument();
    expect(screen.getByTestId('option-list-trailonboarding')).toBeInTheDocument();
  });
});
