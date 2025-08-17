import { baseUrl } from '@services/http';

import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';

import { response } from './db';

const handlers = [
  http.get(`${baseUrl}/date/note`, () => {
    return HttpResponse.json(response);
  }),
];

export const server = setupServer(...handlers);
