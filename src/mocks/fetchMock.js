const fetchMockData = async () => {
  const baseURL = 'https://restcountries.com/v3.1/all';
  try {
    const request = await fetch(baseURL);
    return request;
  } catch (e) {
    return [];
  }
};

export default fetchMockData;
