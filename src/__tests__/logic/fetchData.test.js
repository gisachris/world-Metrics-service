import { fetchMockData } from '../../mocks/fetchMock.js';
import mockData from '../../mocks/data.js';
import FetchMock from 'jest-fetch-mock'

describe('tests for fetching Data functionality', () => {
  beforeEach(() => {
    FetchMock.resetMocks();
  });

  test('when call to the API is successful', async () => {
    FetchMock.mockResponseOnce(JSON.stringify(mockData));

    const results = await fetchMockData();

    expect(results).toBeInstanceOf(Array);
  });

  test('when tests to the API fail', async () => {
    const message = 'request 404';
    FetchMock.mockRejectOnce(new Error(message));

    const result = await fetchMockData();

    expect(result).toEqual([]);
  });
});
