import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { fetchData } from './redux/features/countrySlice';
import Navigation from './components/navigation';
import HomePage from './components/homepage';
import RegionDisplay from './components/regions';
import CountryDisplay from './components/countryMax';
import Search from './components/search';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  dispatch(fetchData());

  return (
    <div className="appHolder">
      <Navigation />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/details/:name" element={<RegionDisplay />} />
        <Route path="/details/coutries/:name" element={<CountryDisplay />} />
        <Route path="/*" element={<Navigate to="/home" replace />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
