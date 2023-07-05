import '../styles/countryMax.css';
import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CountryDisplay = () => {
  const { name } = useParams();
  const countries = useSelector((state) => state.countries.data);
  const selected = countries.filter((country) => country.name.common === name)[0];

  if (!selected) {
    return <Navigate to="/home" replace />;
  }

  return (
    <section className="countryInfoHolder">
      <span className="countryName">{selected.name.common}</span>
      {selected.flags && <img src={selected.flags.png} alt={selected.flags.alt} className="countryImage" />}
      {selected.area && (
        <>
          <span className="AreaCode">Area Code</span>
          <p className="AreaCodeData">{selected.area}</p>
        </>
      )}
      {selected.name.official && (
        <section className="propertyHolder">
          <span className="propHeader">officially known as</span>
          <p className="selectedPosition">{selected.name.official}</p>
        </section>
      )}
      {selected.population && (
        <section className="propertyHolder">
          <span className="propHeader">Total living population</span>
          <p className="selectedPosition">{selected.population}</p>
        </section>
      )}
      {selected.region && (
        <section className="propertyHolder">
          <span className="propHeader">located in the Region</span>
          <p className="selectedPosition">{selected.region}</p>
        </section>
      )}
      {selected.unMember && (
        <section className="propertyHolder">
          <span className="propHeader">Membership to the UN</span>
          <p className="selectedPosition">Active</p>
        </section>
      )}
    </section>
  );
};

export default CountryDisplay;
