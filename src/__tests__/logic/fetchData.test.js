import FetchMock from 'jest-fetch-mock';
import fetchMockData from '../../mocks/fetchMock';
import mockData from '../../mocks/data';

describe('tests for fetching Data functionality', () => {
  beforeEach(() => {
    FetchMock.resetMocks();
  });

  test('when call to the API is successful', async () => {
    FetchMock.mockResponseOnce(JSON.stringify(mockData));

    const results = await fetchMockData();

    expect(results).toBeInstanceOf(Response);
  });
});
