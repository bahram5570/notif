import { PORTAL_ID } from '@constants/app.constants';
import ModalsQueryParamsProvider from '@providers/ModalsQueryParamsProvider';
import { QuestionDataType } from '@providers/__featureIntro__/FeatureIntroProvider/__hooks__/useGetData/type';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import FeatureIntroQuestion from '..';

const client = new QueryClient();

const data: Pick<QuestionDataType, 'data'>['data'] = {
  descripition: '',
  fail: { btnText: '', description: '', title: '' },
  options: [
    { isCorrect: false, title: '' },
    { isCorrect: false, title: '' },
    { isCorrect: true, title: '' },
    { isCorrect: false, title: '' },
  ],
  successFull: { btnText: '', description: '', title: '' },
  textBtn: '',
  title: '',
};

describe('test FeatureIntro Question', () => {
  it('t1', async () => {
    render(
      <QueryClientProvider client={client}>
        <ModalsQueryParamsProvider />
        <FeatureIntroQuestion data={data} goToNext={() => {}} />
      </QueryClientProvider>,
    );

    expect(screen.queryByTestId('reward-modal-trailonboarding')).not.toBeInTheDocument();
    expect(screen.getByTestId('option-list-trailonboarding')).toBeInTheDocument();
  });

  it('t2', async () => {
    render(
      <QueryClientProvider client={client}>
        <ModalsQueryParamsProvider />
        <FeatureIntroQuestion data={data} goToNext={() => {}} />
      </QueryClientProvider>,
    );

    expect(screen.getAllByRole('radio')).toHaveLength(4);
  });

  it('t3', async () => {
    render(
      <QueryClientProvider client={client}>
        <FeatureIntroQuestion data={data} goToNext={() => {}} />
        <ModalsQueryParamsProvider />
        <div id={PORTAL_ID} />
      </QueryClientProvider>,
    );

    const optionItem = screen.getAllByRole('radio');

    const button = await screen.findByTestId('btn-question-page');

    expect(button).toBeDisabled();

    userEvent.click(optionItem[0]);

    await waitFor(() => {
      expect(button).not.toBeDisabled();
    });

    userEvent.click(button);

    const modalChild = await screen.findByTestId('reward-modal-trailonboarding');
    expect(modalChild).toBeInTheDocument();
  });
});
