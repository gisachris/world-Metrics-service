import React from "react";
import CountryDisplay from "../../components/countryMax";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import mockData from "../../mocks/data";
import store from "../../mocks/store.mock";

// Mock implementation of useParams
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    name: 'rwanda',
  }),
}));

// Mock implementation of useSelector
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('CountryDisplay component', () => {
  beforeEach(() => {
    useSelector.mockReturnValue([]);
  });

  it('should render the component with the selected country', () => {

    useSelector.mockReturnValue(mockData);

    render(
      <MemoryRouter>
        <Provider store={store}>
          <CountryDisplay />
        </ Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(mockData[0].name.common)).toBeInTheDocument();
    expect(screen.getByAltText(mockData[0].flags.alt)).toBeInTheDocument();
  });
});
