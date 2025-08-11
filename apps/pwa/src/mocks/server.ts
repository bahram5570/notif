import { baseUrl } from '@services/http';

import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';

import responseData from './db.json';

const handlers = [
  http.get(`${baseUrl}/date/note`, () => {
    return HttpResponse.json(responseData);
  }),
];

export const server = setupServer(...handlers);
