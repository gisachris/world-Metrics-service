export const fetchMockData = async () => {
      try {
        const request = await fetch(baseURL);
        return request;
      } catch (e) {
        return [];
      }
    }
  