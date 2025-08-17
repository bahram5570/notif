import { PORTAL_ID } from '@constants/app.constants';
import '@testing-library/jest-dom';

import { server } from './src/mocks/server';

beforeAll(() => {
  server.listen();

  const modalPortal = document.createElement('div');
  modalPortal.setAttribute('id', PORTAL_ID);
  document.body.appendChild(modalPortal);
});

afterAll(() => {
  server.close();

  const modalPortal = document.getElementById(PORTAL_ID);
  if (modalPortal) {
    document.body.removeChild(modalPortal);
  }
});

afterEach(() => {
  server.resetHandlers();
});

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
  }),
  usePathname() {
    return '';
  },
  useSearchParams: () => ({
    get: () => {},
  }),
}));
