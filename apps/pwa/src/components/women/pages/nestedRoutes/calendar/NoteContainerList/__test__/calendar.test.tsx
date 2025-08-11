import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import NoteContainerList from '..';

const client = new QueryClient();

describe('test NoteItemList', () => {
  it('t1', async () => {
    render(
      <QueryClientProvider client={client}>
        <NoteContainerList />
      </QueryClientProvider>,
    );

    expect(screen.queryByTestId('note-list-container')).not.toBeInTheDocument();
    expect(screen.getByTestId('note-list-skeleton')).toBeInTheDocument();
  });

  test('t2', async () => {
    render(
      <QueryClientProvider client={client}>
        <NoteContainerList />
      </QueryClientProvider>,
    );

    await waitFor(() => {
      expect(screen.queryByTestId('note-list-skeleton')).not.toBeInTheDocument();
      expect(screen.getByTestId('note-list-container')).toBeInTheDocument();
    });
  });

  test('t3', async () => {
    render(
      <QueryClientProvider client={client}>
        <NoteContainerList />
      </QueryClientProvider>,
    );

    await waitFor(() => {
      expect(screen.queryByTestId('note-list-container')).toBeInTheDocument();
      expect(screen.getByTestId('note-Item-list-container')).toBeInTheDocument();
    });
  });

  test('t4', async () => {
    render(
      <QueryClientProvider client={client}>
        <NoteContainerList />
      </QueryClientProvider>,
    );

    await waitFor(() => {
      expect(screen.queryByTestId('note-list-container')).toBeInTheDocument();
      expect(screen.getByTestId('note-Item-list-container')).toBeInTheDocument();
    });

    const noteItems = screen.queryAllByTestId('note-item');
    expect(noteItems.length).toBeGreaterThan(0);
  });

  test('t5', async () => {
    render(
      <QueryClientProvider client={client}>
        <NoteContainerList />
      </QueryClientProvider>,
    );

    await waitFor(() => {
      expect(screen.queryByTestId('note-list-container')).toBeInTheDocument();
      expect(screen.getByTestId('note-Item-list-container')).toBeInTheDocument();
    });

    const newNoteLinkBtn = screen.getByTestId('new-note-link-btn');
    expect(newNoteLinkBtn).toBeInTheDocument();

    fireEvent.click(newNoteLinkBtn);
  });
});
